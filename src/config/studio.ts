import { BusinessConfig, ServiceItem, GalleryItem, ReviewItem, DifferentialItem } from '../types';

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "Studio Maria Chamosa",
  tagline: "Cuidado, beleza e bem-estar em um só lugar.",
  segment: "Salão de beleza / Studio de beleza e estética",
  address: "Av. Atlântica, 2200 - Cavaleiros, Macaé - RJ, 27920-390",
  neighborhood: "Cavaleiros",
  city: "Macaé",
  state: "RJ",
  zipCode: "27920-390",
  whatsappNumber: "5522998181780",
  whatsappDisplay: "(22) 99818-1780",
  whatsappMessage: "Olá! Vim pelo site do Studio Maria Chamosa e gostaria de saber mais sobre os serviços e agendar um horário.",
  whatsappUrl: "https://wa.me/5522998181780?text=Ol%C3%A1%21%20Vim%20pelo%20site%20do%20Studio%20Maria%20Chamosa%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20e%20agendar%20um%20hor%C3%A1rio.",
  googleRating: 4.9,
  googleReviewsCount: 58,
  // Link oficial direto para a localização do Studio Maria Chamosa no Google Maps
  googleMapsUrl: "https://www.google.com/maps/place/Studio+Maria+Chamosa/@-22.4042893,-41.7985786,1053m/data=!3m1!1e3!4m15!1m8!3m7!1s0x96318e1beeaf7d:0xc335e6e72699e248!2sStudio+Maria+Chamosa!8m2!3d-22.4042893!4d-41.7960037!10e1!16s%2Fg%2F11x_51jtmx!3m5!1s0x96318e1beeaf7d:0xc335e6e72699e248!8m2!3d-22.4042893!4d-41.7960037!16s%2Fg%2F11x_51jtmx?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
  // Link oficial direto para visualização e avaliações do Studio Maria Chamosa no Google
  googleReviewsUrl: "https://www.google.com/maps/place/Studio+Maria+Chamosa/@-22.4042893,-41.7985786,1053m/data=!3m1!1e3!4m15!1m8!3m7!1s0x96318e1beeaf7d:0xc335e6e72699e248!2sStudio+Maria+Chamosa!8m2!3d-22.4042893!4d-41.7960037!10e1!16s%2Fg%2F11x_51jtmx!3m5!1s0x96318e1beeaf7d:0xc335e6e72699e248!8m2!3d-22.4042893!4d-41.7960037!16s%2Fg%2F11x_51jtmx?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D",
  // URL do Instagram mantida vazia para ser preenchida posteriormente sem inventar perfis
  instagramUrl: "",
  openingHoursNotice: "Agendamentos flexíveis de segunda a sábado. Consulte horários disponíveis diretamente pelo WhatsApp.",
};

