import type { StepGuide } from '../types/brief'

// Plain-language explanations shown in the "explain in simple words" modal.
// Keyed by step key (see steps.ts). Strings follow the "pt|en" convention.
export const guides: Record<string, StepGuide> = {
  project: {
    intro: 'Aqui você apresenta o projeto, como se estivesse explicando para alguém que acabou de conhecer o seu negócio. Não existe resposta errada.|Here you introduce the project, as if explaining it to someone who just met your business. There are no wrong answers.',
    items: [
      {
        title: 'Nome do projeto|Project name',
        explain: 'É como você chama o site ou o negócio. Se ainda não decidiu, use um nome provisório: dá para trocar depois.|It is what you call the site or the business. If you have not decided yet, use a working name: it can change later.',
        example: 'Clínica Aurora, Padaria da Vila, Portfólio da Marina.|Aurora Clinic, Village Bakery, Marina’s Portfolio.',
      },
      {
        title: 'Tipo de website|Kind of website',
        explain: 'Diz para que o site serve. Escolha o que mais se aproxima; não precisa ser perfeito. Um site institucional é a “vitrine” da empresa. Uma landing page é uma página única para vender algo ou captar contatos.|It says what the site is for. Pick the closest one; it does not have to be perfect. A company site is the business “storefront”. A landing page is a single page to sell something or collect contacts.',
        example: 'Dentista: site institucional. Lançamento de um curso: landing page. Loja de roupas: e-commerce (loja online).|Dentist: company site. Launching a course: landing page. Clothing store: e-commerce (online shop).',
      },
      {
        title: 'Já existe um website?|Is there already a website?',
        explain: 'Se já tem site, o novo pode ser uma renovação do visual (redesenho) ou uma troca de plataforma mantendo o conteúdo (migração).|If you already have a site, the new one can be a visual refresh (redesign) or a move to a new platform keeping the content (migration).',
        example: 'Redesenho: mesmos textos, visual novo. Migração: sair do Wix para outra plataforma sem perder textos e fotos.|Redesign: same text, new look. Migration: leaving Wix for another platform without losing text and photos.',
      },
      {
        title: 'Endereço atual|Current address',
        explain: 'É o que você digita no navegador para abrir o site de hoje. Usamos para ver o que já existe e evitar que links antigos parem de funcionar.|It is what you type in the browser to open today’s site. We use it to see what exists and to keep old links from breaking.',
        example: 'https://www.clinicaaurora.com.br|https://www.aurora-clinic.com',
      },
    ],
  },

  goals: {
    intro: 'Aqui você diz o que espera do site. Pense no que precisa acontecer para você concluir que “valeu a pena”.|Here you say what you expect from the site. Think about what has to happen for you to say it “was worth it”.',
    items: [
      {
        title: 'O que o site precisa alcançar|What the site has to achieve',
        explain: 'Escolha os resultados que você espera. Pode marcar vários; o primeiro que escolher vira a prioridade da página inicial.|Choose the results you expect. You can pick several; the first one you pick becomes the homepage priority.',
        example: 'Uma dentista marca “Receber contatos” e “Apresentar a marca”. Uma loja marca “Vender produtos”.|A dentist picks “Receive enquiries” and “Present the brand”. A shop picks “Sell products”.',
      },
      {
        title: 'Principal conversão|Main conversion',
        explain: 'Conversão é a ação que uma visita precisa fazer para o site ter dado certo. Escolha a única coisa que você mais quer que as pessoas façam.|A conversion is the action a visitor has to take for the site to have worked. Pick the one thing you most want people to do.',
        example: 'Clínica: agendar consulta. Loja: comprar. Consultor: enviar uma mensagem.|Clinic: book an appointment. Shop: buy. Consultant: send a message.',
      },
      {
        title: 'O que é um “lead”?|What is a “lead”?',
        explain: 'É alguém que demonstrou interesse e deixou um jeito de falar com ela, como email ou telefone.|It is someone who showed interest and left a way to reach them, such as an email or phone number.',
        example: 'Alguém que preenche “Quero um orçamento” com nome e telefone.|Someone who fills in “I want a quote” with a name and phone number.',
      },
    ],
  },

  audience: {
    intro: 'Um site bom é pensado para pessoas específicas. Aqui você descreve quem vai usá-lo.|A good site is designed for specific people. Here you describe who will use it.',
    items: [
      {
        title: 'Público principal|Main audience',
        explain: 'Descreva a pessoa ideal que você quer atingir: idade aproximada, onde vive e o que procura. Não precisa ser exato.|Describe the ideal person you want to reach: approximate age, where they live and what they are looking for. It does not need to be exact.',
        example: 'Mulheres de 30 a 55 anos, moradoras de Campinas, que procuram tratamento de pele com hora marcada.|Women aged 30 to 55, living in Brighton, looking for skin treatment by appointment.',
      },
      {
        title: 'Onde esse público está|Where the audience is',
        explain: 'Local é a sua cidade ou bairro; regional, um estado ou região; nacional, o país inteiro; internacional, outros países. Isso decide, por exemplo, se o site precisa aparecer bem em buscas “perto de mim”.|Local is your city or neighbourhood; regional, a state or region; national, the whole country; international, other countries. It decides, for instance, whether the site must show up well in “near me” searches.',
        example: 'Padaria de bairro: local. Curso online para todo o Brasil: nacional.|Neighbourhood bakery: local. Online course for the whole country: national.',
      },
      {
        title: 'Idiomas|Languages',
        explain: 'São os idiomas em que o site será lido. Cada idioma extra significa mais textos para escrever e manter atualizados.|These are the languages the site will be read in. Every extra language means more text to write and keep up to date.',
        example: 'Hotel em Florianópolis: português, inglês e espanhol.|Hotel in Florianópolis: Portuguese, English and Spanish.',
      },
      {
        title: 'Dispositivo mais usado|Most used device',
        explain: 'Se a maioria das pessoas vai acessar pelo celular ou pelo computador. Isso muda a forma como o site é desenhado. Sem certeza? Escolha “Não sei — recomende para mim”.|Whether most people will visit from a phone or a computer. It changes how the site is designed. Not sure? Choose “Not sure — recommend for me”.',
        example: 'Delivery de comida: quase todos usam celular. Sistema de contabilidade: mais computador.|Food delivery: almost everyone uses a phone. Accounting software: more computers.',
      },
      {
        title: 'Familiaridade com tecnologia|Tech familiarity',
        explain: 'Esta pergunta é sobre quem vai USAR o site, não sobre você. Pessoas com pouca familiaridade precisam de telas mais simples, textos maiores e menos opções.|This question is about who will USE the site, not about you. People with little familiarity need simpler screens, larger text and fewer options.',
        example: 'Serviço para idosos: baixa. Ferramenta para programadores: muito alta.|A service for older adults: low. A tool for programmers: very high.',
      },
    ],
  },

  content: {
    intro: 'Textos e imagens costumam ser o que mais atrasa um site. Aqui você mostra o que já está pronto e o que ainda falta.|Text and images are usually what delay a site the most. Here you show what is ready and what is still missing.',
    items: [
      {
        title: 'O conteúdo já existe?|Does the content exist?',
        explain: 'Conteúdo é tudo o que aparece no site: textos, fotos, vídeos, preços. Diga o quanto disso já está pronto.|Content is everything that appears on the site: text, photos, video, prices. Say how much of it is already ready.',
        example: 'Você tem o texto da página “Sobre”, mas ainda não tem fotos profissionais: “Parcialmente”.|You have the “About” text but no professional photos yet: “Partially”.',
      },
      {
        title: 'Quem escreverá o conteúdo|Who writes the content',
        explain: 'Alguém precisa redigir os textos. Copywriter é o profissional que escreve textos pensados para convencer e vender.|Someone has to write the text. A copywriter is a professional who writes text meant to persuade and sell.',
        example: 'Você mesmo escreve: “Cliente”. Contratar alguém só para os textos: “Copywriter”.|You write it yourself: “Client”. Hiring someone just for the text: “Copywriter”.',
      },
      {
        title: 'Tom de voz|Tone of voice',
        explain: 'É o jeito de falar do site, como a personalidade de uma pessoa. Escolha até três palavras que combinam com a sua marca.|It is how the site “speaks”, like a person’s personality. Choose up to three words that fit your brand.',
        example: 'Clínica: profissional e amigável. Marca de skate: informal e direto.|Clinic: professional and friendly. Skate brand: informal and direct.',
      },
      {
        title: 'Materiais que já existem|Existing assets',
        explain: 'Tudo o que você já tem e pode usar. “Brand guidelines” é o manual da marca: um documento que define cores, fontes e o uso do logo.|Everything you already have and can use. “Brand guidelines” is the brand manual: a document that sets colours, fonts and how the logo is used.',
        example: 'Logo em arquivo, fotos da equipe e três depoimentos de clientes.|A logo file, team photos and three customer testimonials.',
      },
      {
        title: 'Páginas do site|Site pages',
        explain: 'As páginas são as “telas” do site, as opções do menu. Escolha as que fazem sentido agora; dá para crescer depois. “Cases” são histórias de clientes ou projetos atendidos com sucesso.|Pages are the site “screens”, the menu options. Pick the ones that make sense now; it can grow later. “Cases” are stories of customers or projects served successfully.',
        example: 'Site de um advogado: Home, Sobre, Serviços e Contato. Uma loja acrescenta Produtos e Login.|A lawyer’s site: Home, About, Services and Contact. A shop adds Products and Login.',
      },
    ],
  },

  uiux: {
    intro: 'UI/UX é como o site parece (visual) e como é usá-lo (facilidade). Você não precisa saber design: basta dizer do que gosta.|UI/UX is how the site looks (visual) and how it feels to use (ease). You do not need to know design: just say what you like.',
    items: [
      {
        title: 'Estilo visual|Visual style',
        explain: 'É a “personalidade” do visual. Leia os nomes e as descrições e escolha o que mais parece com você. Se ficar em dúvida, peça uma recomendação.|It is the “personality” of the look. Read the names and descriptions and pick what feels most like you. If in doubt, ask for a recommendation.',
        example: 'Minimalista: muito espaço em branco e poucas cores. Natural: tons quentes e fotos de pessoas e lugares.|Minimal: lots of white space and few colours. Natural: warm tones and photos of people and places.',
      },
      {
        title: 'Tipo de layout|Kind of layout',
        explain: 'Layout é como as coisas ficam organizadas na tela. “Muito clean” é espaçoso e simples; “conteúdo denso” junta muita informação, como um portal de notícias.|Layout is how things are arranged on screen. “Very clean” is spacious and simple; “dense content” packs in a lot of information, like a news portal.',
        example: 'Consultório: muito clean. Portal de notícias: conteúdo denso.|A private practice: very clean. A news portal: dense content.',
      },
      {
        title: 'Identidade visual|Visual identity',
        explain: 'É o conjunto de logo, cores e fontes que formam a “cara” da marca.|It is the set of logo, colours and fonts that make up the “face” of the brand.',
        example: 'Já tem logo e paleta de cores definidos: “Sim, completa”. Só tem o logo: “Parcialmente”.|You have a logo and colour palette: “Yes, complete”. Only a logo: “Partially”.',
      },
      {
        title: 'Tema da interface|Interface theme',
        explain: 'Claro é fundo branco; escuro é fundo preto (modo noturno). “Ambos” deixa a pessoa escolher; “automático” segue a configuração do celular ou computador dela.|Light is a white background; dark is a black background (night mode). “Both” lets the person choose; “automatic” follows their phone or computer setting.',
        example: 'Blog de leitura: claro. Site de música ou games: escuro.|Reading blog: light. Music or gaming site: dark.',
      },
      {
        title: 'Sites de referência|Reference sites',
        explain: 'São sites que você admira e gostaria que o seu lembrasse, mesmo de outro ramo. Digite o endereço e pressione Enter para adicionar.|These are sites you admire and would like yours to resemble, even from another industry. Type the address and press Enter to add it.',
        example: 'apple.com, airbnb.com ou o site de um concorrente que você acha bonito.|apple.com, airbnb.com or a competitor’s site you find beautiful.',
      },
      {
        title: 'O que agrada nas referências|What you like in them',
        explain: 'Diga o que chamou sua atenção: a organização da página (layout), as letras (tipografia), as cores, os movimentos (animações)…|Say what caught your eye: how the page is organised (layout), the lettering (typography), the colours, the movement (motion)…',
        example: 'Adoro as cores e a sensação de calma do site X: marque “Cores” e “Sensação geral”.|I love the colours and calm feeling of site X: pick “Color” and “Overall feel”.',
      },
    ],
  },

  features: {
    intro: 'Funcionalidades são as “coisas que o site faz”, além de mostrar informação. Cada uma acrescenta trabalho, então marque só o que é necessário no lançamento.|Features are the “things the site does”, beyond showing information. Each one adds work, so tick only what you need at launch.',
    items: [
      {
        title: 'Formulário e newsletter|Form and newsletter',
        explain: 'Formulário: a pessoa preenche nome e mensagem e você recebe por email. Newsletter: uma lista de emails para você enviar novidades.|Form: the person fills in a name and message and you receive it by email. Newsletter: an email list you can send news to.',
        example: 'Um botão “Peça um orçamento” que abre um formulário.|A “Request a quote” button that opens a form.',
      },
      {
        title: 'Login e área privada|Login and private area',
        explain: 'Login: a pessoa cria uma conta e entra com senha. Área privada: páginas que só quem entrou consegue ver.|Login: the person creates an account and signs in with a password. Private area: pages only signed-in people can see.',
        example: 'Um aluno entra para assistir às aulas de um curso online.|A student signs in to watch the lessons of an online course.',
      },
      {
        title: 'Pagamentos e carrinho|Payments and cart',
        explain: 'Pagamentos: cobrar pelo próprio site. Carrinho: a pessoa junta vários produtos antes de pagar.|Payments: charging through the site itself. Cart: the person collects several products before paying.',
        example: 'Loja de roupas: a cliente escolhe três peças, coloca no carrinho e paga no Pix.|Clothing shop: the customer picks three items, adds them to the cart and pays.',
      },
      {
        title: 'Reservas e calendário|Bookings and calendar',
        explain: 'Permitem marcar dia e hora direto no site, sem troca de mensagens.|They let people book a day and time directly on the site, with no back-and-forth messages.',
        example: 'A cliente escolhe quinta-feira às 15h para uma consulta.|The customer picks Thursday at 3 pm for an appointment.',
      },
      {
        title: 'Busca, reviews, comentários e chat|Search, reviews, comments and chat',
        explain: 'Busca: um campo para encontrar conteúdo. Reviews: avaliações de clientes. Comentários: pessoas comentando em textos. Chat: conversa em tempo real.|Search: a box to find content. Reviews: customer ratings. Comments: people commenting on posts. Chat: real-time conversation.',
        example: 'Estrelinhas e comentários de clientes embaixo de cada produto.|Stars and customer comments under each product.',
      },
      {
        title: 'Integrações externas|External integrations',
        explain: 'É ligar o site a outros serviços que você já usa, para que os dados andem sozinhos.|It means connecting the site to other services you already use, so data moves on its own.',
        example: 'Cada contato do formulário vai direto para o WhatsApp, o Google Agenda ou uma planilha.|Every form contact goes straight to WhatsApp, Google Calendar or a spreadsheet.',
      },
      {
        title: 'Outras opções|Other options',
        explain: 'Dashboard: painel com números e gráficos. Notificações: avisos por email ou celular. Upload: enviar arquivos. Multilíngue: vários idiomas. Mapa: mostra onde você está.|Dashboard: a panel with numbers and charts. Notifications: alerts by email or phone. File upload: sending files. Multilingual: several languages. Map: shows where you are.',
        example: 'Uma clínica marca “Mapa” para mostrar o endereço e “Multilíngue” para atender turistas.|A clinic ticks “Map” to show its address and “Multilingual” to serve tourists.',
      },
      {
        title: 'Formas de pagamento|Payment methods',
        explain: 'Aparece só se você marcou pagamentos ou carrinho. Pix é a transferência instantânea; boleto é pago em banco ou lotérica; assinatura é a cobrança mensal automática; carteira digital é Apple Pay ou Google Pay.|Shown only if you ticked payments or cart. Instant transfer is a bank-to-bank payment that arrives immediately; bank slip is paid at a bank; subscription is automatic monthly billing; digital wallet is Apple Pay or Google Pay.',
        example: 'Curso online: cartão e assinatura recorrente. Loja local: cartão e Pix.|Online course: card and subscription. Local shop: card and instant transfer.',
      },
    ],
  },

  data: {
    intro: 'Esta etapa pergunta se o site precisa “lembrar” informações, como quem se cadastrou ou o que foi comprado. Isso fica guardado em um banco de dados. Sites sem isso são mais simples e mais baratos.|This step asks whether the site needs to “remember” information, such as who signed up or what was bought. It is kept in a database. Sites without it are simpler and cheaper.',
    items: [
      {
        title: 'O site precisa armazenar informações?|Does the site need to store information?',
        explain: 'Se o site só mostra textos e fotos definidos por você, escolha “Nada dinâmico”. Se as pessoas enviam ou geram informação nele, marque o que será guardado.|If the site only shows text and photos you set, choose “Nothing dynamic”. If people send or generate information on it, tick what will be stored.',
        example: 'Restaurante só com cardápio: nada dinâmico. Loja online: usuários, pedidos e produtos.|Restaurant with just a menu: nothing dynamic. Online shop: users, orders and products.',
      },
      {
        title: 'Criar conta|Creating an account',
        explain: 'Pergunta se os visitantes precisam se cadastrar (email e senha) para usar alguma coisa.|It asks whether visitors have to sign up (email and password) to use something.',
        example: 'Para acompanhar um pedido, a pessoa entra na conta. Para ler um blog, não.|To follow an order, the person signs in. To read a blog, they do not.',
      },
      {
        title: 'Como as pessoas entram|How people sign in',
        explain: 'Email + senha é o tradicional. “Magic link” manda um link por email e a pessoa entra com um clique, sem senha. Google, Apple e outros deixam entrar com a conta que a pessoa já tem.|Email + password is the traditional way. A “magic link” is emailed and the person signs in with one click, no password. Google, Apple and others let people use an account they already have.',
        example: 'O botão “Entrar com Google” evita que a pessoa crie mais uma senha.|The “Sign in with Google” button saves the person from creating yet another password.',
      },
      {
        title: 'Níveis de acesso|Access levels',
        explain: 'Nem todo mundo pode fazer tudo. Os perfis definem o que cada tipo de pessoa pode ver ou alterar.|Not everyone can do everything. Roles define what each kind of person can see or change.',
        example: 'Administrador cria e apaga páginas; editor só corrige textos; cliente vê apenas os próprios pedidos.|An administrator creates and deletes pages; an editor only fixes text; a client sees only their own orders.',
      },
    ],
  },

  stack: {
    intro: '“Stack” é o conjunto de ferramentas usadas para construir o site. Se você nunca ouviu esses nomes, tudo bem: escolha “Sem preferência” e nós recomendamos ao final.|A “stack” is the set of tools used to build the site. If you have never heard these names, that is fine: choose “No preference” and we will recommend one at the end.',
    items: [
      {
        title: 'Preferência tecnológica|Technology preference',
        explain: 'São nomes de ferramentas de construção. Só escolha uma se alguém (um desenvolvedor, uma agência) já indicou. WordPress, Webflow e Shopify permitem montar sites com menos programação; Next.js, React e Astro são usados por programadores.|These are names of building tools. Only pick one if someone (a developer, an agency) already suggested it. WordPress, Webflow and Shopify let you build sites with less coding; Next.js, React and Astro are used by programmers.',
        example: 'Sua agência já trabalha com WordPress: marque WordPress. Nunca ouviu falar de nenhum: “Sem preferência”.|Your agency already works with WordPress: pick WordPress. Never heard of any of them: “No preference”.',
      },
      {
        title: 'Frequência de mudanças|How often content changes',
        explain: 'Com que frequência você vai trocar textos, fotos ou preços. Isso ajuda a escolher a melhor forma de manter o site rápido e atualizado.|How often you will change text, photos or prices. It helps choose the best way to keep the site fast and up to date.',
        example: 'Site de advogado: raramente. Blog de notícias: diariamente. Área do aluno com dados de cada pessoa: muda para cada usuário.|Lawyer’s site: rarely. News blog: daily. Student area with each person’s data: different for each user.',
      },
      {
        title: 'Quem vai editar o conteúdo|Who will edit the content',
        explain: 'CMS é o painel (parecido com um editor de texto) onde se trocam textos e fotos sem mexer em código. Aqui você diz quem vai usá-lo.|A CMS is the dashboard (similar to a text editor) where text and photos are changed without touching code. Here you say who will use it.',
        example: 'Se a recepcionista vai atualizar os horários, marque “Equipe sem conhecimento técnico”: o painel será bem simples.|If the receptionist will update opening hours, pick “A non-technical team”: the dashboard will be very simple.',
      },
    ],
  },

  seo: {
    intro: 'SEO são as boas práticas para o site aparecer nos resultados do Google. Quanto melhor o SEO, mais pessoas encontram você sem que você pague por anúncio.|SEO is the set of good practices that help a site show up in Google results. The better the SEO, the more people find you without you paying for ads.',
    items: [
      {
        title: 'Prioridade de SEO|SEO priority',
        explain: 'Quanto você depende de ser encontrado no Google. Se a maioria dos clientes chega pela busca, escolha uma prioridade alta.|How much you depend on being found on Google. If most customers arrive through search, choose a high priority.',
        example: 'Encanador da região: essencial (as pessoas buscam “encanador perto de mim”). Site de convite de casamento: baixa.|Local plumber: essential (people search “plumber near me”). Wedding invitation site: low.',
      },
      {
        title: 'Tráfego orgânico|Organic traffic',
        explain: '“Orgânico” é o que chega sem anúncio pago, pela busca ou por links.|“Organic” is what arrives without paid ads, through search or links.',
        example: 'Alguém digita “clínica de estética em Campinas” no Google e clica no seu site.|Someone types “aesthetics clinic in Brighton” into Google and clicks your site.',
      },
      {
        title: 'Palavras-chave|Keywords',
        explain: 'São as palavras e frases que as pessoas digitam para achar o que você faz. Pense como o cliente, não como especialista.|These are the words and phrases people type to find what you do. Think like a customer, not an expert.',
        example: 'dermatologista em Campinas, tratamento para acne, preço de botox.|dermatologist in Brighton, acne treatment, botox price.',
      },
      {
        title: 'Concorrentes|Competitors',
        explain: 'Sites de quem oferece algo parecido. Serve para comparar e achar oportunidades. É opcional.|Sites of people offering something similar. Used to compare and spot opportunities. Optional.',
        example: 'O endereço do site da clínica rival do bairro.|The address of the rival clinic’s site in your area.',
      },
    ],
  },

  a11y: {
    intro: 'Acessibilidade é fazer o site funcionar para todas as pessoas, incluindo quem tem deficiência visual, motora ou auditiva, e quem usa o celular no sol ou com uma mão só.|Accessibility means making the site work for everyone, including people with visual, motor or hearing disabilities, and anyone using a phone in the sun or with one hand.',
    items: [
      {
        title: 'Nível de acessibilidade|Accessibility level',
        explain: '“Essencial” cobre o básico. “WCAG 2.2 AA” é o padrão internacional recomendado para a maioria dos sites. “Conformidade alta” é para projetos do governo ou regulados. Sem certeza? Fique com o padrão.|“Essential” covers the basics. “WCAG 2.2 AA” is the international standard recommended for most sites. “High conformance” is for government or regulated projects. Not sure? Keep the default.',
        example: 'Uma escola pública ou um banco costuma precisar de um nível mais alto que um blog pessoal.|A public school or a bank usually needs a higher level than a personal blog.',
      },
      {
        title: 'O que é WCAG?|What is WCAG?',
        explain: 'São as regras internacionais de acessibilidade na web. O nível AA é o intermediário e o mais adotado.|These are the international web accessibility rules. Level AA is the middle one and the most widely adopted.',
        example: 'Na prática: texto com contraste suficiente para ler, descrição nas imagens e possibilidade de navegar só com o teclado.|In practice: text with enough contrast to read, descriptions on images and the ability to navigate with only the keyboard.',
      },
    ],
  },

  perf: {
    intro: 'Performance é a velocidade do site. Páginas lentas fazem as pessoas irem embora antes de ver qualquer coisa.|Performance is the speed of the site. Slow pages make people leave before they see anything.',
    items: [
      {
        title: 'Performance é prioridade?|Is performance a priority?',
        explain: '“Normal” é velocidade boa, sem exagero. “Alta” pede um esforço extra para ficar bem rápido. “Crítica” é quando cada segundo importa.|“Normal” is good speed without going overboard. “High” takes extra effort to be very fast. “Critical” is when every second counts.',
        example: 'Loja com muitas vendas: alta ou crítica. Site de apresentação de uma consultoria: normal.|Shop with heavy sales: high or critical. A consultancy’s presentation site: normal.',
      },
      {
        title: 'As metas LCP, INP e CLS|The LCP, INP and CLS targets',
        explain: 'São “notas” do Google. LCP: em quanto tempo o conteúdo principal aparece. INP: quanto o site demora para reagir a um clique. CLS: se a página “pula” enquanto carrega. Você não precisa se preocupar com elas.|These are Google “scores”. LCP: how long the main content takes to appear. INP: how long the site takes to react to a click. CLS: whether the page “jumps” while loading. You do not need to worry about them.',
        example: 'Um botão que se move justo quando você vai clicar é um problema de CLS.|A button that moves just as you are about to tap it is a CLS problem.',
      },
      {
        title: 'Imagens e vídeos|Images and video',
        explain: 'Fotos e vídeos pesados são a causa mais comum de lentidão. Diga quanta mídia o site terá para planejarmos como reduzir o peso.|Heavy photos and video are the most common cause of slowness. Tell us how much media the site will have so we can plan how to reduce the weight.',
        example: 'Portfólio de fotógrafo: bastante fotografia. Site com vídeo de fundo na abertura: vídeo em destaque.|Photographer’s portfolio: a lot of photography. Site with a background video on top: video up front.',
      },
    ],
  },

  security: {
    intro: 'Sempre que um site pede dados de alguém (nome, email, telefone), existem cuidados e regras a seguir, como a LGPD, a lei brasileira de proteção de dados.|Whenever a site asks for someone’s data (name, email, phone), there are precautions and rules to follow, such as GDPR in Europe or LGPD in Brazil.',
    items: [
      {
        title: 'Dados pessoais|Personal data',
        explain: 'É qualquer informação que identifica uma pessoa. Marque tudo o que o site vai pedir ou guardar, mesmo num formulário simples.|It is any information that identifies a person. Tick everything the site will ask for or store, even in a simple form.',
        example: 'Formulário de contato com nome, email e telefone: marque “Nome”, “Email” e “Telefone”.|A contact form with name, email and phone: tick “Name”, “Email” and “Phone”.',
      },
      {
        title: 'Privacidade e consentimento|Privacy and consent',
        explain: 'Aparece quando há coleta de dados pessoais. Cookie banner é o aviso “este site usa cookies”. Política de privacidade é a página que explica o que você faz com os dados. LGPD e GDPR são as leis brasileira e europeia. Retenção é por quanto tempo os dados ficam guardados.|Shown when personal data is collected. A cookie banner is the “this site uses cookies” notice. A privacy policy is the page that explains what you do with the data. LGPD and GDPR are the Brazilian and European laws. Retention is how long data is kept.',
        example: 'Ao clicar em “Aceitar” no aviso de cookies, a pessoa autoriza o uso dos dados dela.|By clicking “Accept” on the cookie notice, the person allows the use of their data.',
      },
    ],
  },

  analytics: {
    intro: 'Analytics é como um “contador de visitas” avançado: mostra quantas pessoas entram, de onde vêm e o que fazem no site.|Analytics is like an advanced “visit counter”: it shows how many people arrive, where they come from and what they do on the site.',
    items: [
      {
        title: 'Acompanhar o comportamento|Tracking behaviour',
        explain: 'Serve para saber o que funciona e o que não funciona no site, com base em dados e não em palpite.|It tells you what works and what does not on the site, based on data rather than guesses.',
        example: 'Você descobre que 70% das visitas vêm do celular e que muita gente sai na página de preços.|You find out that 70% of visits come from phones and many people leave on the pricing page.',
      },
      {
        title: 'Ferramentas|Tools',
        explain: 'Google Analytics é o mais conhecido e gratuito. Plausible e Matomo são mais simples e respeitam mais a privacidade. Search Console mostra como o Google enxerga seu site. Heatmaps são “mapas de calor” que mostram onde as pessoas clicam.|Google Analytics is the best known and free. Plausible and Matomo are simpler and more privacy-friendly. Search Console shows how Google sees your site. Heatmaps show where people click.',
        example: 'Sem certeza? Escolha “Não sei — recomende para mim”.|Not sure? Choose “Not sure — recommend for me”.',
      },
    ],
  },

  infra: {
    intro: 'Infraestrutura é o lugar onde o site fica guardado para que qualquer pessoa possa acessá-lo, 24 horas por dia.|Infrastructure is the place where the site is stored so anyone can reach it, 24 hours a day.',
    items: [
      {
        title: 'Hospedagem|Hosting',
        explain: 'É como alugar um terreno na internet onde o site “mora”. Você paga um plano a uma empresa que mantém o site no ar.|It is like renting a plot on the internet where the site “lives”. You pay a plan to a company that keeps the site online.',
        example: 'Um plano mensal em empresas como Hostinger, Vercel ou Locaweb. Nunca contratou nada? Responda “Não”.|A monthly plan with companies such as Hostinger, Vercel or Locaweb. Never signed up for one? Answer “No”.',
      },
      {
        title: 'Qual prioridade importa mais|Which priority matters most',
        explain: 'Escolha o que mais pesa na decisão: preço, velocidade, facilidade, capacidade de crescer, menor impacto ambiental ou controle total. “Escalabilidade” é aguentar cada vez mais visitas sem cair.|Choose what weighs most: price, speed, ease, room to grow, lower environmental impact or full control. “Scalability” means handling more and more visits without going down.',
        example: 'Negócio pequeno começando: menor custo ou simplicidade. Loja que vai crescer: escalabilidade.|Small business just starting: lowest cost or simplicity. A shop that will grow: scalability.',
      },
    ],
  },

  domain: {
    intro: 'Fecha o essencial: o endereço do site, quanto você pretende investir e quando quer lançar.|This wraps up the essentials: the site address, how much you plan to invest and when you want to launch.',
    items: [
      {
        title: 'Domínio|Domain',
        explain: 'É o endereço do seu site na internet, o que se digita no navegador. Ele é comprado e renovado por ano. Se ainda não tem, podemos ajudar a escolher um curto e fácil de lembrar.|It is your site’s address on the internet, what you type in the browser. It is bought and renewed yearly. If you do not have one yet, we can help pick a short, memorable one.',
        example: 'clinicaaurora.com.br|aurora-clinic.com',
      },
      {
        title: 'Faixa de orçamento|Budget range',
        explain: 'Uma ideia aproximada do quanto pretende investir. É opcional e serve para ajustar o tamanho do projeto, não para cobrar. Sem certeza? Escolha “Ainda não definido”.|A rough idea of how much you plan to invest. It is optional and helps size the project, not set a price. Not sure? Choose “Not defined yet”.',
        example: 'Quer só o essencial para começar? Um projeto mais enxuto se encaixa em uma faixa menor.|Want just the essentials to get started? A leaner project fits a lower range.',
      },
      {
        title: 'Prazo de lançamento|Launch timeline',
        explain: 'Quando você gostaria de ter o site no ar. Prazos curtos pedem um projeto mais enxuto.|When you would like the site to go live. Short timelines call for a leaner project.',
        example: 'Vai abrir a loja em dezembro? Diga o mês para calibrarmos o escopo.|Opening the shop in December? Tell us the month so we can calibrate the scope.',
      },
      {
        title: 'Quem mantém o site|Who maintains the site',
        explain: 'Depois do lançamento, alguém precisa cuidar do site: atualizar, corrigir e renovar. Diga quem será.|After launch, someone has to look after the site: updating, fixing and renewing. Say who it will be.',
        example: 'Manutenção é trocar um preço, corrigir um erro ou atualizar o sistema para ele continuar seguro.|Maintenance is changing a price, fixing a mistake or updating the system so it stays secure.',
      },
    ],
  },
}
