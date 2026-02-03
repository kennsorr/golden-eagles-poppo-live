import { Locale } from "@/lib/i18n";

export type TeamMember = {
  name: string;
  role: string;
  photoUrl: string;
  poppoUrl?: string;
};

const membersByLocale: Record<Locale, TeamMember[]> = {
  en: [
    {
      name: "Gui Oliver",
      role: "Owner",
      photoUrl: "https://placehold.co/320x320/png?text=Gui+Oliver",
    },
    {
      name: "Lucia",
      role: "Admin",
      photoUrl: "/images/team/lucia.jpeg",
      poppoUrl: "https://www.poppo.com/@23523792",
    },
    {
      name: "Ale",
      role: "Admin",
      photoUrl: "/images/team/alee.jpeg",
      poppoUrl: "https://www.poppo.com/@22949710",
    },
    {
      name: "Gringar",
      role: "Designer",
      photoUrl: "/images/team/gringar.jpeg",
      poppoUrl: "https://www.poppo.com/@22418412",
    },
    {
      name: "Ivanete",
      role: "Admin",
      photoUrl: "/images/team/ivanete.jpeg",
      poppoUrl: "https://www.poppo.com/@31296536",
    },
    {
      name: "Elaine",
      role: "Admin",
      photoUrl: "/images/team/elaine.jpeg",
      poppoUrl: "https://www.poppo.com/@22611367",
    },
  ],
  "pt-br": [
    {
      name: "Gui Oliver",
      role: "Dono",
      photoUrl: "https://placehold.co/320x320/png?text=Gui+Oliver",
    },
    {
      name: "Lucia",
      role: "Admin",
      photoUrl: "/images/team/lucia.jpeg",
      poppoUrl: "https://www.poppo.com/@23523792",
    },
    {
      name: "Ale",
      role: "Admin",
      photoUrl: "/images/team/alee.jpeg",
      poppoUrl: "https://www.poppo.com/@22949710",
    },
    {
      name: "Gringar",
      role: "Designer",
      photoUrl: "/images/team/gringar.jpeg",
      poppoUrl: "https://www.poppo.com/@22418412",
    },
    {
      name: "Ivanete",
      role: "Admin",
      photoUrl: "/images/team/ivanete.jpeg",
      poppoUrl: "https://www.poppo.com/@31296536",
    },
    {
      name: "Elaine",
      role: "Admin",
      photoUrl: "/images/team/elaine.jpeg",
      poppoUrl: "https://www.poppo.com/@22611367",
    },
  ],
};

export function getTeamMembers(locale: Locale): TeamMember[] {
  return membersByLocale[locale];
}
