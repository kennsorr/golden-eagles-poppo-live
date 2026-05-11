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
      slug: "how-much-can-you-make-on-poppo-live",
      title: "How Much Can You Actually Make on Poppo Live?",
      excerpt:
        "A realistic breakdown of Poppo Live earnings, from beginner income to top-performer potential, and what actually moves the numbers.",
      date: "2026-05-11",
      coverImage: "/images/blog/how-much-can-you-make-on-poppo-live.png",
      content: `Let's skip the hype. You've seen the screenshots. You've heard someone claim they made thousands in a month. Now you want to know if any of it is real — and what it would actually take for *you* to get there.

Here's an honest breakdown.

---

## The Math First

Poppo Live runs on a points system. As a host, every gift you receive converts to points at a fixed rate: **10,000 points = $1 USD**. That rate doesn't fluctuate. It's baked into the platform.

When a viewer sends you a gift, you keep 70% of the coin value as points (for live streams and parties). Private 1-on-1 sessions pay out at 40%. The remaining share goes to the platform.

So if a viewer drops 10,000 coins on you during a stream, you walk away with 7,000 points — or $0.70. That's not a typo. The per-gift amounts are small. What makes income meaningful is volume, loyalty, and consistency.

---

## What Beginners Actually Earn

The first month is humbling for most people. You're building from zero: no audience, no regulars, no reputation on the platform. Expect somewhere in the range of **$50 to $200** in your first 30 days — and that's if you're putting in 4 to 6 hours of streaming per day.

Daily tasks help cushion that early period. New users who stream at least 2 hours can earn 20,000 points ($2) per day just from completing solo live tasks — roughly **$14 per week** as a baseline, independent of gifts.

It's not life-changing, but it's real, and it keeps you going while you build an audience.

---

## The Earning Curve

This is where it gets interesting. Poppo's income structure is not linear — it's closer to exponential once things click.

Here's a rough picture of how earnings tend to progress:

| Stage | Monthly Estimate | What's Driving It |
|---|---|---|
| Month 1 | $50–$200 | Daily tasks + small gifts |
| Month 3 | $100–$500 | Growing regulars, better timing |
| 6+ months | $500–$1,000+ | Loyal gifters, PK battles, events |
| Top performers | $1,800–$5,000+ | Large fanbase, consistent peak streaming |
| S-IDOL tier | $30,000–$50,000 | Full-time dedication, massive fan clubs |

The S-IDOL numbers are real, but they're also outliers. Think of them the way you'd think of influencer income on YouTube: possible, but it takes years and a lot of factors outside your control.

What's more realistic for a dedicated streamer who shows up consistently? **$500 to $1,500 per month within six months** is achievable — not guaranteed, but genuinely within reach.

---

## What Separates the Top Earners

The single biggest variable isn't talent. It's timing.

Streams that run during **peak hours — evenings and weekends, roughly 7 to 11 PM in your audience's timezone** — earn significantly more than off-peak streams. Visibility is higher, competition for attention is more intense, and gifting behavior spikes.

Beyond timing, top earners tend to share a few patterns:

- **A base of 50+ regular gifters.** Not casual viewers — people who show up repeatedly and actually send gifts.
- **Active PK battle participation.** PKs drive competitive gifting behavior. The energy makes viewers spend more than they would during a casual stream.
- **Fan clubs.** Poppo's fan club system deepens loyalty and creates ongoing support from your top fans.
- **Consistency over intensity.** Streaming 4 to 6 hours per day, most days of the week, beats doing 10-hour marathons once in a while.

---

## The Agency Question

Going solo keeps 100% of your earnings on your side of the table (minus the platform's cut). But you're also on your own for everything: visibility, training, strategy, and figuring out why your numbers flatlined.

Joining an agency means sharing a percentage of your earnings. Agency commissions range from around 4% at the entry tier up to 50% at the highest performance levels — though most active streamers land somewhere in the middle.

What you get in return depends heavily on the agency. Good ones offer real support: help understanding the platform, access to events, coaching on what actually works. Bad ones take the cut and disappear. The difference matters a lot, especially early on.

For most beginners, the right agency partnership shortens the learning curve significantly. The commission you give up is usually worth less than the time you'd spend figuring things out alone.

---

## The Honest Summary

Can you make real money on Poppo Live? Yes.

Can you do it without putting in serious time? No.

The platform rewards consistency, community-building, and showing up at the right hours. The early months are slow almost universally — the people who push through them are the ones who eventually start seeing the numbers shift.

If you're thinking about getting started, or you've been streaming solo and feel stuck, we'd be happy to talk. That's what we're here for.

---

## Sources

- [Poppo Live Salary Guide 2025 — BitTopup News](https://news.bittopup.com/news/poppo-live-salary-guide-2025-vip-levels-agencies-how-hosts-make-1-000-monthly)
- [Poppo Live Salary Tiers 2025: D-S Breakdown — BitTopup News](https://news.bittopup.com/news/poppo-live-salary-tiers-2025-d-s-breakdown-to-50k-max)
- [Poppo Live Earnings Guide: $2–14 Daily for Beginners — BitTopup News](https://news.bittopup.com/news/poppo-live-earnings-guide-2-14-daily-for-beginners)
- [How to Make Money on Poppo Live — LootBar](https://lootbar.gg/blog/en/how-to-make-money-on-poppo-live-a-complete-earnings-breakdown.html)
- [How to Earn Money in Poppo Live: Complete Guide 2026 — EnjoyGM](https://www.enjoygm.com/blog/poppo-live/how-to-earn-money-2)`,
    },
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
      slug: "how-much-can-you-make-on-poppo-live",
      title: "Quanto Dá Para Ganhar de Verdade no Poppo Live?",
      excerpt:
        "Uma visão realista dos ganhos no Poppo Live, do começo aos top performers, e do que realmente faz os números crescerem.",
      date: "2026-05-11",
      coverImage: "/images/blog/how-much-can-you-make-on-poppo-live.png",
      content: `Vamos pular o hype. Você já viu os prints. Já ouviu alguém dizer que ganhou milhares em um mês. Agora quer saber se isso é real — e o que seria necessário para *você* chegar lá.

Aqui vai uma análise honesta.

---

## A conta primeiro

O Poppo Live funciona com um sistema de pontos. Como host, cada presente que você recebe vira pontos em uma taxa fixa: **10.000 pontos = US$ 1**. Essa taxa não muda. Ela faz parte da plataforma.

Quando um viewer envia um presente, você fica com 70% do valor em moedas como pontos (em lives e parties). Sessões privadas 1-on-1 pagam 40%. O restante fica com a plataforma.

Então, se um viewer manda 10.000 moedas durante uma live, você recebe 7.000 pontos — ou US$ 0,70. Não é erro de digitação. Os valores por presente são pequenos. O que torna a renda relevante é volume, lealdade e consistência.

---

## O que iniciantes realmente ganham

O primeiro mês é humilde para a maioria das pessoas. Você está começando do zero: sem audiência, sem regulares, sem reputação na plataforma. Espere algo na faixa de **US$ 50 a US$ 200** nos primeiros 30 dias — e isso se você estiver fazendo 4 a 6 horas de live por dia.

As tarefas diárias ajudam nesse começo. Novos usuários que fazem pelo menos 2 horas de live podem ganhar 20.000 pontos (US$ 2) por dia só completando tarefas de live solo — cerca de **US$ 14 por semana** como base, sem depender de presentes.

Não muda a vida, mas é real, e ajuda você a continuar enquanto constrói uma audiência.

---

## A curva de ganhos

É aqui que fica interessante. A estrutura de renda do Poppo não é linear — ela fica mais parecida com uma curva exponencial quando as coisas começam a encaixar.

Aqui vai uma ideia aproximada de como os ganhos costumam evoluir:

| Etapa | Estimativa Mensal | O Que Impulsiona |
|---|---|---|
| Mês 1 | US$ 50–US$ 200 | Tarefas diárias + presentes pequenos |
| Mês 3 | US$ 100–US$ 500 | Regulares crescendo, horários melhores |
| 6+ meses | US$ 500–US$ 1.000+ | Gifters fiéis, batalhas PK, eventos |
| Top performers | US$ 1.800–US$ 5.000+ | Grande fanbase, lives consistentes em horário de pico |
| Tier S-IDOL | US$ 30.000–US$ 50.000 | Dedicação em tempo integral, fan clubs enormes |

Os números de S-IDOL são reais, mas também são exceções. Pense neles como renda de influencer no YouTube: possível, mas exige anos e muitos fatores fora do seu controle.

O que é mais realista para uma streamer dedicada que aparece com consistência? **US$ 500 a US$ 1.500 por mês em até seis meses** é alcançável — não garantido, mas realmente possível.

---

## O que separa quem ganha mais

A maior variável não é talento. É timing.

Lives em **horários de pico — noites e fins de semana, aproximadamente das 19h às 23h no fuso da sua audiência** — tendem a ganhar bem mais do que lives fora desses horários. A visibilidade é maior, a disputa por atenção é mais forte, e o comportamento de enviar presentes aumenta.

Além do timing, quem ganha mais costuma ter alguns padrões:

- **Uma base de 50+ gifters regulares.** Não viewers casuais — pessoas que voltam sempre e realmente enviam presentes.
- **Participação ativa em batalhas PK.** PKs estimulam presentes por competição. A energia faz viewers gastarem mais do que gastariam em uma live casual.
- **Fan clubs.** O sistema de fan club do Poppo aprofunda a lealdade e cria apoio contínuo dos seus maiores fãs.
- **Consistência acima de intensidade.** Fazer 4 a 6 horas de live por dia, na maioria dos dias da semana, vale mais do que maratonas de 10 horas de vez em quando.

---

## A questão da agência

Ir sozinha mantém 100% dos seus ganhos do seu lado da mesa (menos a parte da plataforma). Mas você também fica sozinha para tudo: visibilidade, treinamento, estratégia, e entender por que seus números travaram.

Entrar em uma agência significa compartilhar uma porcentagem dos ganhos. Comissões de agência podem ir de cerca de 4% no nível inicial até 50% nos níveis mais altos de performance — embora a maioria das streamers ativas fique em algum lugar no meio.

O que você recebe em troca depende muito da agência. As boas oferecem apoio real: ajuda para entender a plataforma, acesso a eventos, coaching sobre o que realmente funciona. As ruins pegam a comissão e somem. Essa diferença importa muito, principalmente no começo.

Para a maioria das iniciantes, a parceria com a agência certa encurta bastante a curva de aprendizado. A comissão que você abre mão geralmente vale menos do que o tempo que gastaria tentando descobrir tudo sozinha.

---

## O resumo honesto

Dá para ganhar dinheiro de verdade no Poppo Live? Sim.

Dá para fazer isso sem dedicar tempo sério? Não.

A plataforma recompensa consistência, construção de comunidade e aparecer nos horários certos. Os primeiros meses são lentos para quase todo mundo — quem atravessa essa fase é quem eventualmente começa a ver os números mudarem.

Se você está pensando em começar, ou já está fazendo lives sozinha e se sente travada, podemos conversar. É para isso que estamos aqui.

---

## Fontes

- [Poppo Live Salary Guide 2025 — BitTopup News](https://news.bittopup.com/news/poppo-live-salary-guide-2025-vip-levels-agencies-how-hosts-make-1-000-monthly)
- [Poppo Live Salary Tiers 2025: D-S Breakdown — BitTopup News](https://news.bittopup.com/news/poppo-live-salary-tiers-2025-d-s-breakdown-to-50k-max)
- [Poppo Live Earnings Guide: $2–14 Daily for Beginners — BitTopup News](https://news.bittopup.com/news/poppo-live-earnings-guide-2-14-daily-for-beginners)
- [How to Make Money on Poppo Live — LootBar](https://lootbar.gg/blog/en/how-to-make-money-on-poppo-live-a-complete-earnings-breakdown.html)
- [How to Earn Money in Poppo Live: Complete Guide 2026 — EnjoyGM](https://www.enjoygm.com/blog/poppo-live/how-to-earn-money-2)`,
    },
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
