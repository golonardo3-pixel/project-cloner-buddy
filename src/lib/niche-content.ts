// Content templates per niche - HIGH CONVERSION WhatsApp-focused copy
// All texts dynamically generated with city and company name
import heroSalon from "@/assets/hero-salon.jpg";
import heroBarbershop from "@/assets/hero-barbershop.jpg";
import heroDental from "@/assets/hero-dental.jpg";
import heroRestaurant from "@/assets/hero-restaurant.jpg";
import heroGym from "@/assets/hero-gym.jpg";
import heroDefault from "@/assets/hero-default.jpg";
import heroAesthetics from "@/assets/hero-aesthetics.jpg";
import heroPhysiotherapy from "@/assets/hero-physiotherapy.jpg";
import heroPetshop from "@/assets/hero-petshop.jpg";
import heroMechanic from "@/assets/hero-mechanic.jpg";
import heroBatteries from "@/assets/hero-batteries.jpg";
import heroMarmitaria from "@/assets/hero-marmitaria.jpg";
import heroRealestate from "@/assets/hero-realestate.jpg";
import heroAccounting from "@/assets/hero-accounting.jpg";

export interface NicheContent {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  heroVideo?: string;
  aboutLabel: string;
  aboutHeading: string;
  aboutText: string;
  servicesLabel: string;
  servicesHeading: string;
  services: { title: string; desc: string }[];
  reviews: { name: string; text: string; rating: number }[];
  reviewCount: number;
  footerTagline: string;
  ctaText: string;
  whatsappMessage: string;
  nameSuffix?: string;
  galleryLabel: string;
  galleryHeading: string;
}

interface NicheTemplate {
  heroTitle: (city: string) => string;
  heroSubtitle: (city: string, company: string) => string;
  heroImage: string;
  heroVideo?: string;
  aboutLabel: string;
  aboutHeading: string;
  aboutText: (city: string, company: string) => string;
  servicesLabel: string;
  servicesHeading: string;
  services: { title: string; desc: string }[];
  reviews: { name: string; text: string; rating: number }[];
  reviewCount: number;
  footerTagline: (city: string) => string;
  ctaText: string;
  whatsappMessage: (company: string) => string;
  nameSuffix?: string;
  galleryLabel: string;
  galleryHeading: string;
}

