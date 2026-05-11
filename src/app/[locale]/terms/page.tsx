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
    title: t.terms.title,
    description: t.terms.description,
    alternates: buildAlternates(locale, "terms"),
    openGraph: {
      title: `${t.terms.title} | ${t.siteName}`,
      description: t.terms.description,
    },
  };
}

const lastUpdated = "2026-04-01";

const content: Record<Locale, { heading: string; sections: { title: string; body: string }[] }> = {
  en: {
    heading: "Terms of Service",
    sections: [
      {
        title: "Acceptance of Terms",
        body: "By accessing and using the Golden Eagles website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.",
      },
      {
        title: "Description of Service",
        body: "Golden Eagles is a community website for a Poppo Live agency. We provide information about our agency, host community polls and events, publish blog content about live streaming, and maintain a curated shop with affiliate product links.",
      },
      {
        title: "Affiliate Links & Shop",
        body: "Our shop section contains affiliate links to third-party products and services. When you click on these links and make a purchase, we may receive a commission at no additional cost to you. We are not responsible for the quality, safety, or delivery of products purchased through these links. All transactions are governed by the respective third-party seller's terms and policies.",
      },
      {
        title: "User Conduct",
        body: "When participating in polls or interacting with our website, you agree to:\n\n• Provide accurate information when required\n• Not attempt to manipulate polls or voting systems\n• Not engage in any activity that disrupts or interferes with our services\n• Not use automated tools or bots to access our website",
      },
      {
        title: "Intellectual Property",
        body: "All content on this website, including text, graphics, logos, and images, is the property of Golden Eagles or its content creators and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.",
      },
      {
        title: "Third-Party Links",
        body: "Our website contains links to external sites, including Poppo Live. We are not responsible for the content, privacy practices, or availability of these third-party sites. Your use of external sites is subject to their respective terms of service.",
      },
      {
        title: "Disclaimer of Warranties",
        body: "This website is provided \"as is\" without warranties of any kind, either express or implied. We do not guarantee that the website will be uninterrupted, error-free, or free of harmful components.",
      },
      {
        title: "Limitation of Liability",
        body: "To the fullest extent permitted by law, Golden Eagles shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of or inability to use our website.",
      },
      {
        title: "Changes to These Terms",
        body: "We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated revision date. Continued use of the website after changes constitutes acceptance of the updated terms.",
      },
      {
        title: "Contact",
        body: "If you have questions about these Terms of Service, please reach out to us through our Contact page or via our Poppo Live profile.",
      },
    ],
  },
  "pt-br": {
    heading: "Termos de Uso",
    sections: [
      {
        title: "Aceitação dos Termos",
        body: "Ao acessar e utilizar o site da Golden Eagles, você concorda em ficar vinculado a estes Termos de Uso. Se não concordar com qualquer parte destes termos, por favor não utilize nosso site.",
      },
      {
        title: "Descrição do Serviço",
        body: "Golden Eagles é um site comunitário de uma agência do Poppo Live. Fornecemos informações sobre nossa agência, realizamos enquetes e eventos comunitários, publicamos conteúdo de blog sobre streaming ao vivo e mantemos uma loja curada com links de produtos afiliados.",
      },
      {
        title: "Links de Afiliados e Loja",
        body: "Nossa seção de loja contém links de afiliados para produtos e serviços de terceiros. Quando você clica nesses links e realiza uma compra, podemos receber uma comissão sem custo adicional para você. Não somos responsáveis pela qualidade, segurança ou entrega de produtos adquiridos por meio desses links. Todas as transações são regidas pelos termos e políticas do respectivo vendedor terceiro.",
      },
      {
        title: "Conduta do Usuário",
        body: "Ao participar de enquetes ou interagir com nosso site, você concorda em:\n\n• Fornecer informações precisas quando solicitado\n• Não tentar manipular enquetes ou sistemas de votação\n• Não se envolver em atividades que perturbem ou interfiram com nossos serviços\n• Não usar ferramentas automatizadas ou bots para acessar nosso site",
      },
      {
        title: "Propriedade Intelectual",
        body: "Todo o conteúdo deste site, incluindo textos, gráficos, logotipos e imagens, é propriedade da Golden Eagles ou de seus criadores de conteúdo e é protegido pelas leis de propriedade intelectual aplicáveis. Você não pode reproduzir, distribuir ou criar obras derivadas sem nosso consentimento prévio por escrito.",
      },
      {
        title: "Links de Terceiros",
        body: "Nosso site contém links para sites externos, incluindo o Poppo Live. Não somos responsáveis pelo conteúdo, práticas de privacidade ou disponibilidade desses sites de terceiros. Seu uso de sites externos está sujeito aos respectivos termos de serviço.",
      },
      {
        title: "Isenção de Garantias",
        body: "Este site é fornecido \"como está\" sem garantias de qualquer tipo, expressas ou implícitas. Não garantimos que o site será ininterrupto, livre de erros ou livre de componentes prejudiciais.",
      },
      {
        title: "Limitação de Responsabilidade",
        body: "Na extensão máxima permitida por lei, a Golden Eagles não será responsável por quaisquer danos indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou incapacidade de usar nosso site.",
      },
      {
        title: "Alterações nestes Termos",
        body: "Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações serão publicadas nesta página com uma data de revisão atualizada. O uso continuado do site após as alterações constitui aceitação dos termos atualizados.",
      },
      {
        title: "Contato",
        body: "Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco pela nossa página de Contato ou pelo nosso perfil no Poppo Live.",
      },
    ],
  },
};

export default async function TermsPage({
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
            <p className="whitespace-pre-line text-white/70">
              {section.body}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
