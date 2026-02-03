import { Locale } from "@/lib/i18n";

export const copy: Record<
  Locale,
  {
    siteName: string;
    headerTagline: string;
    nav: { intro: string; events: string };
    hero: {
      badge: string;
      title: string;
      body: string;
      highlightTitle: string;
      highlightBody: string;
    };
    sections: { administration: string; events: string };
    eventsIntro: string;
    labels: {
      whatsapp: string;
      host: string;
      guest: string;
      category: string;
      time: string;
      administrationBlurb: string;
    };
    footer: { tagline: string };
  }
> = {
  en: {
    siteName: "Golden Eagles",
    headerTagline: "Poppo Live Agency",
    nav: { intro: "Introduction", events: "Events" },
    hero: {
      badge: "Poppo Live Agency",
      title: "Welcome to Golden Eagles",
      body:
        "Golden Eagles is a Poppo Live agency built for streamers, PK, and friends who love to connect. We host events, celebrate talent, and keep the vibe fun and welcoming.",
      highlightTitle: "Meet the agency that keeps the energy soaring.",
      highlightBody:
        "Community chats, themed battles, and live events are at the heart of what we do.",
    },
    sections: { administration: "Administration", events: "Events" },
    eventsIntro:
      "Explore the upcoming meetups, battles, and special events.",
    labels: {
      whatsapp: "WhatsApp",
      host: "Host",
      guest: "Guest",
      category: "Category",
      time: "Time",
      administrationBlurb: "A fun crew of organizers, planners, and hype-makers.",
    },
    footer: {
      tagline: "A Poppo Live agency led by Gui Oliver.",
    },
  },
  "pt-br": {
    siteName: "Golden Eagles",
    headerTagline: "Agência Poppo Live",
    nav: { intro: "Introdução", events: "Eventos" },
    hero: {
      badge: "Agência Poppo Live",
      title: "Bem-vindo à Golden Eagles",
      body:
        "Golden Eagles é uma agência do Poppo Live feita para streamers, PK e amizades. Organizamos eventos, valorizamos talentos e mantemos o clima leve e divertido.",
      highlightTitle: "Conheça a agência que mantém a energia lá no alto.",
      highlightBody:
        "Bate-papos, batalhas temáticas e eventos ao vivo fazem parte do nosso dia a dia.",
    },
    sections: { administration: "Administração", events: "Eventos" },
    eventsIntro:
      "Confira os encontros, batalhas e eventos especiais que estão chegando.",
    labels: {
      whatsapp: "WhatsApp",
      host: "Host",
      guest: "Convidado",
      category: "Categoria",
      time: "Horário",
      administrationBlurb:
        "Um time divertido de organizadores, planejadores e animadores.",
    },
    footer: {
      tagline: "Uma agência do Poppo Live liderada por Gui Oliver.",
    },
  },
};