const nicheTemplateMap: Record<string, NicheTemplate> = {
  "salão de beleza": {
    heroTitle: (city) => `Cabelo impecável\nhoje em ${city}`,
    heroSubtitle: (city, company) => `Precisa de um corte, coloração ou tratamento urgente? A ${company} atende com horário flexível em ${city} e região. Agende agora pelo WhatsApp.`,
    heroImage: heroSalon,
    aboutLabel: "Por que escolher a gente?",
    aboutHeading: "Resultado garantido\nou seu dinheiro de volta",
    aboutText: (city, company) => `A ${company} é o salão mais bem avaliado de ${city}. Atendimento rápido, sem espera e com profissionais experientes. Produtos de primeira linha e ambiente confortável. Mais de 100 clientes satisfeitas por mês em ${city} e região. Chame no WhatsApp e agende seu horário agora.`,
    servicesLabel: "O que fazemos",
    servicesHeading: "Agende hoje mesmo",
    services: [
      { title: "Corte e Escova", desc: "Corte moderno com escova inclusa. Saia do salão pronta. Agende pelo WhatsApp." },
      { title: "Coloração e Mechas", desc: "Mechas, luzes e coloração com produtos importados. Resultado natural e duradouro." },
      { title: "Tratamento Capilar", desc: "Hidratação profunda, reconstrução e cauterização. Cabelo recuperado na hora." },
      { title: "Maquiagem e Penteado", desc: "Produção completa para festas, casamentos e eventos. Vagas limitadas." },
    ],
    reviews: [
      { name: "Camila R.", text: "Agendei pelo WhatsApp e fui atendida na hora. Resultado incrível! Recomendo demais.", rating: 5 },
      { name: "Fernanda S.", text: "Melhor salão da região! Atendimento rápido e profissional. Voltarei sempre.", rating: 5 },
      { name: "Juliana M.", text: "Fiz mechas e amei. Preço justo e resultado perfeito. Super indico!", rating: 5 },
    ],
    reviewCount: 127,
    footerTagline: (city) => `O salão mais bem avaliado de ${city}. Agende agora!`,
    ctaText: "Chamar no WhatsApp agora",
    whatsappMessage: (company) => `Olá! Encontrei o site da ${company} e gostaria de agendar um horário. Pode me ajudar?`,
    nameSuffix: "Hair Studio",
    galleryLabel: "Veja nosso trabalho",
    galleryHeading: "Resultados reais",
  },
  "barbearia": {
    heroTitle: (city) => `Corte masculino\nsem espera em ${city}`,
    heroSubtitle: (city, company) => `Precisa cortar o cabelo ou fazer a barba hoje? A ${company} tem horário disponível agora em ${city}. Chame no WhatsApp.`,
    heroImage: heroBarbershop,
    aboutLabel: "Por que a gente?",
    aboutHeading: "Corte rápido, resultado\nque impressiona",
    aboutText: (city, company) => `A ${company} é a barbearia preferida dos homens de ${city}. Sem frescura, sem espera. Corte preciso, barba alinhada e atendimento direto ao ponto. Mais de 80 cortes por semana em ${city} e região. Agende pelo WhatsApp agora.`,
    servicesLabel: "Serviços",
    servicesHeading: "Escolha e agende",
    services: [
      { title: "Corte Masculino", desc: "Degradê, americano, social ou moderno. Acabamento perfeito em 30 minutos." },
      { title: "Barba Completa", desc: "Barba aparada, modelada e hidratada. Navalha e toalha quente." },
      { title: "Corte + Barba", desc: "Combo completo com desconto. O mais pedido da barbearia." },
      { title: "Pigmentação Capilar", desc: "Visual mais denso e jovem. Resultado imediato e natural." },
    ],
    reviews: [
      { name: "Ricardo L.", text: "Cortei e fiz a barba em 40 min. Melhor barbearia da região!", rating: 5 },
      { name: "Lucas M.", text: "Atendimento rápido e corte impecável. Virei cliente fiel.", rating: 5 },
      { name: "André P.", text: "Agendei pelo WhatsApp e fui atendido na hora. Recomendo!", rating: 5 },
    ],
    reviewCount: 89,
    footerTagline: (city) => `A barbearia mais rápida e bem avaliada de ${city}.`,
    ctaText: "Chamar no WhatsApp agora",
    whatsappMessage: (company) => `Olá! Encontrei o site da ${company} e quero agendar um corte. Tem horário disponível?`,
    nameSuffix: "Barber Shop",
    galleryLabel: "Nossos cortes",
    galleryHeading: "Veja o resultado",
  },
  "estética": {
    heroTitle: (city) => `Resultado visível\nna primeira sessão em ${city}`,
    heroSubtitle: (city, company) => `Quer harmonização, botox ou limpeza de pele? A ${company} tem agenda aberta hoje em ${city}. Chame no WhatsApp e garanta sua vaga.`,
    heroImage: heroAesthetics,
    aboutLabel: "Por que nos escolher?",
    aboutHeading: "Procedimentos seguros\ncom resultado real",
    aboutText: (city, company) => `A ${company} é referência em estética em ${city}. Profissionais certificados, equipamentos de ponta e protocolos comprovados. Mais de 70 clientes atendidas por mês. Agende sua avaliação gratuita pelo WhatsApp.`,
    servicesLabel: "Procedimentos",
    servicesHeading: "Agende sua avaliação",
    services: [
      { title: "Harmonização Facial", desc: "Preenchimento labial e mandibular. Resultado natural e imediato. Avaliação grátis." },
      { title: "Botox", desc: "Suavização de rugas em 15 minutos. Sem dor, sem parar suas atividades." },
      { title: "Limpeza de Pele", desc: "Pele renovada em uma sessão. Ideal para quem quer resultado rápido." },
      { title: "Microagulhamento", desc: "Rejuvenescimento e tratamento de manchas. Protocolo personalizado." },
    ],
    reviews: [
      { name: "Isabela F.", text: "Fiz harmonização e ficou perfeito! Atendimento impecável. Super recomendo.", rating: 5 },
      { name: "Renata C.", text: "Resultado natural, exatamente como eu queria. A melhor da região!", rating: 5 },
      { name: "Priscila D.", text: "Agendei pelo WhatsApp e fui atendida no mesmo dia. Amei!", rating: 5 },
    ],
    reviewCount: 78,
    footerTagline: (city) => `A clínica de estética mais bem avaliada de ${city}.`,
    ctaText: "Chamar no WhatsApp agora",
    whatsappMessage: (company) => `Olá! Encontrei o site da ${company} e gostaria de agendar uma avaliação. Pode me ajudar?`,
    nameSuffix: "Estética Avançada",
    galleryLabel: "Resultados",
    galleryHeading: "Antes e depois",
  },
  "clínica odontológica": {
    heroTitle: (city) => `Dentista disponível\nhoje em ${city}`,
    heroSubtitle: (city, company) => `Dor de dente, clareamento ou implante? A ${company} tem agenda aberta em ${city}. Chame no WhatsApp e resolva hoje.`,
    heroImage: heroDental,
    aboutLabel: "Por que nos escolher?",
    aboutHeading: "Tratamento rápido\ne sem dor",
    aboutText: (city, company) => `A ${company} é a clínica odontológica mais bem avaliada de ${city}. Equipamentos modernos, anestesia indolor e profissionais experientes. Mais de 200 pacientes satisfeitos. Agende pelo WhatsApp e resolva seu problema hoje.`,
    servicesLabel: "Tratamentos",
    servicesHeading: "Resolva hoje mesmo",
    services: [
      { title: "Clareamento Dental", desc: "Dentes brancos em uma sessão. Resultado imediato e duradouro. Agende agora." },
      { title: "Implante Dentário", desc: "Planejamento digital e cirurgia segura. Parcele em até 12x." },
      { title: "Aparelho e Alinhadores", desc: "Ortodontia convencional ou invisível. Avaliação gratuita." },
      { title: "Lentes de Contato Dental", desc: "Sorriso perfeito em poucas sessões. Transformação real." },
    ],
    reviews: [
      { name: "Mariana T.", text: "Clareamento incrível! Fui atendida no mesmo dia que chamei no WhatsApp.", rating: 5 },
      { name: "Carlos H.", text: "Fiz implante sem dor nenhuma. Equipe sensacional!", rating: 5 },
      { name: "Patrícia A.", text: "O melhor dentista que já fui. Atendimento rápido e resultado perfeito.", rating: 5 },
    ],
    reviewCount: 203,
    footerTagline: (city) => `O dentista mais bem avaliado de ${city}. Agende agora!`,
    ctaText: "Chamar no WhatsApp agora",
    whatsappMessage: (company) => `Olá! Encontrei o site da ${company} e gostaria de agendar uma consulta. Tem horário disponível?`,
    nameSuffix: "Odontologia",
    galleryLabel: "Nossa clínica",
    galleryHeading: "Estrutura moderna",
  },
  "fisioterapia": {
    heroTitle: (city) => `Alívio da dor\nhoje em ${city}`,
    heroSubtitle: (city, company) => `Sentindo dor nas costas, joelho ou ombro? A ${company} tem vaga hoje em ${city}. Chame no WhatsApp e comece seu tratamento.`,
    heroImage: heroPhysiotherapy,
    aboutLabel: "Por que nos escolher?",
    aboutHeading: "Recuperação rápida\ncom profissionais experientes",
    aboutText: (city, company) => `A ${company} em ${city} é especializada em alívio de dor e reabilitação. Sessões individuais com fisioterapeutas experientes. Mais de 60 pacientes atendidos por mês em ${city} e região. Agende pelo WhatsApp agora.`,
    servicesLabel: "Especialidades",
    servicesHeading: "Comece hoje seu tratamento",
    services: [
      { title: "Dor nas Costas e Coluna", desc: "Alívio imediato com técnicas manuais e exercícios direcionados." },
      { title: "Reabilitação Pós-Cirúrgica", desc: "Recupere seus movimentos com segurança e acompanhamento." },
      { title: "Pilates Clínico", desc: "Fortalecimento e correção postural. Turmas reduzidas." },
      { title: "Terapia Manual", desc: "Alívio de tensões e dores musculares em uma sessão." },
    ],
    reviews: [
      { name: "Roberto N.", text: "Estava travado de dor e saí da primeira sessão andando normal. Incrível!", rating: 5 },
      { name: "Sandra L.", text: "Atendimento rápido e profissional. Resolvi meu problema em poucas sessões.", rating: 5 },
      { name: "Marcos V.", text: "Melhor fisioterapeuta que já consultei. Recomendo de olhos fechados!", rating: 5 },
    ],
    reviewCount: 64,
    footerTagline: (city) => `Alívio de dor e reabilitação em ${city}. Agende agora!`,
    ctaText: "Chamar no WhatsApp agora",
    whatsappMessage: (company) => `Olá! Encontrei o site da ${company} e preciso agendar uma sessão de fisioterapia. Pode me ajudar?`,
    nameSuffix: "Fisioterapia",
    galleryLabel: "Nossa clínica",
    galleryHeading: "Estrutura completa",
  },
  "pet shop": {
    heroTitle: (city) => `Seu pet merece o melhor\ncuidado em ${city}`,
    heroSubtitle: (city, company) => `Precisa de banho, tosa ou consulta veterinária? A ${company} tem vaga hoje em ${city}. Agende pelo WhatsApp agora.`,
    heroImage: heroPetshop,
    aboutLabel: "Por que nos escolher?",
    aboutHeading: "Seu pet em boas mãos\nsem estresse",
    aboutText: (city, company) => `O ${company} é o pet shop mais bem avaliado de ${city}. Equipe carinhosa, produtos de qualidade e atendimento rápido. Seu pet vai amar! Mais de 100 pets atendidos por mês em ${city} e região. Chame no WhatsApp.`,
    servicesLabel: "Serviços",
    servicesHeading: "Agende para seu pet",
    services: [
      { title: "Banho e Tosa", desc: "Banho completo com produtos hipoalergênicos. Tosa na tesoura ou máquina. Agende hoje." },
      { title: "Veterinário", desc: "Consulta, vacinas e exames. Atendimento rápido sem fila." },
      { title: "Ração e Acessórios", desc: "As melhores marcas com preço justo. Entrega rápida." },
      { title: "Hotel Pet", desc: "Hospedagem segura enquanto você viaja. Vagas limitadas." },
    ],
    reviews: [
      { name: "Daniela P.", text: "Meu cachorro voltou lindo e cheiroso! Atendimento super carinhoso.", rating: 5 },
      { name: "Gustavo R.", text: "Agendei banho pelo WhatsApp e foi super prático. Melhor pet shop!", rating: 5 },
      { name: "Tatiana S.", text: "A veterinária é excelente. Meu gato foi muito bem cuidado.", rating: 5 },
    ],
    reviewCount: 112,
    footerTagline: (city) => `O pet shop preferido de ${city}. Agende agora!`,
    ctaText: "Chamar no WhatsApp agora",
    whatsappMessage: (company) => `Olá! Encontrei o site do ${company} e gostaria de agendar um banho para meu pet. Tem vaga?`,
    nameSuffix: "Pet Shop",
    galleryLabel: "Nosso espaço",
    galleryHeading: "Pets felizes",
  },
  "oficina mecânica": {
    heroTitle: (city) => `Problema no carro?\nResolvemos hoje em ${city}`,
    heroSubtitle: (city, company) => `Motor falhando, freio rangendo ou barulho estranho? A ${company} resolve rápido em ${city}. Chame no WhatsApp agora.`,
    heroImage: heroMechanic,
    aboutLabel: "Por que nos escolher?",
    aboutHeading: "Diagnóstico rápido\ne preço justo",
    aboutText: (city, company) => `A ${company} é a oficina mecânica de confiança em ${city}. Diagnóstico preciso, orçamento transparente e serviço rápido. Mais de 70 veículos atendidos por mês. Não fique na mão – chame no WhatsApp e resolva hoje em ${city} e região.`,
    servicesLabel: "Serviços",
    servicesHeading: "Traga seu carro hoje",
    services: [
      { title: "Diagnóstico Completo", desc: "Scanner automotivo e avaliação gratuita. Descubra o problema em minutos." },
      { title: "Motor e Câmbio", desc: "Reparo rápido com peças de qualidade e garantia de serviço." },
      { title: "Freios e Suspensão", desc: "Troca de pastilhas, amortecedores e alinhamento. Segurança total." },
      { title: "Revisão Preventiva", desc: "Revisão completa com preço fechado. Evite problemas maiores." },
    ],
    reviews: [
      { name: "Rodrigo A.", text: "Resolveram o problema do meu carro no mesmo dia. Oficina honesta!", rating: 5 },
      { name: "Paulo C.", text: "Orçamento justo e serviço rápido. A melhor mecânica da região.", rating: 5 },
      { name: "Marcelo F.", text: "Acharam um problema que 3 oficinas não viram. Competência pura!", rating: 5 },
    ],
    reviewCount: 76,
    footerTagline: (city) => `A oficina mecânica de confiança em ${city}. Chame agora!`,
    ctaText: "Chamar no WhatsApp agora",
    whatsappMessage: (company) => `Olá! Encontrei o site da ${company} e preciso de um orçamento para meu veículo. Pode me ajudar?`,
    nameSuffix: "Auto Center",
    galleryLabel: "Nossa oficina",
    galleryHeading: "Estrutura profissional",
  },
  "baterias": {
    heroTitle: (city) => `Bateria na porta\nda sua casa em ${city}`,
    heroSubtitle: (city, company) => `Carro não liga? A ${company} entrega e instala a bateria no local em até 40 minutos em ${city}. Socorro 24h. Chame agora.`,
    heroImage: heroBatteries,
    aboutLabel: "Por que nos escolher?",
    aboutHeading: "Entrega expressa\ncom instalação no local",
    aboutText: (city, company) => `A ${company} é a loja de baterias mais rápida de ${city}. Trabalhamos com Moura, Heliar, Zetta e ACDelco. Entrega e instalação em até 40 minutos, 24 horas por dia. Garantia de fábrica e o melhor preço da região. Chame no WhatsApp e resolva agora em ${city} e região.`,
    servicesLabel: "Serviços",
    servicesHeading: "Resolva agora",
    services: [
      { title: "Bateria para Carros", desc: "Todas as marcas e modelos. Entrega e instalação grátis. Garantia de fábrica." },
      { title: "Bateria para Motos", desc: "Baterias específicas com instalação inclusa. Preço imbatível." },
      { title: "Socorro 24 Horas", desc: "Ficou na mão? Ligamos e entregamos a qualquer hora. Atendimento imediato." },
      { title: "Entrega em 40 Minutos", desc: "Entrega expressa na sua região. Não espere, chame agora no WhatsApp." },
    ],
    reviews: [
      { name: "João V.", text: "Carro parou na rua e em 30 minutos já estava com bateria nova. Incrível!", rating: 5 },
      { name: "Eduardo M.", text: "Melhor preço e entrega mais rápida da região. Recomendo demais!", rating: 5 },
      { name: "Fábio L.", text: "Socorro 24h de verdade! Me atenderam às 23h e resolveram na hora.", rating: 5 },
    ],
    reviewCount: 58,
    footerTagline: (city) => `Baterias com entrega expressa em ${city}. Chame agora!`,
    ctaText: "Chamar no WhatsApp agora",
    whatsappMessage: (company) => `Olá! Preciso de uma bateria urgente. Vi o site da ${company}. Qual o preço e prazo de entrega?`,
    nameSuffix: "Baterias",
    galleryLabel: "Nossa loja",
    galleryHeading: "Estoque completo",
  },
  "restaurante": {
    heroTitle: (city) => `Fome? Peça agora\ne receba rápido em ${city}`,
    heroSubtitle: (city, company) => `O ${company} serve os melhores pratos de ${city}. Delivery rápido ou reserve sua mesa pelo WhatsApp. Peça agora!`,
    heroImage: heroRestaurant,
    aboutLabel: "Por que nos escolher?",
    aboutHeading: "Comida fresca,\nentrega rápida",
    aboutText: (city, company) => `O ${company} é o restaurante mais bem avaliado de ${city}. Ingredientes frescos, pratos saborosos e atendimento impecável. Delivery rápido ou mesa reservada pelo WhatsApp. Mais de 150 avaliações positivas em ${city} e região.`,
    servicesLabel: "Cardápio",
    servicesHeading: "Peça pelo WhatsApp",
    services: [
      { title: "Pratos do Dia", desc: "Opções variadas que mudam diariamente. Sempre fresco, sempre saboroso." },
      { title: "Pratos Executivos", desc: "Almoço completo com preço fixo. Ideal para o dia a dia." },
      { title: "Porções e Petiscos", desc: "Perfeitos para compartilhar. Peça pelo WhatsApp." },
      { title: "Delivery Rápido", desc: "Entrega rápida com embalagem que mantém a qualidade. Peça agora pelo WhatsApp." },
    ],
    reviews: [
      { name: "Ana C.", text: "Comida maravilhosa e entrega super rápida! Melhor restaurante da região.", rating: 5 },
      { name: "Roberto F.", text: "Pedi pelo WhatsApp e chegou em 30 minutos. Tudo perfeito!", rating: 5 },
      { name: "Beatriz L.", text: "Preço justo e sabor incrível. Peço toda semana!", rating: 5 },
    ],
    reviewCount: 156,
    footerTagline: (city) => `O restaurante preferido de ${city}. Peça agora!`,
    ctaText: "Chamar no WhatsApp agora",
    whatsappMessage: (company) => `Olá! Encontrei o site do ${company} e gostaria de fazer um pedido. Qual o cardápio de hoje?`,
    galleryLabel: "Nossos pratos",
    galleryHeading: "Deu água na boca?",
  },
  "hamburgueria": {
    heroTitle: (city) => `O melhor hambúrguer\nde ${city} é aqui`,
    heroSubtitle: (city, company) => `Blend artesanal, pão fresquinho e entrega rápida. O ${company} entrega em ${city} e região. Peça agora pelo WhatsApp!`,
    heroImage: heroRestaurant,
    aboutLabel: "Por que somos os melhores?",
    aboutHeading: "Hambúrguer artesanal\nque vicia",
    aboutText: (city, company) => `O ${company} é a hamburgueria mais pedida de ${city}. Blend preparado diariamente, pão artesanal e ingredientes premium. Entrega rápida e embalagem que mantém tudo quente e crocante. Peça pelo WhatsApp agora.`,
    servicesLabel: "Cardápio",
    servicesHeading: "Monte seu pedido",
    services: [
      { title: "Smash Burgers", desc: "Crosta crocante e suculento por dentro. O mais pedido. Peça agora!" },
      { title: "Burgers Premium", desc: "Blend de costela e fraldinha com molhos especiais. Experiência única." },
      { title: "Combos com Desconto", desc: "Hambúrguer + batata + bebida. Melhor custo-benefício da região." },
      { title: "Delivery Express", desc: "Entrega rápida na sua região. Chega quente na sua casa." },
    ],
    reviews: [
      { name: "Thiago R.", text: "Melhor hambúrguer que já comi! Pedi pelo WhatsApp e chegou perfeito.", rating: 5 },
      { name: "Camila N.", text: "Combo incrível e preço justo. Peço toda semana!", rating: 5 },
      { name: "Diego S.", text: "Entrega rápida e hambúrguer quentinho. Virei fã!", rating: 5 },
    ],
    reviewCount: 134,
    footerTagline: (city) => `A hamburgueria preferida de ${city}. Peça agora!`,
    ctaText: "Chamar no WhatsApp agora",
    whatsappMessage: (company) => `Olá! Vi o site do ${company} e quero fazer um pedido. Qual o cardápio?`,
    galleryLabel: "Nossos burgers",
    galleryHeading: "Deu fome?",
  },
  "marmitaria": {
    heroTitle: (city) => `Marmita fresquinha\nentregue em ${city}`,
    heroSubtitle: (city, company) => `Sem tempo pra cozinhar? O ${company} entrega marmita caseira, saborosa e com porção generosa em ${city}. Peça pelo WhatsApp!`,
    heroImage: heroMarmitaria,
    aboutLabel: "Por que nos escolher?",
    aboutHeading: "Comida caseira\nsem sair de casa",
    aboutText: (city, company) => `O ${company} é a marmitaria mais pedida de ${city}. Comida feita no dia com ingredientes frescos e tempero caseiro. Porções generosas e entrega rápida. Peça pelo WhatsApp e receba no trabalho ou em casa em ${city} e região.`,
    servicesLabel: "Cardápio",
    servicesHeading: "Escolha sua marmita",
    services: [
      { title: "Marmita Tradicional", desc: "Arroz, feijão, salada, proteína e acompanhamento. A partir de R$ 15. Peça agora." },
      { title: "Marmita Fitness", desc: "Low carb, grelhados e salada reforçada. Sabor sem culpa." },
      { title: "Marmita Executiva", desc: "Porção reforçada com duas proteínas. Ideal pro almoço." },
      { title: "Entrega no Trabalho", desc: "Entrega pontual no horário do almoço. Peça pelo WhatsApp agora." },
    ],
    reviews: [
      { name: "Alessandra M.", text: "Peço todo dia e sempre chega quente e no horário. Comida caseira de verdade!", rating: 5 },
      { name: "Bruno T.", text: "Porção generosa e preço justo. Melhor marmita da região!", rating: 5 },
      { name: "Carla P.", text: "A marmita fitness é incrível. Sabor e praticidade!", rating: 5 },
    ],
    reviewCount: 87,
    footerTagline: (city) => `A marmitaria preferida de ${city}. Peça agora!`,
    ctaText: "Chamar no WhatsApp agora",
    whatsappMessage: (company) => `Olá! Vi o site do ${company} e quero fazer um pedido de marmita. Qual o cardápio de hoje?`,
    galleryLabel: "Nossos pratos",
    galleryHeading: "Feito na hora",
  },
  "academia": {
    heroTitle: (city) => `Comece a treinar\nhoje em ${city}`,
    heroSubtitle: (city, company) => `Quer mudar de corpo? A ${company} tem aula experimental grátis em ${city}. Chame no WhatsApp e comece hoje mesmo.`,
    heroImage: heroGym,
    aboutLabel: "Por que nos escolher?",
    aboutHeading: "Resultado rápido\ncom acompanhamento",
    aboutText: (city, company) => `A ${company} é a academia mais completa de ${city}. Equipamentos modernos, professores dedicados e ambiente motivador. Primeira aula grátis! Mais de 90 alunos satisfeitos. Chame no WhatsApp e garanta sua vaga em ${city} e região.`,
    servicesLabel: "Modalidades",
    servicesHeading: "Escolha seu treino",
    services: [
      { title: "Musculação", desc: "Equipamentos de ponta e personal incluso no plano. Resultado garantido." },
      { title: "Funcional", desc: "Aulas dinâmicas que queimam gordura e tonificam. Turmas reduzidas." },
      { title: "Spinning", desc: "Aulas energéticas que queimam até 800 calorias por sessão." },
      { title: "Aula Experimental Grátis", desc: "Venha conhecer sem compromisso. Chame no WhatsApp e agende." },
    ],
    reviews: [
      { name: "Diego S.", text: "Perdi 10kg em 3 meses! Os professores são incríveis. Recomendo!", rating: 5 },
      { name: "Larissa K.", text: "Melhor academia da região! Ambiente motivador e preço justo.", rating: 5 },
      { name: "Felipe G.", text: "Comecei pela aula grátis e nunca mais saí. Vale muito a pena!", rating: 5 },
    ],
    reviewCount: 94,
    footerTagline: (city) => `A academia mais completa de ${city}. Agende sua aula grátis!`,
    ctaText: "Chamar no WhatsApp agora",
    whatsappMessage: (company) => `Olá! Encontrei o site da ${company} e quero agendar uma aula experimental grátis. Como faço?`,
    galleryLabel: "Nossa estrutura",
    galleryHeading: "Equipamentos modernos",
  },
  "imobiliária": {
    heroTitle: (city) => `Seu imóvel ideal\nem ${city} está aqui`,
    heroSubtitle: (city, company) => `Procurando casa, apartamento ou sala comercial em ${city}? A ${company} tem opções exclusivas. Chame no WhatsApp e receba ofertas.`,
    heroImage: heroRealestate,
    aboutLabel: "Por que nos escolher?",
    aboutHeading: "Imóveis exclusivos\ncom atendimento rápido",
    aboutText: (city, company) => `A ${company} é a imobiliária que mais vende em ${city}. Conhecemos cada bairro e temos opções que não estão nos portais. Atendimento rápido pelo WhatsApp com fotos e informações completas. Mais de 140 negócios fechados em ${city} e região.`,
    servicesLabel: "Serviços",
    servicesHeading: "Como podemos ajudar",
    services: [
      { title: "Compra e Venda", desc: "Imóveis residenciais e comerciais com assessoria completa. Sem burocracia." },
      { title: "Locação", desc: "Aluguéis com contrato seguro e suporte do início ao fim." },
      { title: "Avaliação Gratuita", desc: "Quer vender seu imóvel? Avaliamos gratuitamente. Chame no WhatsApp." },
      { title: "Financiamento", desc: "Simulamos o financiamento ideal para você. Sem compromisso." },
    ],
    reviews: [
      { name: "Marina B.", text: "Encontrei o apartamento perfeito em 1 semana! Atendimento incrível.", rating: 5 },
      { name: "Carlos E.", text: "Processo rápido e sem dor de cabeça. A melhor imobiliária da região.", rating: 5 },
      { name: "Luciana R.", text: "Aluguei meu imóvel em 3 dias! Super competentes.", rating: 5 },
    ],
    reviewCount: 145,
    footerTagline: (city) => `A imobiliária que mais fecha negócios em ${city}. Fale conosco!`,
    ctaText: "Chamar no WhatsApp agora",
    whatsappMessage: (company) => `Olá! Encontrei o site da ${company} e tenho interesse em imóveis. Pode me mostrar opções?`,
    nameSuffix: "Imóveis",
    galleryLabel: "Imóveis disponíveis",
    galleryHeading: "Veja as opções",
  },
  "contabilidade": {
    heroTitle: (city) => `Abra sua empresa\nhoje em ${city}`,
    heroSubtitle: (city, company) => `Precisa abrir CNPJ, trocar de contador ou resolver pendências fiscais? A ${company} resolve rápido em ${city}. Chame no WhatsApp.`,
    heroImage: heroAccounting,
    aboutLabel: "Por que nos escolher?",
    aboutHeading: "Contabilidade sem\ncomplicação",
    aboutText: (city, company) => `A ${company} é o escritório contábil mais ágil de ${city}. Abertura de empresa em poucos dias, planejamento tributário que economiza dinheiro e atendimento direto pelo WhatsApp. Mais de 90 empresas confiam na ${company} em ${city} e região.`,
    servicesLabel: "Serviços",
    servicesHeading: "Resolva agora",
    services: [
      { title: "Abertura de Empresa", desc: "MEI, ME ou LTDA. CNPJ pronto em poucos dias. Sem burocracia." },
      { title: "Troca de Contador", desc: "Migração simples e sem custo extra. Atendimento imediato." },
      { title: "Folha de Pagamento", desc: "Departamento pessoal completo. Admissão, folha e rescisão." },
      { title: "Planejamento Tributário", desc: "Pague menos impostos legalmente. Economia real para seu negócio." },
    ],
    reviews: [
      { name: "Marcos R.", text: "Abriram minha empresa em 4 dias! Atendimento rápido pelo WhatsApp.", rating: 5 },
      { name: "Amanda S.", text: "Economizei R$ 800/mês com o planejamento tributário deles. Incrível!", rating: 5 },
      { name: "Pedro H.", text: "O melhor contador que já tive. Resolvem tudo rápido e sem enrolação.", rating: 5 },
    ],
    reviewCount: 92,
    footerTagline: (city) => `O escritório contábil mais ágil de ${city}. Fale conosco!`,
    ctaText: "Chamar no WhatsApp agora",
    whatsappMessage: (company) => `Olá! Encontrei o site da ${company} e preciso de ajuda com contabilidade. Pode me atender?`,
    nameSuffix: "Contabilidade",
    galleryLabel: "Nosso escritório",
    galleryHeading: "Ambiente profissional",
  },
};