export const SERVICES_DATA: ServiceItem[] = [
  // CABELO
  {
    id: "cabelo-corte",
    name: "Corte",
    category: "cabelo",
    description: "Cortes modernos, alinhamento de pontas, camadas e visagismo personalizado para valorizar seu rosto.",
    iconName: "Scissors",
    recommendedPhotoKey: "cabelo-01"
  },
  {
    id: "cabelo-escova",
    name: "Escova",
    category: "cabelo",
    description: "Finalização impecável com brilho espelhado, movimento leve e durabilidade para o seu dia a dia ou eventos.",
    iconName: "Wind",
    recommendedPhotoKey: "cabelo-02"
  },
  {
    id: "cabelo-progressiva",
    name: "Progressiva",
    category: "cabelo",
    description: "Alinhamento capilar térmico profissional para redução de volume, eliminação de frizz e brilho intenso.",
    iconName: "Flame",
    recommendedPhotoKey: "cabelo-01"
  },
  {
    id: "cabelo-mechas",
    name: "Mechas",
    category: "cabelo",
    description: "Técnicas de iluminação e loiros preservando a saúde e a integridade da fibra capilar.",
    iconName: "Sparkles",
    recommendedPhotoKey: "cabelo-01"
  },
  {
    id: "cabelo-coloracao",
    name: "Coloração",
    category: "cabelo",
    description: "Cobertura de fios brancos, retoque de raiz e transformação de cor com produtos de alta performance.",
    iconName: "Palette",
    recommendedPhotoKey: "cabelo-02"
  },
  {
    id: "cabelo-geral",
    name: "Serviços de Cabelo em Geral",
    category: "cabelo",
    description: "Cronograma de hidratação, nutrição, reconstrução e tratamentos especializados para todos os tipos de fios.",
    iconName: "Sparkle",
    recommendedPhotoKey: "cabelo-02"
  },
  // UNHAS
  {
    id: "unhas-manicure",
    name: "Manicure",
    category: "unhas",
    description: "Cutilagem cuidadosa, lixamento anatômico e esmaltação duradoura com materiais rigorosamente esterilizados.",
    iconName: "Hand",
    recommendedPhotoKey: "unhas-01"
  },
  {
    id: "unhas-pedicure",
    name: "Pedicure",
    category: "unhas",
    description: "Cuidado completo para os pés, remoção de asperezas, hidratação profunda e esmaltação impecável.",
    iconName: "Footprints",
    recommendedPhotoKey: "unhas-02"
  },
  {
    id: "unhas-nail-design",
    name: "Nail Design",
    category: "unhas",
    description: "Alongamentos elegantes, esmaltação em gel e decorações sofisticadas com acabamento natural.",
    iconName: "Gem",
    recommendedPhotoKey: "unhas-01"
  },
  // SOBRANCELHAS
  {
    id: "sobrancelhas-design",
    name: "Design de Sobrancelhas",
    category: "sobrancelhas",
    description: "Mapeamento geométrico facial para harmonizar o olhar, respeitando as proporções naturais do seu rosto.",
    iconName: "Eye",
    recommendedPhotoKey: "sobrancelhas-01"
  },
  // ESTÉTICA
  {
    id: "estetica-geral",
    name: "Serviços de Estética",
    category: "estetica",
    description: "Procedimentos estéticos dedicados ao realce da beleza natural, relaxamento e cuidados com a pele.",
    iconName: "HeartHandshake",
    recommendedPhotoKey: "estetica-01"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-cabelo-1",
    title: "Mechas & Coloração Iluminada",
    category: "cabelo",
    categoryLabel: "Cabelo",
    description: "Trabalho técnico com nuances luminosas e proteção da saúde dos fios.",
    defaultImagePath: "/images/cabelo-01.jpg",
    photoKey: "cabelo-01"
  },
  {
    id: "gal-cabelo-2",
    title: "Corte e Escova Modelada",
    category: "cabelo",
    categoryLabel: "Cabelo",
    description: "Alinhamento com caimento leve, movimento e brilho sedoso.",
    defaultImagePath: "/images/cabelo-02.jpg",
    photoKey: "cabelo-02"
  },
  {
    id: "gal-unhas-1",
    title: "Manicure & Nail Design",
    category: "unhas",
    categoryLabel: "Unhas",
    description: "Esmaltação de alta precisão e acabamento fino para mãos elegantes.",
    defaultImagePath: "/images/unhas-01.jpg",
    photoKey: "unhas-01"
  },
  {
    id: "gal-unhas-2",
    title: "Pedicure & Cuidado Completo",
    category: "unhas",
    categoryLabel: "Unhas",
    description: "Higiene, estética e cuidado suave para a saúde dos pés.",
    defaultImagePath: "/images/unhas-02.jpg",
    photoKey: "unhas-02"
  },
  {
    id: "gal-sobrancelhas-1",
    title: "Design de Sobrancelhas",
    category: "sobrancelhas",
    categoryLabel: "Sobrancelhas",
    description: "Alinhamento simétrico respeitando a expressão e o formato dos olhos.",
    defaultImagePath: "/images/sobrancelhas-01.jpg",
    photoKey: "sobrancelhas-01"
  },
  {
    id: "gal-estetica-1",
    title: "Procedimento Estético",
    category: "estetica",
    categoryLabel: "Estética",
    description: "Atendimento estético individualizado para realçar seu bem-estar e autoestima.",
    defaultImagePath: "/images/estetica-01.jpg",
    photoKey: "estetica-01"
  },
  {
    id: "gal-espaco-1",
    title: "Nosso Espaço em Cavaleiros",
    category: "espaco",
    categoryLabel: "Espaço",
    description: "Ambiente moderno, climatizado e acolhedor preparado para receber você com conforto.",
    defaultImagePath: "/images/espaco-01.jpg",
    photoKey: "espaco-01"
  }
];

export const DIFFERENTIALS_DATA: DifferentialItem[] = [
  {
    id: "dif-prof",
    title: "Atendimento Profissional",
    description: "Equipe dedicada e atenciosa, focada em ouvir seus desejos e entregar resultados impecáveis.",
    iconName: "Sparkles"
  },
  {
    id: "dif-amb",
    title: "Ambiente Acolhedor",
    description: "Um refúgio agradável e acolhedor para relaxar e viver um momento especial de autocuidado.",
    iconName: "Smile"
  },
  {
    id: "dif-esp",
    title: "Espaço Organizado",
    description: "Instalações limpas, rigorosamente higienizadas e estruturadas para o máximo conforto.",
    iconName: "ShieldCheck"
  },
  {
    id: "dif-serv",
    title: "Diversos Serviços em um Só Lugar",
    description: "Cabelo, unhas, sobrancelhas e estética reunidos com conveniência e excelência em Macaé.",
    iconName: "Layers"
  },
  {
    id: "dif-whats",
    title: "Facilidade para Agendamento",
    description: "Agende seu horário com rapidez e atendimento direto no WhatsApp com um único clique.",
    iconName: "MessageCircle"
  }
];

// Avaliações reais confirmadas fornecidas pelo cliente (sem nomes fictícios inventados)
export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    comment: "Fiz unha das mãos e amei o trabalho da Raissa, profissional muito competente!",
    rating: 5,
    authorLabel: "Cliente Google Avaliações",
    verified: true
  },
  {
    id: "rev-2",
    comment: "Pintei o cabelo e fiz pé e mão.",
    rating: 5,
    authorLabel: "Cliente Google Avaliações",
    verified: true
  }
];
