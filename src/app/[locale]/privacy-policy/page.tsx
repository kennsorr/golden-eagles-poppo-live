import type { Metadata } from "next";
import { copy } from "@/lib/copy";
import { Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = copy[locale];

  return {
    title: t.privacy.title,
    description: t.privacy.description,
    alternates: buildAlternates(locale, "privacy-policy"),
    openGraph: {
      title: `${t.privacy.title} | ${t.siteName}`,
      description: t.privacy.description,
    },
  };
}

const lastUpdated = "2026-04-01";

const content: Record<Locale, { heading: string; sections: { title: string; body: string }[] }> = {
  en: {
    heading: "Privacy Policy",
    sections: [
      {
        title: "Introduction",
        body: "Golden Eagles (\"we\", \"us\", or \"our\") operates the Golden Eagles website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our website and the choices you have associated with that data.",
      },
      {
        title: "Information We Collect",
        body: "We may collect the following types of information:\n\n• **Usage data** — pages visited, time spent on pages, browser type, device type, and referring URLs, collected automatically through cookies and analytics tools.\n• **Cookies** — small files stored on your device that help us improve your experience and serve relevant content.\n• **Voluntarily provided information** — such as your name when participating in polls or contacting us.",
      },
      {
        title: "Google AdSense",
        body: "We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your browsing history.\n\nYou may opt out of personalized advertising by visiting Google's Ads Settings at https://www.google.com/settings/ads. Alternatively, you can opt out of third-party cookies by visiting the Network Advertising Initiative opt-out page at https://www.networkadvertising.org/choices/.",
      },
      {
        title: "Google Analytics",
        body: "We may use Google Analytics to understand how visitors interact with our website. Google Analytics collects information such as how often users visit the site, what pages they visit, and what other sites they used prior to coming to our site. We use this information solely to improve our website. Google Analytics uses cookies to collect this data. You can learn more about how Google uses your data at https://policies.google.com/privacy.",
      },
      {
        title: "Third-Party Links",
        body: "Our website may contain links to external sites, including Poppo Live and affiliate products in our shop. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read their privacy policies before providing any personal data.",
      },
      {
        title: "Data Protection (LGPD)",
        body: "If you are located in Brazil, you have rights under the Lei Geral de Proteção de Dados (LGPD), including the right to access, correct, delete, or request portability of your personal data. To exercise these rights, please contact us using the information provided on our Contact page.",
      },
      {
        title: "Data Protection (GDPR)",
        body: "If you are located in the European Economic Area, you have rights under the General Data Protection Regulation (GDPR), including the right to access, rectify, erase, restrict processing, and data portability. To exercise these rights, please contact us using the information provided on our Contact page.",
      },
      {
        title: "Children's Privacy",
        body: "Our website is not directed at children under the age of 13. We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us so we can remove it.",
      },
      {
        title: "Changes to This Policy",
        body: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.",
      },
      {
        title: "Contact",
        body: "If you have questions about this Privacy Policy, please reach out to us through our Contact page or via our Poppo Live profile.",
      },
    ],
  },
  "pt-br": {
    heading: "Política de Privacidade",
    sections: [
      {
        title: "Introdução",
        body: "A Golden Eagles (\"nós\" ou \"nosso\") opera o site Golden Eagles. Esta página informa sobre nossas políticas de coleta, uso e divulgação de dados pessoais quando você utiliza nosso site, e as escolhas que você tem em relação a esses dados.",
      },
      {
        title: "Informações que Coletamos",
        body: "Podemos coletar os seguintes tipos de informação:\n\n• **Dados de uso** — páginas visitadas, tempo gasto, tipo de navegador, tipo de dispositivo e URLs de referência, coletados automaticamente por meio de cookies e ferramentas de análise.\n• **Cookies** — pequenos arquivos armazenados no seu dispositivo que nos ajudam a melhorar sua experiência e exibir conteúdo relevante.\n• **Informações fornecidas voluntariamente** — como seu nome ao participar de enquetes ou entrar em contato conosco.",
      },
      {
        title: "Google AdSense",
        body: "Utilizamos o Google AdSense para exibir anúncios em nosso site. O Google AdSense usa cookies para veicular anúncios com base em suas visitas anteriores a este site ou outros sites. O uso de cookies de publicidade pelo Google permite que ele e seus parceiros veiculem anúncios com base no seu histórico de navegação.\n\nVocê pode desativar a publicidade personalizada visitando as Configurações de Anúncios do Google em https://www.google.com/settings/ads. Alternativamente, você pode desativar cookies de terceiros visitando a página de opt-out da Network Advertising Initiative em https://www.networkadvertising.org/choices/.",
      },
      {
        title: "Google Analytics",
        body: "Podemos utilizar o Google Analytics para entender como os visitantes interagem com nosso site. O Google Analytics coleta informações como frequência de visitas, páginas visitadas e sites de origem. Usamos essas informações exclusivamente para melhorar nosso site. O Google Analytics usa cookies para coletar esses dados. Saiba mais sobre como o Google usa seus dados em https://policies.google.com/privacy.",
      },
      {
        title: "Links de Terceiros",
        body: "Nosso site pode conter links para sites externos, incluindo o Poppo Live e produtos afiliados em nossa loja. Não somos responsáveis pelas práticas de privacidade ou conteúdo desses sites de terceiros. Recomendamos que você leia as políticas de privacidade deles antes de fornecer qualquer dado pessoal.",
      },
      {
        title: "Proteção de Dados (LGPD)",
        body: "Se você está localizado no Brasil, você tem direitos sob a Lei Geral de Proteção de Dados (LGPD), incluindo o direito de acessar, corrigir, excluir ou solicitar a portabilidade dos seus dados pessoais. Para exercer esses direitos, entre em contato conosco pela nossa página de Contato.",
      },
      {
        title: "Proteção de Dados (GDPR)",
        body: "Se você está localizado no Espaço Econômico Europeu, você tem direitos sob o Regulamento Geral de Proteção de Dados (GDPR), incluindo o direito de acesso, retificação, exclusão, restrição de processamento e portabilidade de dados. Para exercer esses direitos, entre em contato conosco pela nossa página de Contato.",
      },
      {
        title: "Privacidade de Crianças",
        body: "Nosso site não é direcionado a crianças menores de 13 anos. Não coletamos intencionalmente dados pessoais de crianças. Se você acredita que coletamos dados de uma criança, entre em contato conosco para que possamos removê-los.",
      },
      {
        title: "Alterações nesta Política",
        body: "Podemos atualizar esta Política de Privacidade periodicamente. As alterações serão publicadas nesta página com uma data de revisão atualizada. Recomendamos que você revise esta política periodicamente.",
      },
      {
        title: "Contato",
        body: "Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco pela nossa página de Contato ou pelo nosso perfil no Poppo Live.",
      },
    ],
  },
};

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const c = content[locale];
  const dateLabel = locale === "pt-br" ? "Última atualização" : "Last updated";

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          {c.heading}
        </h1>
        <p className="text-sm text-white/50">
          {dateLabel}: {lastUpdated}
        </p>
      </section>

      <div className="space-y-8">
        {c.sections.map((section) => (
          <section key={section.title} className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              {section.title}
            </h2>
            <div className="whitespace-pre-line text-white/70 [&_strong]:text-white/90">
              {section.body.split(/(\*\*[^*]+\*\*)/).map((part, i) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                  return (
                    <strong key={i}>{part.slice(2, -2)}</strong>
                  );
                }
                return <span key={i}>{part}</span>;
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
