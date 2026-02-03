import { TeamMember } from "@/data/team";

type TeamMemberCardProps = {
  member: TeamMember;
};

export default function TeamMemberCard({
  member,
}: TeamMemberCardProps) {
  const isLinked = Boolean(member.poppoUrl);

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
          <div className="team-frame">
            <img
              src="/images/broder.png"
              alt=""
              aria-hidden="true"
              className="team-frame-image"
            />
            <img
              src={member.photoUrl}
              alt={member.name}
              className="team-photo"
            />
            <div className="team-nameplate">{member.name}</div>
          </div>
          <div className="mt-3 space-y-1 text-center">
            <p className="text-sm text-white/70">{member.role}</p>
          </div>
        </a>
      ) : (
        <div className="block cursor-default">
          <div className="team-frame">
            <img
              src="/images/broder.png"
              alt=""
              aria-hidden="true"
              className="team-frame-image"
            />
            <img
              src={member.photoUrl}
              alt={member.name}
              className="team-photo"
            />
            <div className="team-nameplate">{member.name}</div>
          </div>
          <div className="mt-3 space-y-1 text-center">
            <p className="text-sm text-white/70">{member.role}</p>
          </div>
        </div>
      )}
    </article>
  );
}
