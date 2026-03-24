import { TeamMember } from "@/data/team";
import ImageWithFallback from "./ImageWithFallback";

type TeamMemberCardProps = {
  member: TeamMember;
};

export default function TeamMemberCard({
  member,
}: TeamMemberCardProps) {
  const isLinked = Boolean(member.poppoUrl);

  const frame = (
    <>
      <div className="team-frame">
        <img
          src="/images/broder.png"
          alt=""
          aria-hidden="true"
          className="team-frame-image"
        />
        <ImageWithFallback
          src={member.photoUrl}
          alt={member.name}
          className="team-photo"
          fallbackClassName="team-photo flex flex-col items-center justify-center bg-slate-800/80 rounded-full"
        />
        <div className="team-nameplate">{member.name}</div>
      </div>
      <div className="space-y-1 text-center">
        <p className="-mt-[15px] text-base font-semibold text-white/80">
          {member.role}
        </p>
      </div>
    </>
  );

  return (
    <article className="group rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 transition hover:border-amber-300/60 hover:bg-white/10">
      {isLinked ? (
        <a
          href={member.poppoUrl}
          target="_blank"
          rel="noreferrer"
          className="block cursor-[alias]"
          aria-label={`${member.name} on Poppo Live`}
        >
          {frame}
        </a>
      ) : (
        <div className="block cursor-default">{frame}</div>
      )}
    </article>
  );
}
