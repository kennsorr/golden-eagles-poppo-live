import { TeamMember } from "@/data/team";

type TeamMemberCardProps = {
  member: TeamMember;
  whatsappLabel: string;
};

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-5 w-5"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M16 3C8.82 3 3 8.6 3 15.5c0 2.73.9 5.26 2.44 7.34L4 29l6.35-1.66A13.53 13.53 0 0 0 16 28c7.18 0 13-5.6 13-12.5S23.18 3 16 3zm0 22.5c-2.04 0-3.93-.56-5.55-1.52l-.4-.24-3.75.98.99-3.5-.26-.4A10.32 10.32 0 0 1 5.5 15.5C5.5 9.7 10.3 5 16 5s10.5 4.7 10.5 10.5S21.7 25.5 16 25.5zm5.3-7.32c-.29-.15-1.71-.84-1.97-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.9 1.13-.17.2-.34.22-.62.07-.29-.15-1.23-.45-2.34-1.44-.86-.76-1.44-1.7-1.6-1.99-.17-.29-.02-.45.13-.6.14-.14.29-.34.43-.51.15-.17.2-.29.3-.48.1-.2.05-.37-.02-.52-.08-.15-.64-1.53-.88-2.1-.23-.56-.46-.48-.64-.49h-.55c-.2 0-.52.07-.8.37-.29.3-1.05 1.02-1.05 2.5s1.07 2.91 1.21 3.11c.15.2 2.1 3.21 5.08 4.51.71.31 1.27.5 1.7.64.71.23 1.35.2 1.86.12.57-.08 1.71-.7 1.96-1.38.24-.68.24-1.27.17-1.38-.08-.12-.26-.2-.55-.35z" />
    </svg>
  );
}

export default function TeamMemberCard({
  member,
  whatsappLabel,
}: TeamMemberCardProps) {
  const hasWhatsApp = Boolean(member.whatsapp);
  const whatsappLink = member.whatsapp
    ? `https://wa.me/${member.whatsapp.replace(/\D/g, "")}`
    : undefined;

  return (
    <article className="group rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 transition hover:border-emerald-400/60 hover:bg-white/10">
      <img
        src={member.photoUrl}
        alt={member.name}
        className="h-28 w-28 rounded-2xl object-cover"
      />
      <div className="mt-4 space-y-1">
        <p className="text-lg font-semibold text-white">{member.name}</p>
        <p className="text-sm text-white/70">{member.role}</p>
      </div>
      {hasWhatsApp ? (
        <a
          href={whatsappLink}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 px-3 py-1 text-xs font-semibold text-emerald-200 transition group-hover:border-emerald-300 group-hover:text-emerald-100"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon />
          {whatsappLabel}
        </a>
      ) : (
        <div className="mt-4 h-7" />
      )}
    </article>
  );
}
