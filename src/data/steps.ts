import type { RichOption, Step } from '../types/brief'

const recommend: RichOption = {
  t: 'Não sei — recomende para mim|Not sure — recommend for me',
  d: 'Usaremos suas outras respostas para sugerir a melhor opção.|We will use your other answers to suggest the best option.',
  rec: true,
}

export const steps: Step[] = [
  {
    key: 'project',
    label: 'Projeto|Project',
    title: 'Vamos começar pelo básico|Let us start with the basics',
    intro: 'Três perguntas para situar o projeto.|Three questions to frame the project.',
    questions: [
      { id: 'name', type: 'text', t: 'Qual é o nome do projeto?|What is the project called?', help: 'Pode ser um nome provisório.|A working name is fine.', ph: 'Clínica Aurora', hint: 'Use o nome que seus clientes já conhecem, como aparece na fachada ou no Instagram.|Use the name your customers already know, as it appears on your storefront or Instagram.' },
      { id: 'kind', cols: 3, t: 'Que tipo de website você deseja criar?|What kind of website do you want to build?', help: 'Isso define a estrutura de páginas e boa parte das perguntas seguintes.|This shapes the page structure and most of the questions that follow.', opts: ['Site institucional|Company site', 'Landing page|Landing page', 'Portfólio|Portfolio', 'Blog / editorial|Blog / editorial', 'E-commerce|E-commerce', 'SaaS / aplicação web|SaaS / web app', 'Marketplace|Marketplace', 'Diretório|Directory', 'Comunidade|Community', 'Evento|Event', 'Turismo / hotelaria|Travel / hospitality', 'Educação|Education'] },
      { id: 'existing', cols: 2, t: 'Já existe um website hoje?|Is there a website today?', help: '', opts: ['Não|No', 'Sim, será redesenhado|Yes, it will be redesigned', 'Sim, haverá migração|Yes, it will be migrated', 'Apenas uma landing temporária|Only a temporary landing page'] },
      { id: 'url', type: 'text', t: 'Qual é o endereço atual?|What is the current address?', help: 'Vamos analisar conteúdo, URLs e redirecionamentos.|We will look at content, URLs and redirects.', ph: 'https://exemplo.com', hint: 'Copie o endereço direto da barra do navegador, incluindo o https://.|Copy the address straight from your browser bar, including the https://.', conditional: (a) => Boolean(a.existing && a.existing !== 'Não|No') },
    ],
  },
  {
    key: 'goals',
    label: 'Objetivos|Goals',
    title: 'O que o site precisa alcançar|What the site has to achieve',
    intro: 'Objetivos definem prioridade de conteúdo e métricas.|Goals set content priority and metrics.',
    questions: [
      { id: 'goals', multi: true, cols: 3, t: 'O que este website precisa alcançar?|What does this website need to achieve?', help: 'Escolha quantos quiser. O primeiro item vira a prioridade da home.|Pick as many as you like. The first one becomes the homepage priority.', opts: ['Gerar leads|Generate leads', 'Receber contatos|Receive enquiries', 'Vender produtos|Sell products', 'Vender serviços|Sell services', 'Apresentar a marca|Present the brand', 'Publicar conteúdo|Publish content', 'Receber reservas|Take bookings', 'Criar comunidade|Build a community', 'Área do cliente|Client area', 'Captar newsletter|Grow a newsletter', 'Tráfego orgânico|Organic traffic'] },
      { id: 'conversion', cols: 3, t: 'Qual é a principal conversão?|What is the main conversion?', help: 'A ação que define o sucesso do site.|The single action that defines success.', opts: ['Formulário enviado|Form submitted', 'Compra|Purchase', 'Reserva|Booking', 'Cadastro|Sign-up', 'Ligação|Phone call', 'Download|Download', 'Mensagem|Message', 'Visita física|In-person visit'] },
    ],
  },
  {
    key: 'audience', label: 'Público|Audience', title: 'Para quem o site é feito|Who the site is for', intro: '',
    questions: [
      { id: 'who', type: 'long', t: 'Quem é o público principal?|Who is the main audience?', help: 'Descreva com suas palavras.|Describe it in your own words.', ex: 'Ex.: mulheres de 30 a 55 anos na região metropolitana buscando dermatologia estética.|E.g. women 30–55 in the metro area looking for cosmetic dermatology.', hint: 'Quanto mais concreto, melhor: idade aproximada, onde a pessoa vive e o que ela procura.|The more concrete the better: approximate age, where the person lives and what they are looking for.' },
      { id: 'reach', multi: true, cols: 4, t: 'Onde esse público está?|Where is this audience?', help: 'Isso influencia idiomas, CDN e SEO local.|This affects languages, CDN and local SEO.', opts: ['Local|Local', 'Regional|Regional', 'Nacional|National', 'Internacional|International'] },
      { id: 'langs', multi: true, cols: 4, t: 'Quais idiomas o site precisa ter?|Which languages does the site need?', help: '', opts: ['Português|Portuguese', 'Inglês|English', 'Espanhol|Spanish', 'Alemão|German', 'Francês|French', 'Outro|Other'] },
      { id: 'device', cols: 4, t: 'Qual dispositivo será mais usado?|Which device will be used most?', help: '', opts: ['Mobile|Mobile', 'Desktop|Desktop', 'Aproximadamente igual|Roughly equal', recommend] },
      { id: 'savvy', type: 'scale', t: 'O usuário típico tem familiaridade com tecnologia?|How tech-savvy is the typical user?', help: 'Define densidade de interface, ajuda contextual e onboarding.|Sets interface density, inline help and onboarding.', opts: ['Muito baixa|Very low', 'Baixa|Low', 'Média|Medium', 'Alta|High', 'Muito alta|Very high'] },
    ],
  },
  {
    key: 'content', label: 'Conteúdo|Content', title: 'Conteúdo e tom de voz|Content and tone of voice', intro: 'Conteúdo costuma ser o que atrasa projetos. Melhor saber agora.|Content is what usually delays projects. Better to know now.',
    questions: [
      { id: 'contentReady', cols: 4, t: 'O conteúdo já existe?|Does the content already exist?', help: '', opts: ['Sim, completo|Yes, complete', 'Parcialmente|Partially', 'Ainda não|Not yet', 'Preciso de ajuda|I need help'] },
      { id: 'writer', cols: 3, t: 'Quem escreverá o conteúdo?|Who will write the content?', help: '', opts: ['Cliente|Client', 'Copywriter|Copywriter', 'Desenvolvedor|Developer', 'IA como apoio|AI as support', 'Ainda não definido|Not decided yet'] },
      { id: 'tone', multi: true, max: 3, cols: 4, t: 'Qual é o tom de voz?|What is the tone of voice?', help: 'Selecione até três.|Select up to three.', opts: ['Profissional|Professional', 'Amigável|Friendly', 'Técnico|Technical', 'Premium|Premium', 'Inspirador|Inspiring', 'Direto|Direct', 'Informal|Informal', 'Institucional|Institutional'] },
      { id: 'assets', multi: true, cols: 3, t: 'Que materiais já existem?|Which assets already exist?', help: '', opts: ['Logo|Logo', 'Fotografias|Photography', 'Vídeos|Video', 'Ilustrações|Illustration', 'Textos|Copy', 'Depoimentos|Testimonials', 'Cases|Case studies', 'Produtos|Product data', 'Brand guidelines|Brand guidelines'] },
      { id: 'pages', multi: true, cols: 4, t: 'Quais páginas o site terá?|Which pages will the site have?', help: 'Um sitemap inicial. Podemos crescer depois.|A starting sitemap. It can grow later.', opts: ['Home|Home', 'Sobre|About', 'Serviços|Services', 'Produtos|Products', 'Blog|Blog', 'Contato|Contact', 'FAQ|FAQ', 'Preços|Pricing', 'Cases|Cases', 'Equipe|Team', 'Galeria|Gallery', 'Reservas|Booking', 'Área do cliente|Client area', 'Login|Login', 'Legal|Legal'] },
    ],
  },
  {
    key: 'uiux', label: 'UI / UX|UI / UX', title: 'Direção visual|Visual direction', intro: '',
    questions: [
      { id: 'style', cols: 3, t: 'Qual estilo visual representa o projeto?|Which visual style fits the project?', help: '', opts: [{ t: 'Minimalista|Minimal', d: 'Muito branco, tipografia forte.|Lots of white, strong type.' }, { t: 'Editorial|Editorial', d: 'Leitura em primeiro lugar.|Reading comes first.' }, { t: 'Premium|Premium', d: 'Contraste alto, detalhes finos.|High contrast, fine detail.' }, { t: 'Corporativo|Corporate', d: 'Sóbrio e previsível.|Sober and predictable.' }, { t: 'Tecnológico|Technical', d: 'Densidade e dados à vista.|Density, data on show.' }, { t: 'Criativo|Expressive', d: 'Layout com personalidade.|Layout with personality.' }, { t: 'Natural / orgânico|Natural', d: 'Tons quentes, fotografia.|Warm tones, photography.' }, { t: 'Brutalista|Brutalist', d: 'Grid exposto, sem enfeite.|Exposed grid, no ornament.' }, recommend] },
      { id: 'layout', cols: 3, t: 'Que tipo de layout?|What kind of layout?', help: '', opts: ['Muito clean|Very clean', 'Visual / imersivo|Visual / immersive', 'Editorial|Editorial', 'Conteúdo denso|Dense content', 'Dashboard|Dashboard', 'Experimental|Experimental'] },
      { id: 'identity', cols: 3, t: 'Já existe identidade visual?|Is there an existing visual identity?', help: '', opts: ['Sim, completa|Yes, complete', 'Parcialmente|Partially', 'Não|No'] },
      { id: 'theme', cols: 5, t: 'Tema da interface|Interface theme', help: '', opts: ['Claro|Light', 'Escuro|Dark', 'Ambos|Both', 'Automático|Automatic', 'Não definido|Undecided'] },
      { id: 'refs', type: 'tags', t: 'Sites de referência|Reference sites', help: 'Cole endereços de sites que você admira. Depois marcamos o que agrada em cada um.|Paste addresses of sites you admire. We will tag what you like about each.', ph: 'stripe.com  ⏎', hint: 'Digite o endereço de um site e pressione Enter para adicionar. Repita para incluir outros — de 2 a 5 já ajuda bastante.|Type a site address and press Enter to add it. Repeat to add more — 2 to 5 is already plenty.' },
      { id: 'refLikes', multi: true, cols: 4, t: 'O que te agrada nessas referências?|What do you like in those references?', help: '', opts: ['Layout|Layout', 'Tipografia|Typography', 'Cores|Color', 'Navegação|Navigation', 'Animações|Motion', 'Conteúdo|Content', 'Fotografia|Photography', 'Sensação geral|Overall feel'] },
    ],
  },
  {
    key: 'features', label: 'Funcionalidades|Features', title: 'O que o site precisa fazer|What the site needs to do', intro: 'Escolha só o que é necessário no lançamento.|Pick only what is needed at launch.',
    questions: [
      { id: 'features', multi: true, cols: 3, t: 'Quais funcionalidades são necessárias?|Which features are needed?', help: 'Algumas escolhas abrem perguntas extras.|Some choices open extra questions.', opts: ['Formulário de contato|Contact form', 'Newsletter|Newsletter', 'Busca|Search', 'Login|Login', 'Área privada|Private area', 'Pagamentos|Payments', 'Carrinho|Cart', 'Reservas|Bookings', 'Calendário|Calendar', 'Upload de arquivos|File upload', 'Chat|Chat', 'Comentários|Comments', 'Reviews|Reviews', 'Mapa|Map', 'Multilíngue|Multilingual', 'Notificações|Notifications', 'Dashboard|Dashboard', 'Integrações externas|External integrations'] },
      { id: 'payMethods', multi: true, cols: 4, t: 'Como os pagamentos serão recebidos?|How will payments be taken?', help: 'Você marcou pagamentos, então precisamos disso.|You selected payments, so we need this.', opts: ['Cartão|Card', 'Pix|Instant transfer', 'Boleto|Bank slip', 'Assinatura recorrente|Subscription', 'Carteira digital|Digital wallet', recommend], conditional: (a) => Array.isArray(a.features) && a.features.some((v) => v.startsWith('Pagamentos') || v.startsWith('Carrinho')) },
    ],
  },
  {
    key: 'data', label: 'Dados|Data', title: 'Informações que o site guarda|Information the site stores', intro: 'Se nada precisa ser guardado, o projeto fica mais simples e barato.|If nothing has to be stored, the project gets simpler and cheaper.',
    questions: [
      { id: 'stores', multi: true, cols: 3, t: 'O website precisa armazenar informações?|Does the website need to store information?', help: '', opts: ['Usuários|Users', 'Pedidos|Orders', 'Reservas|Bookings', 'Mensagens|Messages', 'Produtos|Products', 'Conteúdo editorial|Editorial content', 'Uploads|Uploads', 'Histórico|History', 'Nada dinâmico|Nothing dynamic'] },
      { id: 'accounts', cols: 3, t: 'Usuários precisam criar conta?|Do users need to create an account?', help: '', opts: ['Não|No', 'Sim|Yes', 'Talvez futuramente|Maybe later'] },
      { id: 'authMethods', multi: true, cols: 3, t: 'Como as pessoas entrarão?|How will people sign in?', help: '', opts: ['Email + senha|Email + password', 'Magic link|Magic link', 'Google|Google', 'Apple|Apple', 'GitHub|GitHub', 'Microsoft|Microsoft'], conditional: (a) => a.accounts === 'Sim|Yes' },
      { id: 'roles', multi: true, cols: 5, t: 'Existem níveis de acesso diferentes?|Are there different access levels?', help: '', opts: ['Administrador|Administrator', 'Editor|Editor', 'Cliente|Client', 'Membro|Member', 'Visitante|Visitor'], conditional: (a) => a.accounts === 'Sim|Yes' },
    ],
  },
  {
    key: 'stack', label: 'Stack|Stack', title: 'Tecnologia|Technology', intro: 'Você não precisa decidir isto. Se não houver preferência, recomendamos ao final.|You do not have to decide this. With no preference, we recommend at the end.',
    questions: [
      { id: 'stack', cols: 3, t: 'Você tem preferência tecnológica?|Do you have a technology preference?', help: '', opts: ['Next.js|Next.js', 'React|React', 'Astro|Astro', 'Vue / Nuxt|Vue / Nuxt', 'Svelte|Svelte', 'WordPress|WordPress', 'Webflow|Webflow', 'Shopify|Shopify', { t: 'Sem preferência|No preference', d: 'A arquitetura será recomendada com base nas necessidades do projeto.|The architecture will be recommended from the project needs.' }] },
      { id: 'freq', cols: 3, t: 'Com que frequência o conteúdo muda?|How often does the content change?', help: 'Esta resposta define renderização, cache e CMS.|This answer drives rendering, caching and CMS.', opts: ['Raramente|Rarely', 'Algumas vezes por mês|A few times a month', 'Diariamente|Daily', 'Muda para cada usuário|Different for each user', recommend] },
      { id: 'cms', cols: 3, t: 'Quem vai editar o conteúdo depois?|Who will edit content after launch?', help: '', opts: ['Equipe sem conhecimento técnico|A non-technical team', 'Equipe técnica|A technical team', 'Ninguém, conteúdo fixo|Nobody, fixed content', recommend] },
    ],
  },
  {
    key: 'seo', label: 'SEO|SEO', title: 'Visibilidade em mecanismos de busca|Visibility in search engines', intro: '',
    questions: [
      { id: 'seoPriority', type: 'scale', t: 'Qual a prioridade de SEO?|How much of a priority is SEO?', help: '', opts: ['Baixa|Low', 'Importante|Important', 'Muito importante|Very important', 'Essencial|Essential'] },
      { id: 'organic', cols: 4, t: 'O projeto depende de tráfego orgânico?|Does the project depend on organic traffic?', help: 'Se a maior parte dos clientes chega pela busca, mudam prioridades técnicas.|If most customers arrive via search, technical priorities change.', opts: ['Muito|A lot', 'Parcialmente|Partly', 'Pouco|Little', recommend] },
      { id: 'keywords', type: 'tags', t: 'Existem palavras-chave importantes?|Are there important keywords?', help: 'Termos que as pessoas digitam para encontrar você.|Terms people type to find you.', ph: 'dermatologia estética  ⏎', hint: 'Escreva uma expressão e pressione Enter. Pense no que você digitaria no Google para se encontrar.|Type a phrase and press Enter. Think of what you would type into Google to find yourself.' },
      { id: 'competitors', type: 'tags', t: 'Concorrentes conhecidos|Known competitors', help: '', ph: 'concorrente.com  ⏎', hint: 'Digite o endereço do site de um concorrente e pressione Enter. Se não conhecer nenhum, pode deixar em branco.|Type a competitor site address and press Enter. If you do not know any, leave it blank.' },
    ],
  },
  {
    key: 'a11y', label: 'Acessibilidade|Accessibility', title: 'Acessibilidade|Accessibility', intro: 'Um site acessível funciona melhor para todo mundo e reduz risco legal.|An accessible site works better for everyone and lowers legal risk.',
    questions: [
      { id: 'a11y', cols: 2, t: 'Qual nível de acessibilidade você deseja?|What level of accessibility do you want?', help: '', opts: [{ t: 'Essencial|Essential', d: 'Boas práticas básicas: contraste, teclado, textos alternativos.|Basic good practice: contrast, keyboard, alt text.' }, { t: 'WCAG 2.2 AA|WCAG 2.2 AA', d: 'Recomendado para a maioria dos projetos. Este é o padrão.|Recommended for most projects. This is the default.' }, { t: 'Conformidade alta|High conformance', d: 'Projetos governamentais, institucionais ou regulados.|Government, institutional or regulated projects.' }, recommend] },
    ],
  },
  {
    key: 'perf', label: 'Performance|Performance', title: 'Velocidade|Speed', intro: 'Sites rápidos melhoram experiência, SEO e conversão.|Fast sites improve experience, SEO and conversion.',
    questions: [
      { id: 'perf', type: 'scale', t: 'Performance é prioridade?|Is performance a priority?', help: 'Metas recomendadas: LCP ≤ 2,5s · INP ≤ 200ms · CLS ≤ 0,1.|Recommended targets: LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1.', opts: ['Normal|Normal', 'Alta|High', 'Crítica|Critical'] },
      { id: 'media', cols: 4, t: 'O site terá muitas imagens ou vídeos?|Will the site carry a lot of images or video?', help: 'Mídia pesada é a causa mais comum de lentidão.|Heavy media is the most common cause of slowness.', opts: ['Pouca mídia|Little media', 'Bastante fotografia|A lot of photography', 'Vídeo em destaque|Video up front', recommend] },
    ],
  },
  {
    key: 'security', label: 'Segurança|Security', title: 'Dados pessoais e privacidade|Personal data and privacy', intro: '',
    questions: [
      { id: 'personal', multi: true, cols: 3, t: 'Que dados pessoais o site coletará?|What personal data will the site collect?', help: '', opts: ['Email|Email', 'Nome|Name', 'Telefone|Phone', 'Endereço|Address', 'Pagamento|Payment', 'Localização|Location', 'Nenhum|None'] },
      { id: 'privacy', multi: true, cols: 3, t: 'Privacidade e consentimento|Privacy and consent', help: 'Itens necessários porque haverá coleta de dados pessoais.|Needed because personal data will be collected.', opts: ['Cookie banner|Cookie banner', 'Consent management|Consent management', 'Política de privacidade|Privacy policy', 'LGPD / GDPR|LGPD / GDPR', 'Retenção de dados|Data retention'], conditional: (a) => Array.isArray(a.personal) && a.personal.length > 0 && !a.personal.includes('Nenhum|None') },
    ],
  },
  {
    key: 'analytics', label: 'Analytics|Analytics', title: 'Medição|Measurement', intro: '',
    questions: [
      { id: 'track', cols: 3, t: 'Deseja acompanhar o comportamento dos visitantes?|Do you want to track visitor behaviour?', help: '', opts: ['Sim|Yes', 'Não|No', 'Ainda não sei|Not sure yet'] },
      { id: 'tools', multi: true, cols: 3, t: 'Quais ferramentas?|Which tools?', help: '', opts: ['Google Analytics|Google Analytics', 'Plausible|Plausible', 'Matomo|Matomo', 'PostHog|PostHog', 'Search Console|Search Console', 'Heatmaps|Heatmaps', recommend], conditional: (a) => a.track === 'Sim|Yes' },
    ],
  },
  {
    key: 'infra', label: 'Infraestrutura|Infrastructure', title: 'Onde o site vai morar|Where the site will live', intro: '',
    questions: [
      { id: 'hosting', cols: 3, t: 'Já existe hospedagem?|Is there hosting already?', help: '', opts: ['Sim|Yes', 'Não|No', 'Não sei|I do not know'] },
      { id: 'hostPriority', cols: 3, t: 'Qual prioridade importa mais?|Which priority matters most?', help: '', opts: ['Menor custo|Lowest cost', 'Melhor performance|Best performance', 'Simplicidade|Simplicity', 'Escalabilidade|Scalability', 'Sustentabilidade|Sustainability', 'Controle da infraestrutura|Infrastructure control'], conditional: (a) => Boolean(a.hosting && a.hosting !== 'Sim|Yes') },
    ],
  },
  {
    key: 'domain', label: 'Domínio|Domain', title: 'Domínio, orçamento e prazo|Domain, budget and timeline', intro: '',
    questions: [
      { id: 'domain', cols: 3, t: 'Já possui domínio?|Do you already have a domain?', help: '', opts: ['Sim|Yes', 'Não|No', 'Quero ajuda para escolher|I want help choosing'] },
      { id: 'domainName', type: 'text', t: 'Qual é o domínio?|What is the domain?', help: '', ph: 'exemplo.com', hint: 'Só o endereço, sem https:// nem barras no final. Ex.: minhaempresa.com.br|Just the address, without https:// or trailing slashes. E.g. mycompany.com', conditional: (a) => a.domain === 'Sim|Yes' },
      { id: 'budget', cols: 3, t: 'Qual faixa de orçamento?|What budget range?', help: 'Opcional. Serve para calibrar escopo, não para cobrar.|Optional. It calibrates scope, not price.', opts: ['Projeto experimental|Experimental', 'Baixo orçamento|Low budget', 'Médio|Medium', 'Profissional|Professional', 'Premium|Premium', 'Ainda não definido|Not defined yet'] },
      { id: 'deadline', cols: 5, t: 'Quando você gostaria de lançar?|When would you like to launch?', help: '', opts: ['2–4 semanas|2–4 weeks', '1–2 meses|1–2 months', '3–6 meses|3–6 months', 'Mais de 6 meses|More than 6 months', 'Sem prazo|No deadline'] },
      { id: 'maintenance', cols: 5, t: 'Quem manterá o site depois do lançamento?|Who will maintain the site after launch?', help: '', opts: ['Cliente|Client', 'Desenvolvedor|Developer', 'Agência|Agency', 'Equipe interna|In-house team', 'Não definido|Not defined'] },
    ],
  },
]

export const reviewStep = {
  key: 'review',
  label: 'Revisão|Review',
  title: 'Revisão|Review',
  intro: '',
  questions: [],
} satisfies Step

export const allNavigationSteps = [...steps, reviewStep]
