"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

function AnimatedCount({
  target,
  duration = 1200,
  isActive,
}: {
  target: number;
  duration?: number;
  isActive: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const hasAnimatedRef = useRef(false);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) {
      hasAnimatedRef.current = false;
      setDisplay(0);
      startTimeRef.current = null;
      return;
    }
    if (hasAnimatedRef.current) return;
    setDisplay(0);
    startTimeRef.current = performance.now();

    const animate = (now: number) => {
      const start = startTimeRef.current ?? now;
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 2;
      const value = Math.round(eased * target);
      setDisplay(value);
      if (progress >= 1) {
        hasAnimatedRef.current = true;
      } else {
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, isActive]);

  if (isActive && hasAnimatedRef.current) {
    return <>{target}</>;
  }
  return <>{display}</>;
}

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
    name: string;
  };
};

export default function PollCard({ poll, locale, labels }: PollCardProps) {
  const [options, setOptions] = useState<PollOption[]>(poll.options ?? []);
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
  const [isVoting, setIsVoting] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const storedVote = window.localStorage.getItem(`pollVote:${poll.id}`);
    const storedOption = window.localStorage.getItem(
      `pollVoteOption:${poll.id}`
    );
    if (storedVote === "1") {
      setHasVoted(true);
    }
    if (storedOption) {
      const parsed = Number(storedOption);
      if (!Number.isNaN(parsed)) {
        setSelectedOptionId(parsed);
      }
    }
  }, [poll.id]);

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

  const totalVotes = useMemo(
    () =>
      options.reduce((sum, option) => sum + (option.votes ?? 0), 0) || 0,
    [options]
  );

  const leftOption = options[0];
  const rightOption = options[1];
  const leftVotes = leftOption?.votes ?? 0;
  const rightVotes = rightOption?.votes ?? 0;
  const leftPercent =
    totalVotes > 0 ? Math.round((leftVotes / totalVotes) * 100) : 0;
  const rightPercent = totalVotes > 0 ? 100 - leftPercent : 0;
  const showResults = hasVoted || !isOpen;
  const maxVotes = options.reduce(
    (max, option) => Math.max(max, option.votes ?? 0),
    0
  );
  const winners =
    maxVotes > 0
      ? options.filter((option) => (option.votes ?? 0) === maxVotes)
      : [];
  const winnerNames = winners.map((option) => option.label);
  const winnerIds = new Set(winners.map((w) => w.id));
  const userVotedForWinner =
    selectedOptionId != null && winnerIds.has(selectedOptionId);
  const weKnowUserVote = hasVoted && selectedOptionId != null;

  // When poll is open: only highlight the option they voted for (no winner yet)
  // When poll is closed: highlight winner(s) and the option they voted for
  const isHighlighted = (optionId: number) =>
    isOpen
      ? selectedOptionId === optionId
      : selectedOptionId === optionId || winnerIds.has(optionId);

  // Exactly one message: closed = winner/tie message (Yay/Oh no/neutral); open = no message
  const feedbackMessage = (() => {
    if (isOpen) return null; // Open: no winner/vote message, only bold their choice
    if (winners.length === 0) return null;
    const winnerLabel =
      winners.length === 1
        ? winnerNames[0]
        : locale === "pt-BR"
          ? winnerNames.join(" e ")
          : winnerNames.join(" and ");
    if (winners.length > 1) {
      const tieMessage =
        locale === "pt-BR"
          ? `Empate entre ${winnerLabel}!`
          : `It's a tie between ${winnerLabel}!`;
      if (weKnowUserVote) {
        return userVotedForWinner
          ? (locale === "pt-BR" ? `Eba! ${tieMessage}` : `Yay! ${tieMessage}`)
          : (locale === "pt-BR" ? `Oh não! ${tieMessage}` : `Oh no! ${tieMessage}`);
      }
      return tieMessage;
    }
    const winnerMessage =
      locale === "pt-BR"
        ? `${winnerNames[0]} é o vencedor!`
        : `${winnerNames[0]} is the winner!`;
    if (weKnowUserVote) {
      return userVotedForWinner
        ? (locale === "pt-BR" ? `Eba! ${winnerMessage}` : `Yay! ${winnerMessage}`)
        : (locale === "pt-BR" ? `Oh não! ${winnerMessage}` : `Oh no! ${winnerMessage}`);
    }
    return winnerMessage;
  })();

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

    if (!name.trim()) {
      setError(
        locale === "pt-BR"
          ? "Informe seu nome."
          : "Please enter your name."
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
          name: name.trim(),
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
        window.localStorage.setItem(
          `pollVoteOption:${poll.id}`,
          String(selectedOptionId)
        );
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
        <h3 className="text-2xl font-semibold text-center text-white">
          {poll.title}
        </h3>
        <div className="flex flex-wrap gap-4 text-sm text-white/70" />
        {!showResults ? (
          <>
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
                    <span className="sr-only">
                      {selectedOptionId === option.id ? labels.selected : ""}
                    </span>
                    <div className="text-white/90">{option.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <hr className="border-white/10" />
            <label className="flex flex-col gap-2 text-sm text-white/70">
              <span className="font-semibold text-white/80">
                {labels.name}
              </span>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                disabled={hasVoted || isVoting}
                className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-2 text-base text-white outline-none transition focus:border-amber-300/70 disabled:cursor-not-allowed disabled:opacity-70"
              />
            </label>
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
            </div>
          </>
        ) : (
          <div className="space-y-4">
            {options.length === 2 && leftOption && rightOption ? (
              <div className="poll-results-card">
                <div className="poll-results-labels">
                  <span
                    className={
                      isHighlighted(leftOption.id)
                        ? "font-bold text-white"
                        : undefined
                    }
                  >
                    {leftOption.label}
                  </span>
                  <span
                    className={
                      isHighlighted(rightOption.id)
                        ? "font-bold text-white"
                        : undefined
                    }
                  >
                    {rightOption.label}
                  </span>
                </div>
                <div
                  className="poll-results-bar"
                  style={
                    {
                      ["--left-percent" as string]: `${leftPercent}%`,
                    } as CSSProperties
                  }
                >
                  <div
                    className={`poll-results-left-wrap${!isOpen && leftVotes >= rightVotes && leftVotes > 0 ? " poll-results-winner" : ""}`}
                  >
                    <div className="poll-results-left" />
                  </div>
                  <div
                    className={`poll-results-right-wrap${!isOpen && rightVotes >= leftVotes && rightVotes > 0 ? " poll-results-winner" : ""}`}
                  >
                    <div className="poll-results-right" />
                  </div>
                </div>
                <div className="poll-results-percent">
                  <span
                    className={
                      isHighlighted(leftOption.id)
                        ? "font-bold text-white"
                        : undefined
                    }
                  >
                    <AnimatedCount
                      target={leftVotes}
                      duration={1200}
                      isActive={showResults}
                    />
                  </span>
                  <span
                    className={
                      isHighlighted(rightOption.id)
                        ? "font-bold text-white"
                        : undefined
                    }
                  >
                    <AnimatedCount
                      target={rightVotes}
                      duration={1200}
                      isActive={showResults}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {options.map((option) => {
                  const highlighted = isHighlighted(option.id);
                  return (
                    <div
                      key={option.id}
                      className={`flex flex-wrap items-center justify-between gap-3 rounded-2xl border px-4 py-3 ${
                        highlighted
                          ? "border-amber-300/80 bg-amber-500/10 poll-choice-selected"
                          : "border-white/10 bg-slate-950/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={
                            highlighted
                              ? "font-bold text-white"
                              : "text-white/90"
                          }
                        >
                          {option.label}
                        </div>
                      </div>
                      <span
                        className={
                          highlighted
                            ? "text-sm font-bold text-white"
                            : "text-sm text-white/70"
                        }
                      >
                        {labels.votes}:{" "}
                        <AnimatedCount
                          target={option.votes ?? 0}
                          duration={1200}
                          isActive={showResults}
                        />
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
            {feedbackMessage ? (
              <span className="poll-vote-celebrate w-full justify-center text-sm text-center text-white/80">
                {feedbackMessage}
              </span>
            ) : null}
          </div>
        )}
        {error ? <p className="text-sm text-rose-200">{error}</p> : null}
      </div>
    </article>
  );
}
