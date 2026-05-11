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
    footerLinks: { privacy: string; terms: string; contact: string; about: string };
    about: {
      title: string;
      description: string;
      intro: string;
      missionTitle: string;
      missionBody: string;
      whatWeDoTitle: string;
      whatWeDoBody: string;
      teamTitle: string;
      teamBody: string;
    };
    contact: {
      title: string;
      description: string;
      intro: string;
      poppoTitle: string;
      poppoBody: string;
      emailTitle: string;
      emailBody: string;
    };
    privacy: { title: string; description: string };
    terms: { title: string; description: string };
    notFound: { title: string; body: string; cta: string };
    cookieConsent: { message: string; accept: string; decline: string };
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
    footerLinks: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact",
      about: "About",
    },
    about: {
      title: "About Golden Eagles",
      description: "Learn about Golden Eagles — a Poppo Live agency built for streamers, community, and fun.",
      intro: "Golden Eagles is a Poppo Live agency built around one idea: streaming is better together. We support streamers with events, visibility, and a community that actually shows up.",
      missionTitle: "Our Mission",
      missionBody: "We exist to help Poppo Live streamers grow, connect, and have fun doing it. Whether you're new to streaming or looking for your next level, we provide the structure, events, and community to get you there.",
      whatWeDoTitle: "What We Do",
      whatWeDoBody: "We organize PK battles, community events, and streamer showcases. We help our members get discovered, build audiences, and stay consistent. We also run polls, a community blog, and a curated shop — all designed to keep the Golden Eagles family connected.",
      teamTitle: "Our Team",
      teamBody: "Meet the people who keep Golden Eagles running.",
    },
    contact: {
      title: "Contact Us",
      description: "Get in touch with the Golden Eagles team on Poppo Live or by email.",
      intro: "Want to join Golden Eagles, ask a question, or just say hi? Here's how to reach us.",
      poppoTitle: "Find Us on Poppo Live",
      poppoBody: "The fastest way to connect is through our official Poppo Live profile. Tap the link below to find us in the app.",
      emailTitle: "Send Us an Email",
      emailBody: "For business inquiries, partnerships, or anything that needs a longer conversation.",
    },
    privacy: {
      title: "Privacy Policy",
      description: "Read the Golden Eagles privacy policy — how we collect, use, and protect your data.",
    },
    terms: {
      title: "Terms of Service",
      description: "Read the Golden Eagles terms of service for using our website.",
    },
    notFound: {
      title: "Page Not Found",
      body: "The page you're looking for doesn't exist or has been moved.",
      cta: "Go Home",
    },
    cookieConsent: {
      message: "We use cookies to improve your experience and serve personalized ads via Google AdSense.",
      accept: "Accept",
      decline: "Decline",
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
    footerLinks: {
      privacy: "Política de Privacidade",
      terms: "Termos de Uso",
      contact: "Contato",
      about: "Sobre",
    },
    about: {
      title: "Sobre a Golden Eagles",
      description: "Conheça a Golden Eagles — uma agência Poppo Live feita para streamers, comunidade e diversão.",
      intro: "Golden Eagles é uma agência do Poppo Live construída em torno de uma ideia: fazer lives é melhor junto. Apoiamos streamers com eventos, visibilidade e uma comunidade que realmente aparece.",
      missionTitle: "Nossa Missão",
      missionBody: "Existimos para ajudar streamers do Poppo Live a crescer, se conectar e se divertir fazendo isso. Seja você novo no streaming ou buscando o próximo nível, oferecemos estrutura, eventos e comunidade para te levar até lá.",
      whatWeDoTitle: "O Que Fazemos",
      whatWeDoBody: "Organizamos batalhas PK, eventos comunitários e showcases de streamers. Ajudamos nossos membros a serem descobertos, construir audiência e manter a consistência. Também temos enquetes, um blog comunitário e uma loja curada — tudo para manter a família Golden Eagles conectada.",
      teamTitle: "Nosso Time",
      teamBody: "Conheça as pessoas que mantêm a Golden Eagles funcionando.",
    },
    contact: {
      title: "Fale Conosco",
      description: "Entre em contato com a equipe Golden Eagles pelo Poppo Live ou por e-mail.",
      intro: "Quer entrar na Golden Eagles, fazer uma pergunta ou só dar um oi? Veja como nos encontrar.",
      poppoTitle: "Nos Encontre no Poppo Live",
      poppoBody: "A maneira mais rápida de se conectar é pelo nosso perfil oficial no Poppo Live. Toque no link abaixo para nos encontrar no app.",
      emailTitle: "Envie um E-mail",
      emailBody: "Para consultas comerciais, parcerias ou qualquer coisa que precise de uma conversa mais longa.",
    },
    privacy: {
      title: "Política de Privacidade",
      description: "Leia a política de privacidade da Golden Eagles — como coletamos, usamos e protegemos seus dados.",
    },
    terms: {
      title: "Termos de Uso",
      description: "Leia os termos de uso da Golden Eagles para utilizar nosso site.",
    },
    notFound: {
      title: "Página Não Encontrada",
      body: "A página que você procura não existe ou foi movida.",
      cta: "Ir para o Início",
    },
    cookieConsent: {
      message: "Usamos cookies para melhorar sua experiência e exibir anúncios personalizados via Google AdSense.",
      accept: "Aceitar",
      decline: "Recusar",
    },
  },
};