// Default fallback template - also high conversion
const defaultTemplate: NicheTemplate = {
  heroTitle: (city) => `Atendimento rápido\nem ${city} e região`,
  heroSubtitle: (city, company) => `Precisa de ajuda? A ${company} resolve rápido em ${city}. Chame no WhatsApp agora e receba atendimento imediato.`,
  heroImage: heroDefault,
  aboutLabel: "Por que nos escolher?",
  aboutHeading: "Rápido, confiável\ne com garantia",
  aboutText: (city, company) => `A ${company} é referência em ${city}. Atendimento ágil, preço justo e qualidade comprovada por dezenas de clientes satisfeitos. Chame no WhatsApp e resolva hoje em ${city} e região.`,
  servicesLabel: "Serviços",
  servicesHeading: "O que oferecemos",
  services: [
    { title: "Atendimento Rápido", desc: "Sem espera. Chame no WhatsApp e seja atendido em minutos." },
    { title: "Preço Justo", desc: "Orçamento transparente e sem surpresas. Melhor custo-benefício." },
    { title: "Profissionais Experientes", desc: "Equipe qualificada com anos de experiência comprovada." },
    { title: "Garantia de Satisfação", desc: "Seu problema resolvido ou seu dinheiro de volta." },
  ],
  reviews: [],
  reviewCount: 0,
  footerTagline: (city) => `Atendimento rápido e confiável em ${city}. Chame agora!`,
  ctaText: "Chamar no WhatsApp agora",
  whatsappMessage: (company) => `Olá! Encontrei o site da ${company} e gostaria de mais informações. Pode me ajudar?`,
  galleryLabel: "Nosso espaço",
  galleryHeading: "Conheça nossa estrutura",
};

