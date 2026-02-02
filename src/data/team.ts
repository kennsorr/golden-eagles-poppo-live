import { Locale } from "@/lib/i18n";

export type TeamMember = {
  name: string;
  role: string;
  photoUrl: string;
  whatsapp?: string;
};

const membersByLocale: Record<Locale, TeamMember[]> = {
  en: [
    {
      name: "Gui Oliver",
      role: "Owner",
      photoUrl: "https://placehold.co/320x320/png?text=Gui+Oliver",
      whatsapp: "+55 11 99999-9999",
    },
    {
      name: "Ava Santos",
      role: "Co-Owner",
      photoUrl: "https://placehold.co/320x320/png?text=Ava+Santos",
    },
    {
      name: "Lucas Meireles",
      role: "Team Manager",
      photoUrl: "https://placehold.co/320x320/png?text=Lucas+Meireles",
      whatsapp: "+55 21 98888-8888",
    },
    {
      name: "Maria Costa",
      role: "Events Lead",
      photoUrl: "https://placehold.co/320x320/png?text=Maria+Costa",
    },
    {
      name: "Rafa Nunes",
      role: "Community",
      photoUrl: "https://placehold.co/320x320/png?text=Rafa+Nunes",
    },
  ],
  "pt-br": [
    {
      name: "Gui Oliver",
      role: "Dono",
      photoUrl: "https://placehold.co/320x320/png?text=Gui+Oliver",
      whatsapp: "+55 11 99999-9999",
    },
    {
      name: "Ava Santos",
      role: "Coordenadora",
      photoUrl: "https://placehold.co/320x320/png?text=Ava+Santos",
    },
    {
      name: "Lucas Meireles",
      role: "Gestor do Time",
      photoUrl: "https://placehold.co/320x320/png?text=Lucas+Meireles",
      whatsapp: "+55 21 98888-8888",
    },
    {
      name: "Maria Costa",
      role: "Líder de Eventos",
      photoUrl: "https://placehold.co/320x320/png?text=Maria+Costa",
    },
    {
      name: "Rafa Nunes",
      role: "Comunidade",
      photoUrl: "https://placehold.co/320x320/png?text=Rafa+Nunes",
    },
  ],
};

export function getTeamMembers(locale: Locale): TeamMember[] {
  return membersByLocale[locale];
}
