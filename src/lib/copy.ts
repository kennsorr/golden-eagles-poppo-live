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
    headerTagline: "Poppo Live Team",
    nav: { intro: "Introduction", events: "Events" },
    hero: {
      badge: "Poppo Live Team",
      title: "Welcome to Golden Eagles",
      body:
        "Golden Eagles is a Poppo Live team built for streamers, battlers, and friends who love to connect. We host events, celebrate talent, and keep the vibe fun and welcoming.",
      highlightTitle: "Meet the team that keeps the energy soaring.",
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
      tagline: "A Poppo Live team led by Gui Oliver.",
    },
  },
  "pt-br": {
    siteName: "Golden Eagles",
    headerTagline: "Time do Poppo Live",
    nav: { intro: "Introdução", events: "Eventos" },
    hero: {
      badge: "Time do Poppo Live",
      title: "Bem-vindo à Golden Eagles",
      body:
        "Golden Eagles é um time do Poppo Live feito para streamers, batalhas e amizades. Organizamos eventos, valorizamos talentos e mantemos o clima leve e divertido.",
      highlightTitle: "Conheça o time que mantém a energia lá no alto.",
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
      tagline: "Um time do Poppo Live liderado por Gui Oliver.",
    },
  },
};
