import { Locale } from "@/lib/i18n";

export const copy: Record<
  Locale,
  {
    siteName: string;
    headerTagline: string;
    nav: { intro: string; events: string; polls: string; shop: string; blog: string };
    hero: {
      badge: string;
      title: string;
      body: string;
      highlightLabel: string;
      highlightPoll: { title: string; body: string; cta: string };
      highlightEvent: { title: string; body: string; cta: string };
      highlightShop: { title: string; body: string; cta: string };
      highlightEmpty: { title: string; body: string };
    };
    blogIntro: string;
    blogEmpty: string;
    sections: { administration: string; events: string; polls: string; shop: string };
    eventsIntro: string;
    pollsIntro: string;
    pollsEmpty: string;
    shopIntro: string;
    shopEmpty: string;
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
      pollName: string;
      blogReadMore: string;
      blogBackToList: string;
    };
    footer: { tagline: string; linkText: string; linkUrl: string };
  }
> = {
  en: {
    siteName: "Golden Eagles",
    headerTagline: "Poppo Live Agency",
    nav: { intro: "Intro", events: "Events", polls: "Polls", shop: "Shop", blog: "Blog" },
    hero: {
      badge: "Poppo Live Agency",
      title: "Welcome to Golden Eagles",
      body:
        "Golden Eagles is a Poppo Live agency built for streamers, PK, and friends who love to connect. We host events, celebrate talent, and keep the vibe fun and welcoming.",
      highlightLabel: "Updates",
      highlightPoll: {
        title: "A poll is live — your vote counts!",
        body: "We want to hear from YOU! Jump in and cast your vote before it closes.",
        cta: "Vote Now",
      },
      highlightEvent: {
        title: "Something exciting is around the corner!",
        body: "Don't miss out — check out our upcoming events and mark your calendar.",
        cta: "See Events",
      },
      highlightShop: {
        title: "New in the shop — check it out!",
        body: "We just added something fresh. Take a look and show some love!",
        cta: "Browse Shop",
      },
      highlightEmpty: {
        title: "All caught up!",
        body: "Nothing new right now — when there's a poll to vote on, an event coming up, or something fresh in the shop, it'll show up right here.",
      },
    },
    sections: { administration: "Administration", events: "Events", polls: "Polls", shop: "Shop" },
    eventsIntro:
      "Explore the upcoming meetups, battles, and special events.",
    pollsIntro:
      "Vote in the latest community polls and share your opinion.",
    pollsEmpty: "No polls are available right now. Please check back soon.",
    blogIntro:
      "Thoughts, tips, and real talk about life on Poppo Live.",
    blogEmpty: "No posts yet. Check back soon.",
    shopIntro:
      "Products and links we love. Support the agency by using these affiliate links.",
    shopEmpty: "No shop items yet. Check back soon.",
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
      pollName: "Your name",
      blogReadMore: "Read more",
      blogBackToList: "Back to blog",
    },
    footer: {
      tagline: "Website created by ",
      linkText: "sorrell.info",
      linkUrl: "https://consulting.sorrell.info",
    },
  },
  "pt-br": {
    siteName: "Golden Eagles",
    headerTagline: "Agência Poppo Live",
    nav: { intro: "Início", events: "Eventos", polls: "Enquetes", shop: "Loja", blog: "Blog" },
    hero: {
      badge: "Agência Poppo Live",
      title: "Bem-vindo à Golden Eagles",
      body:
        "Golden Eagles é uma agência do Poppo Live feita para streamers, PK e amizades. Organizamos eventos, valorizamos talentos e mantemos o clima leve e divertido.",
      highlightLabel: "Novidades",
      highlightPoll: {
        title: "Tem enquete rolando — sua opinião importa!",
        body: "Queremos ouvir VOCÊ! Entre e vote antes que encerre.",
        cta: "Votar Agora",
      },
      highlightEvent: {
        title: "Tem coisa boa chegando!",
        body: "Não perca — confira os eventos que estão por vir e se prepare.",
        cta: "Ver Eventos",
      },
      highlightShop: {
        title: "Novidade na loja — dá uma olhada!",
        body: "Acabamos de adicionar algo novo. Confira e mostre seu apoio!",
        cta: "Ver Loja",
      },
      highlightEmpty: {
        title: "Tudo em dia!",
        body: "Nada de novo por agora — quando tiver enquete pra votar, evento chegando ou novidade na loja, vai aparecer bem aqui.",
      },
    },
    sections: {
      administration: "Administração",
      events: "Eventos",
      polls: "Enquetes",
      shop: "Loja",
    },
    eventsIntro:
      "Confira os encontros, batalhas e eventos especiais que estão chegando.",
    pollsIntro:
      "Vote nas enquetes da comunidade e compartilhe sua opinião.",
    pollsEmpty: "Nenhuma enquete disponível no momento. Volte em breve.",
    blogIntro:
      "Pensamentos, dicas e papo reto sobre a vida no Poppo Live.",
    blogEmpty: "Nenhum post ainda. Volte em breve.",
    shopIntro:
      "Produtos e links que a gente curte. Apoie a agência usando estes links de afiliados.",
    shopEmpty: "Nenhum item na loja ainda. Volte em breve.",
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
      pollName: "Seu nome",
      blogReadMore: "Leia mais",
      blogBackToList: "Voltar ao blog",
    },
    footer: {
      tagline: "Site criado por ",
      linkText: "sorrell.info",
      linkUrl: "https://consulting.sorrell.info",
    },
  },
};
