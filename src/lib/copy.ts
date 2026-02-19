import { Locale } from "@/lib/i18n";

export const copy: Record<
  Locale,
  {
    siteName: string;
    headerTagline: string;
    nav: { intro: string; events: string; polls: string };
    hero: {
      badge: string;
      title: string;
      body: string;
      highlightTitle: string;
      highlightBody: string;
    };
    sections: { administration: string; events: string; polls: string };
    eventsIntro: string;
    pollsIntro: string;
    pollsEmpty: string;
    labels: {
      whatsapp: string;
      host: string;
      guest: string;
      category: string;
      time: string;
      administrationBlurb: string;
      pollStatus: string;
      pollEndsAt: string;
      pollOpen: string;
      pollClosed: string;
      pollVote: string;
      pollVotes: string;
      pollSubmit: string;
      pollSelected: string;
      pollFirstName: string;
      pollLastName: string;
    };
    footer: { tagline: string };
  }
> = {
  en: {
    siteName: "Golden Eagles",
    headerTagline: "Poppo Live Agency",
    nav: { intro: "Introduction", events: "Events", polls: "Polls" },
    hero: {
      badge: "Poppo Live Agency",
      title: "Welcome to Golden Eagles",
      body:
        "Golden Eagles is a Poppo Live agency built for streamers, PK, and friends who love to connect. We host events, celebrate talent, and keep the vibe fun and welcoming.",
      highlightTitle: "Meet the agency that keeps the energy soaring.",
      highlightBody:
        "Community chats, themed battles, and live events are at the heart of what we do.",
    },
    sections: { administration: "Administration", events: "Events", polls: "Polls" },
    eventsIntro:
      "Explore the upcoming meetups, battles, and special events.",
    pollsIntro:
      "Vote in the latest community polls and share your opinion.",
    pollsEmpty: "No polls are available right now. Please check back soon.",
    labels: {
      whatsapp: "WhatsApp",
      host: "Host",
      guest: "Guest",
      category: "Category",
      time: "Time",
      administrationBlurb: "A fun crew of organizers, planners, and hype-makers.",
      pollStatus: "Status",
      pollEndsAt: "Ends",
      pollOpen: "Open",
      pollClosed: "Closed",
      pollVote: "Vote",
      pollVotes: "Votes",
      pollSubmit: "Submit vote",
      pollSelected: "Selected",
      pollFirstName: "First name",
      pollLastName: "Last name",
    },
    footer: {
      tagline: "A Poppo Live agency led by Gui Oliver.",
    },
  },
  "pt-br": {
    siteName: "Golden Eagles",
    headerTagline: "Agência Poppo Live",
    nav: { intro: "Introdução", events: "Eventos", polls: "Enquetes" },
    hero: {
      badge: "Agência Poppo Live",
      title: "Bem-vindo à Golden Eagles",
      body:
        "Golden Eagles é uma agência do Poppo Live feita para streamers, PK e amizades. Organizamos eventos, valorizamos talentos e mantemos o clima leve e divertido.",
      highlightTitle: "Conheça a agência que mantém a energia lá no alto.",
      highlightBody:
        "Bate-papos, batalhas temáticas e eventos ao vivo fazem parte do nosso dia a dia.",
    },
    sections: {
      administration: "Administração",
      events: "Eventos",
      polls: "Enquetes",
    },
    eventsIntro:
      "Confira os encontros, batalhas e eventos especiais que estão chegando.",
    pollsIntro:
      "Vote nas enquetes da comunidade e compartilhe sua opinião.",
    pollsEmpty: "Nenhuma enquete disponível no momento. Volte em breve.",
    labels: {
      whatsapp: "WhatsApp",
      host: "Host",
      guest: "Convidado",
      category: "Categoria",
      time: "Horário",
      administrationBlurb:
        "Um time divertido de organizadores, planejadores e animadores.",
      pollStatus: "Status",
      pollEndsAt: "Encerra",
      pollOpen: "Aberta",
      pollClosed: "Encerrada",
      pollVote: "Votar",
      pollVotes: "Votos",
      pollSubmit: "Enviar voto",
      pollSelected: "Selecionado",
      pollFirstName: "Nome",
      pollLastName: "Sobrenome",
    },
    footer: {
      tagline: "Uma agência do Poppo Live liderada por Gui Oliver.",
    },
  },
};