function findTemplate(niche: string): NicheTemplate {
  const key = niche.toLowerCase().trim();
  if (nicheTemplateMap[key]) return nicheTemplateMap[key];
  for (const [k, v] of Object.entries(nicheTemplateMap)) {
    if (key.includes(k) || k.includes(key)) return v;
  }
  return defaultTemplate;
}

export function getNicheContent(niche: string, city: string = "", companyName: string = ""): NicheContent {
  const template = findTemplate(niche);
  const cityName = city || "sua cidade";
  const company = companyName || "nosso estabelecimento";

  return {
    heroTitle: template.heroTitle(cityName),
    heroSubtitle: template.heroSubtitle(cityName, company),
    heroImage: template.heroImage,
    aboutLabel: template.aboutLabel,
    aboutHeading: template.aboutHeading,
    aboutText: template.aboutText(cityName, company),
    servicesLabel: template.servicesLabel,
    servicesHeading: template.servicesHeading,
    services: template.services,
    reviews: template.reviews,
    reviewCount: template.reviewCount,
    footerTagline: template.footerTagline(cityName),
    ctaText: template.ctaText,
    whatsappMessage: template.whatsappMessage(company),
    nameSuffix: template.nameSuffix,
    galleryLabel: template.galleryLabel,
    galleryHeading: template.galleryHeading,
  };
}

