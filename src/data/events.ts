import { Locale } from "@/lib/i18n";

export type EventItem = {
  title: string;
  time: string;
  category: string;
  host: string;
  guest?: string;
};

const eventsByLocale: Record<Locale, EventItem[]> = {
  en: [
    {
      title: "Golden Battle Night",
      time: "Feb 02, 2026 · 8:00 PM BRT",
      category: "Battle",
      host: "Gui Oliver",
      guest: "Special Guest",
    },
    {
      title: "Coffee & Chat",
      time: "Feb 10, 2026 · 6:30 PM BRT",
      category: "Community",
      host: "Maria Costa",
    },
    {
      title: "Rising Stars Showcase",
      time: "Feb 18, 2026 · 9:00 PM BRT",
      category: "Talent",
      host: "Lucas Meireles",
      guest: "Poppo Live Creators",
    },
  ],
  "pt-br": [
    {
      title: "Noite de Batalha Golden",
      time: "02 Fev 2026 · 20:00 BRT",
      category: "Batalha",
      host: "Gui Oliver",
      guest: "Convidado Especial",
    },
    {
      title: "Café e Conversa",
      time: "10 Fev 2026 · 18:30 BRT",
      category: "Comunidade",
      host: "Maria Costa",
    },
    {
      title: "Showcase de Estrelas",
      time: "18 Fev 2026 · 21:00 BRT",
      category: "Talento",
      host: "Lucas Meireles",
      guest: "Criadores Poppo Live",
    },
  ],
};

export function getEvents(locale: Locale): EventItem[] {
  return eventsByLocale[locale];
}
