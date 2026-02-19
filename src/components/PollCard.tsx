"use client";

import { useEffect, useMemo, useState } from "react";

type PollOption = {
  id: number;
  label: string;
  votes?: number | null;
};

export type PollItem = {
  id: number;
  title: string;
  active: boolean;
  endsAt?: string | null;
  options: PollOption[];
};

type PollCardProps = {
  poll: PollItem;
  locale: string;
  labels: {
    status: string;
    endsAt: string;
    open: string;
    closed: string;
    votes: string;
    submit: string;
    selected: string;
    firstName: string;
    lastName: string;
  };
};

function formatPollDate(value: string | null | undefined, locale: string) {
  if (!value) {
    return null;
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export default function PollCard({ poll, locale, labels }: PollCardProps) {
  const [options, setOptions] = useState<PollOption[]>(poll.options ?? []);
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
  const [isVoting, setIsVoting] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const storedVote = window.localStorage.getItem(`pollVote:${poll.id}`);
    if (storedVote === "1") {
      setHasVoted(true);
    }
  }, [poll.id]);

  const formattedEndsAt = formatPollDate(poll.endsAt, locale);
  const isOpen = useMemo(() => {
    if (!poll.active) {
      return false;
    }

    if (!poll.endsAt) {
      return true;
    }

    const end = new Date(poll.endsAt);
    if (Number.isNaN(end.getTime())) {
      return true;
    }

    return Date.now() < end.getTime();
  }, [poll.active, poll.endsAt]);

  const getOrCreateDeviceId = () => {
    if (typeof window === "undefined") {
      return null;
    }

    const key = "pollDeviceId";
    const existing = window.localStorage.getItem(key);
    if (existing) {
      return existing;
    }

    const newId =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `device_${Math.random().toString(36).slice(2)}${Date.now()}`;
    window.localStorage.setItem(key, newId);
    return newId;
  };

  const handleSubmitVote = async () => {
    if (!isOpen || isVoting || hasVoted || selectedOptionId === null) {
      return;
    }

    if (!firstName.trim() || !lastName.trim()) {
      setError(
        locale === "pt-BR"
          ? "Informe seu nome e sobrenome."
          : "Please enter your first and last name."
      );
      return;
    }

    const deviceId = getOrCreateDeviceId();
    if (!deviceId) {
      setError("Missing device id.");
      return;
    }

    setIsVoting(true);
    setError(null);

    try {
      const response = await fetch(`/api/polls/${poll.id}/vote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          optionId: selectedOptionId,
          deviceId,
          firstName: firstName.trim(),
          lastName: lastName.trim(),
        }),
      });

      let responseBody: unknown = null;
      try {
        responseBody = await response.json();
      } catch {
        responseBody = null;
      }

      if (!response.ok) {
        if (response.status === 409) {
          setHasVoted(true);
          setError(
            locale === "pt-BR" ? "Você já votou." : "You already voted."
          );
          return;
        }
        const serverMessage = (() => {
          if (!responseBody || typeof responseBody !== "object") {
            return null;
          }
          if (
            "error" in responseBody &&
            typeof (responseBody as { error?: string }).error === "string"
          ) {
            return (responseBody as { error: string }).error;
          }
          if (
            "error" in responseBody &&
            typeof (responseBody as { error?: { message?: string } }).error ===
              "object" &&
            (responseBody as { error?: { message?: string } }).error?.message
          ) {
            return (responseBody as { error: { message: string } }).error
              .message;
          }
          if (
            "message" in responseBody &&
            typeof (responseBody as { message?: string }).message === "string"
          ) {
            return (responseBody as { message: string }).message;
          }
          return null;
        })();
        throw new Error(serverMessage ?? "Failed to submit vote.");
      }

      setOptions((prev) =>
        prev.map((option) =>
          option.id === selectedOptionId
            ? { ...option, votes: (option.votes ?? 0) + 1 }
            : option
        )
      );
      setHasVoted(true);
      setError(null);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(`pollVote:${poll.id}`, "1");
      }
    } catch (voteError) {
      setError(
        voteError instanceof Error
          ? voteError.message
          : "Failed to submit vote."
      );
    } finally {
      setIsVoting(false);
    }
  };

  return (
    <article className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-black/20">
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl font-semibold text-white">{poll.title}</h3>
        <div className="flex flex-wrap gap-4 text-sm text-white/70" />
        <div className="space-y-3">
          {options.map((option) => (
            <div
              key={option.id}
              role="button"
              tabIndex={0}
              onClick={() =>
                !hasVoted && isOpen && setSelectedOptionId(option.id)
              }
              onKeyDown={(event) => {
                if (
                  (event.key === "Enter" || event.key === " ") &&
                  !hasVoted &&
                  isOpen
                ) {
                  event.preventDefault();
                  setSelectedOptionId(option.id);
                }
              }}
              className={`flex flex-wrap items-center justify-between gap-3 rounded-2xl border px-4 py-3 transition ${
                selectedOptionId === option.id
                  ? "border-amber-300/80 bg-amber-500/10 poll-choice-selected"
                  : "border-white/10 bg-slate-950/50"
              } ${hasVoted || !isOpen ? "cursor-not-allowed opacity-80" : "cursor-pointer"}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`poll-choice-indicator ${
                    selectedOptionId === option.id ? "is-selected" : ""
                  }`}
                  aria-hidden="true"
                >
                  <span className="poll-choice-check" />
                </span>
                <span className="sr-only">
                  {selectedOptionId === option.id ? labels.selected : ""}
                </span>
                <div className="text-white/90">{option.label}</div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-white/60">
                  {hasVoted ? `${labels.votes}: ${option.votes ?? 0}` : ""}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-white/70">
            <span className="font-semibold text-white/80">
              {labels.firstName}
            </span>
            <input
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              disabled={hasVoted || isVoting}
              className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-2 text-base text-white outline-none transition focus:border-amber-300/70 disabled:cursor-not-allowed disabled:opacity-70"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-white/70">
            <span className="font-semibold text-white/80">
              {labels.lastName}
            </span>
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              disabled={hasVoted || isVoting}
              className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-2 text-base text-white outline-none transition focus:border-amber-300/70 disabled:cursor-not-allowed disabled:opacity-70"
            />
          </label>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleSubmitVote}
            disabled={
              !isOpen || hasVoted || selectedOptionId === null || isVoting
            }
            className="w-full cursor-pointer rounded-full border border-amber-300/60 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-200 transition hover:border-amber-200 hover:text-amber-100 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span className="inline-flex items-center justify-center gap-2">
              {isVoting ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-amber-200/80 border-t-transparent" />
                  <span>
                    {locale === "pt-BR" ? "Enviando..." : "Submitting..."}
                  </span>
                </>
              ) : (
                labels.submit
              )}
            </span>
          </button>
          {!isOpen ? null : null}
          {hasVoted ? (
            <span className="poll-vote-celebrate text-sm text-white/80">
              {locale === "pt-BR"
                ? "Eba! Voto confirmado!"
                : "Yay! Vote locked in!"}
            </span>
          ) : null}
        </div>
        {error ? <p className="text-sm text-rose-200">{error}</p> : null}
      </div>
    </article>
  );
}