// Professional name transformation
const nicheNamePatterns: Record<string, (name: string) => string> = {
  "salão de beleza": (name) => `${name} Hair Studio`,
  "barbearia": (name) => `${name} Barber Shop`,
  "estética": (name) => `${name} Estética`,
  "clínica odontológica": (name) => `${name} Odontologia`,
  "fisioterapia": (name) => `${name} Fisioterapia`,
  "pet shop": (name) => `${name} Pet Shop`,
  "oficina mecânica": (name) => `${name} Auto Center`,
  "baterias": (name) => `${name} Baterias`,
  "imobiliária": (name) => `${name} Imóveis`,
  "contabilidade": (name) => `${name} Contabilidade`,
};

const professionalSuffixes = [
  "hair", "studio", "barber", "shop", "center", "auto", "pet",
  "clínica", "odonto", "estética", "fisio", "imóveis", "contabil",
  "baterias", "marmit", "burger", "grill", "fitness", "gym",
];

export function professionalizeName(rawName: string, niche: string): string {
  const name = rawName.trim();
  const lower = name.toLowerCase();

  if (professionalSuffixes.some((s) => lower.includes(s))) {
    return name;
  }

  const nicheKey = niche.toLowerCase().trim();

  for (const [k, transform] of Object.entries(nicheNamePatterns)) {
    if (nicheKey.includes(k) || k.includes(nicheKey)) {
      return transform(name);
    }
  }

  return name;
}

export const availableNiches = Object.keys(nicheTemplateMap);
