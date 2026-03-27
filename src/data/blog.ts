import { Locale } from "@/lib/i18n";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage?: string;
  content: string;
};

const postsByLocale: Record<Locale, BlogPost[]> = {
  en: [
    {
      slug: "thinking-about-joining-poppo-live-agency",
      title: "So You're Thinking About Joining a Poppo Live Agency",
      excerpt:
        "Skeptical. A little intrigued. Here's an honest look at what agencies actually do, why people join them, and whether it's worth the conversation.",
      date: "2026-02-21",
      coverImage: "/images/blog/thinking-about-joining-poppo-live-agency.png",
      content: `There's a very specific moment that leads people here.

You've got your setup dialed in. Lighting is good, angle is good, you've mastered the art of pretending you're not checking the viewer count every 10 seconds. And still... it's quiet. One person joins, leaves. Another says nothing. You start wondering if your Wi-Fi is broken or if this is just your personality now.

Then, like clockwork:
*"Hey 👋 we're an agency, we can help you grow and earn 💰"*

Skeptical. A little intrigued. Also slightly aware this feels like someone pitching you something at 2am that sounds better than it probably is.

So let's talk about it.

---

## What it actually is

An agency is a middle layer between you and the platform. They recruit streamers, offer guidance, help you grow. In exchange, they take a cut, specifically a percentage of the platform's 30% share of your gift revenue. You still keep your 70%. The agency skims from Poppo's slice, not yours.

Not glamorous. Not evil. Just a deal that tends to work out when you find the right one.

---

## Why people join

Because doing it alone is kind of brutal. Not dramatically, just in a slow, quiet "why am I talking to myself again" kind of way.

The core problem is visibility. If the algorithm isn't pushing you, you're invisible. Agencies help with that: event placements, timing advice, a small push that compounds into real viewers. Good agencies have relationships with Poppo's internal team, which can mean more frequent homepage placements and promotional events. The kind of exposure that's hard to manufacture on your own.

There's also the money side. Agencies steer you toward content that retains viewers, encourage gift battles (chaotic but surprisingly effective), and push consistency in ways that are easy to skip when no one's holding you accountable. Most streamers who stick with a good agency notice real progress within the first couple months.

---

## What to know going in

There are minimums. Agencies typically need you showing up consistently, which is actually a good thing if you're serious about growing. Having that structure can be the difference between someone who streams for three weeks and quits and someone who builds a real audience.

Quality does vary between agencies though. Some are genuinely invested in your growth. Others just recruited you to hit a number. It's worth asking questions before you commit, because leaving after the first week is easy, but after that it requires agency approval.

---

## Should you join?

If you're stuck and losing momentum, the right agency gives you a real push. Not magic, but structure, visibility, and people who want to see you do well because your success is their success too.

If you're already finding your footing, you might not need one yet.

There's also a third option people don't say out loud: learn how agencies work, then build your own.

---

## Final thought

An agency won't make you interesting. It just increases the odds that people will find you.

So the real question isn't "will this help me grow?"

It's "if more people showed up tomorrow, would they stay?"

If the answer is yes, it's probably worth the conversation.`,
    },
    {
      slug: "how-to-get-coins-on-poppo-live",
      title: "How to Get Coins on Poppo Live",
      excerpt:
        "Coins are the language of love on Poppo Live — here's how to get them, use them, and not overthink it.",
      date: "2026-03-05",
      coverImage: "/images/blog/how-to-get-coins-on-poppo-live.png",
      content: `Coins are the language of love on Poppo Live. Or at least the language of "hey I think you're entertaining and I'd like to throw a virtual rose at your face."

To get them, open the app and tap the top-up or recharge option in your profile. Pick a coin package, pay through whatever method works in your region, and boom, you're loaded.

Bigger packages generally get you a better rate, so if you're the type who goes all in on a streamer, buying in bulk is the move. If you're just dipping your toes in, a smaller package is fine. No judgment.

Once your coins are in, they're ready to use immediately. Jump into any live stream, tap the gift icon, pick something, and send it. The streamer will probably react. That's kind of the whole point.

Also: coins don't expire. So if you stock up and then discover you have a life outside the app, they'll still be waiting for you when you return.`,
    },
    {
      slug: "why-nobody-is-watching-your-stream",
      title: "Why Nobody Is Watching Your Stream",
      excerpt:
        "It happens to almost everyone early on. The good news is it's usually fixable. The bad news is the fix requires being honest.",
      date: "2026-03-19",
      coverImage: "/images/blog/why-nobody-is-watching-your-stream.png",
      content: `Let's skip the part where we pretend this isn't a little painful to think about.

You went live. You sat there. Maybe you said "hey guys" a few times into the void. And then you ended the stream and tried not to think about it too hard.

It happens to almost everyone early on. The good news is it's usually fixable. The bad news is the fix requires being honest about what's actually going wrong.

So here it is.

---

## You're starting cold and expecting it to heat up on its own

Most viewers decide within the first few seconds whether they're staying. If you go live and sit quietly waiting for people to show up before you "really start," you've already lost them.

Treat the beginning of your stream like someone important is already watching. Because sometimes they are, and you just can't see them yet.

---

## Your energy doesn't match the room

Low energy on camera reads as boredom, even if you're just nervous. Viewers aren't going to talk themselves into sticking around. They'll just leave.

You don't have to be loud or over the top. But you do have to be present. Engaged. Like you actually want to be there.

---

## You're not giving people a reason to stay

"Just chilling" is not a hook. Neither is "hanging out and talking." What are you actually doing? What can someone expect if they stick around for the next 10 minutes?

The streamers who hold viewers give them something to wait for. A game, a challenge, a conversation, a vibe. Something.

---

## You go quiet too much

Dead air kills streams. When nobody's talking in the chat, a lot of streamers freeze up and go silent too. That's the opposite of what works.

Fill the silence. Talk about what you're doing. Ask a question even if nobody answers yet. React to something. Keep the room alive even when it feels empty, because the moment it stops feeling empty is usually right after you stopped caring that it was.

---

## Your schedule is all over the place

Viewers come back to streamers they can find. If you go live on random days at random times, you're making it harder for anyone to build a habit around you.

Pick a schedule and stick to it. Even two or three consistent days a week beats going live every day for a month and then disappearing.

---

## You're not on anyone's radar yet

Sometimes the stream itself is fine. The problem is just that nobody knows you exist.

This is where things like gift battles, agency support, and platform events actually matter. Getting in front of new viewers is a different skill than keeping them, and it's worth treating it that way.

---

## The honest version

Most streams fail quietly not because the person is boring, but because they haven't figured out yet that streaming is a performance even when it doesn't feel like one.

The camera doesn't pick up potential. It picks up what's actually happening in the room right now.

Fix the small stuff first. Energy, consistency, hooks, silence. Get those right and the rest gets a lot easier.`,
    },
  ],
  "pt-br": [
    {
      slug: "thinking-about-joining-poppo-live-agency",
      title: "Pensando em Entrar em uma Agência do Poppo Live?",
      excerpt:
        "Desconfiado. Um pouco curioso. Aqui vai um olhar honesto sobre o que as agências realmente fazem, por que as pessoas entram, e se vale a conversa.",
      date: "2026-02-21",
      coverImage: "/images/blog/thinking-about-joining-poppo-live-agency.png",
      content: `Existe um momento bem específico que traz as pessoas até aqui.

Você já ajeitou tudo. Iluminação boa, ângulo bom, já dominou a arte de fingir que não tá checando o número de viewers a cada 10 segundos. E mesmo assim... silêncio. Uma pessoa entra, sai. Outra não fala nada. Você começa a se perguntar se o Wi-Fi tá quebrado ou se essa é sua personalidade agora.

Aí, como um relógio:
*"Oi 👋 somos uma agência, podemos te ajudar a crescer e ganhar 💰"*

Desconfiado. Um pouco curioso. E levemente ciente de que isso parece alguém te oferecendo algo às 2 da manhã que soa melhor do que provavelmente é.

Então vamos conversar sobre isso.

---

## O que realmente é

Uma agência é uma camada intermediária entre você e a plataforma. Eles recrutam streamers, oferecem orientação, ajudam você a crescer. Em troca, ficam com uma parte — especificamente uma porcentagem dos 30% da plataforma sobre sua receita de presentes. Você continua ficando com seus 70%. A agência tira do pedaço do Poppo, não do seu.

Nada glamouroso. Nada maligno. Só um acordo que tende a funcionar quando você encontra a agência certa.

---

## Por que as pessoas entram

Porque fazer sozinho é meio brutal. Não dramaticamente, mas de um jeito silencioso, tipo "por que estou falando sozinho de novo".

O problema central é visibilidade. Se o algoritmo não tá te impulsionando, você é invisível. Agências ajudam com isso: posicionamento em eventos, dicas de horário, um pequeno empurrão que se transforma em viewers reais. Boas agências têm relacionamento com a equipe interna do Poppo, o que pode significar mais aparições na página principal e eventos promocionais. O tipo de exposição que é difícil de conseguir sozinho.

Tem também o lado do dinheiro. Agências te direcionam para conteúdo que retém viewers, incentivam batalhas de presentes (caóticas mas surpreendentemente eficazes), e empurram consistência de formas que são fáceis de pular quando ninguém tá te cobrando. A maioria dos streamers que ficam com uma boa agência percebem progresso real nos primeiros dois meses.

---

## O que saber antes de entrar

Existem mínimos. Agências geralmente precisam que você apareça consistentemente, o que na verdade é bom se você leva a sério o crescimento. Ter essa estrutura pode ser a diferença entre alguém que faz lives por três semanas e desiste e alguém que constrói uma audiência real.

A qualidade varia entre agências. Algumas estão genuinamente investidas no seu crescimento. Outras só te recrutaram para bater uma meta. Vale a pena fazer perguntas antes de se comprometer, porque sair na primeira semana é fácil, mas depois disso precisa de aprovação da agência.

---

## Você deveria entrar?

Se você tá travado e perdendo ritmo, a agência certa te dá um empurrão real. Não mágica, mas estrutura, visibilidade, e pessoas que querem te ver bem porque o seu sucesso também é o sucesso deles.

Se você já tá encontrando seu caminho, talvez ainda não precise.

Tem também uma terceira opção que ninguém fala em voz alta: aprenda como agências funcionam, e depois construa a sua.

---

## Pensamento final

Uma agência não vai te tornar interessante. Só aumenta as chances de que as pessoas te encontrem.

Então a verdadeira pergunta não é "isso vai me ajudar a crescer?"

É "se mais pessoas aparecessem amanhã, elas ficariam?"

Se a resposta é sim, provavelmente vale a conversa.`,
    },
    {
      slug: "how-to-get-coins-on-poppo-live",
      title: "Como Conseguir Moedas no Poppo Live",
      excerpt:
        "Moedas são a linguagem do amor no Poppo Live — veja como conseguir, usar, e não pensar demais nisso.",
      date: "2026-03-05",
      coverImage: "/images/blog/how-to-get-coins-on-poppo-live.png",
      content: `Moedas são a linguagem do amor no Poppo Live. Ou pelo menos a linguagem de "ei, acho você divertido e quero jogar uma rosa virtual na sua cara."

Para conseguir, abra o app e toque na opção de recarga no seu perfil. Escolha um pacote de moedas, pague pelo método que funciona na sua região, e pronto — tá carregado.

Pacotes maiores geralmente têm uma taxa melhor, então se você é do tipo que vai com tudo em um streamer, comprar em quantidade é a jogada. Se tá só testando, um pacote menor tá de boa. Sem julgamento.

Uma vez que suas moedas estão lá, elas estão prontas pra usar imediatamente. Entre em qualquer live, toque no ícone de presente, escolha algo e envie. O streamer provavelmente vai reagir. Esse é meio que o ponto todo.

Ah, e: moedas não expiram. Então se você estocar e depois descobrir que tem vida fora do app, elas vão estar te esperando quando você voltar.`,
    },
    {
      slug: "why-nobody-is-watching-your-stream",
      title: "Por Que Ninguém Está Assistindo Sua Live",
      excerpt:
        "Acontece com quase todo mundo no começo. A boa notícia é que geralmente dá pra resolver. A má notícia é que a solução exige ser honesto.",
      date: "2026-03-19",
      coverImage: "/images/blog/why-nobody-is-watching-your-stream.png",
      content: `Vamos pular a parte em que a gente finge que isso não dói um pouco.

Você entrou ao vivo. Ficou lá sentado. Talvez tenha dito "e aí pessoal" algumas vezes pro vazio. E aí encerrou a live e tentou não pensar muito nisso.

Acontece com quase todo mundo no começo. A boa notícia é que geralmente dá pra resolver. A má notícia é que a solução exige ser honesto sobre o que realmente tá dando errado.

Então aqui vai.

---

## Você começa frio e espera que esquente sozinho

A maioria dos viewers decide nos primeiros segundos se vai ficar. Se você entra ao vivo e fica esperando em silêncio as pessoas chegarem antes de "começar de verdade", você já perdeu elas.

Trate o começo da sua live como se alguém importante já estivesse assistindo. Porque às vezes está, e você simplesmente não consegue ver.

---

## Sua energia não combina com o ambiente

Energia baixa na câmera parece tédio, mesmo que você esteja só nervoso. Os viewers não vão se convencer a ficar. Eles simplesmente saem.

Você não precisa ser barulhento ou exagerado. Mas precisa estar presente. Engajado. Como se realmente quisesse estar ali.

---

## Você não dá motivo pra pessoa ficar

"Só de boa" não é um gancho. Nem "conversando e curtindo." O que você tá realmente fazendo? O que alguém pode esperar se ficar nos próximos 10 minutos?

Os streamers que mantêm viewers dão a eles algo pra esperar. Um jogo, um desafio, uma conversa, uma vibe. Alguma coisa.

---

## Você fica em silêncio demais

Silêncio mata lives. Quando ninguém tá falando no chat, muitos streamers travam e ficam em silêncio também. Isso é o oposto do que funciona.

Preencha o silêncio. Fale sobre o que você tá fazendo. Faça uma pergunta mesmo que ninguém responda ainda. Reaja a algo. Mantenha a sala viva mesmo quando parecer vazia, porque o momento em que ela para de parecer vazia geralmente é logo depois que você parou de se importar que estava.

---

## Seus horários são bagunçados

Viewers voltam para streamers que conseguem encontrar. Se você entra ao vivo em dias aleatórios em horários aleatórios, tá dificultando pra qualquer pessoa criar o hábito de te assistir.

Escolha um horário e mantenha. Mesmo dois ou três dias consistentes por semana é melhor do que entrar ao vivo todo dia por um mês e depois sumir.

---

## Você ainda não tá no radar de ninguém

Às vezes a live em si tá boa. O problema é só que ninguém sabe que você existe.

É aí que coisas como batalhas de presentes, apoio de agência e eventos da plataforma realmente importam. Aparecer pra novos viewers é uma habilidade diferente de manter eles, e vale a pena tratar assim.

---

## A versão honesta

A maioria das lives falha silenciosamente não porque a pessoa é chata, mas porque ela ainda não percebeu que fazer live é uma performance mesmo quando não parece ser.

A câmera não capta potencial. Ela capta o que tá realmente acontecendo na sala agora.

Conserte as coisas pequenas primeiro. Energia, consistência, ganchos, silêncio. Acerte esses e o resto fica bem mais fácil.`,
    },
  ],
};

export function getBlogPosts(locale: Locale): BlogPost[] {
  return [...postsByLocale[locale]].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getBlogPost(
  locale: Locale,
  slug: string,
): BlogPost | undefined {
  return postsByLocale[locale].find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  const slugs = new Set<string>();
  for (const posts of Object.values(postsByLocale)) {
    for (const post of posts) {
      slugs.add(post.slug);
    }
  }
  return Array.from(slugs);
}
