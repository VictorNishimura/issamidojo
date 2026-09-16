/**
 * Conteúdo editável do site do Issami Dojo.
 * Altere aqui textos, horários e imagens sem tocar nos componentes.
 */

export interface GalleryItem {
  id: string;
  /** Substitua por uma foto real: import foto from "@/assets/foto.jpg" */
  src?: string;
  alt: string;
  category: "Treinos" | "Atletas" | "Dojo" | "Competições" | "Eventos";
  /** Proporção usada no grid editorial */
  span?: "tall" | "wide" | "normal";
}

export interface ScheduleEntry {
  day: string;
  time: string;
  group: string;
  ageRange: string;
}

export interface LeaderProfile {
  id: string;
  title: string;
  name: string;
  description: string;
  /** Substitua por uma foto real quando disponível */
  photo?: string;
}

export const site = {
  name: "ISSAMI DOJO",
  modality: "Karatê de Contato — Shinkyokushin",
  city: "Presidente Prudente — SP",
  address: {
    street: "Rua Dona Militânia, 319",
    city: "Presidente Prudente — SP",
    reference: "Próximo ao Parque do Povo",
    mapsQuery: "Rua Dona Militânia, 319 - Presidente Prudente - SP",
  },
  whatsapp: {
    display: "(18) 99656-8231",
    link: "https://wa.me/5518996568231",
  },
  instagram: {
    handle: "@issamidojo",
    link: "https://www.instagram.com/issamidojo/",
  },
} as const;

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "O Dojo", href: "#o-dojo" },
  { label: "Shinkyokushin", href: "#shinkyokushin" },
  { label: "Treinamentos", href: "#treinamentos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
] as const;

export const stats = [
  { value: "20+", label: "Anos de experiência no Japão" },
  { value: "SHINKYOKUSHIN", label: "Karatê de contato" },
  { value: "TODAS AS IDADES", label: "Do iniciante ao praticante experiente" },
];

export const pillars = [
  { index: "01", title: "DISCIPLINA" },
  { index: "02", title: "TÉCNICA" },
  { index: "03", title: "RESPEITO" },
  { index: "04", title: "RESISTÊNCIA" },
  { index: "05", title: "SUPERAÇÃO" },
];

export const trainingGroups = [
  {
    title: "CRIANÇAS",
    description: "Desenvolvimento de disciplina, coordenação, respeito e confiança.",
  },
  {
    title: "JOVENS",
    description: "Desenvolvimento físico, técnico e marcial.",
  },
  {
    title: "ADULTOS",
    description: "Condicionamento, técnica, disciplina e evolução pessoal.",
  },
  {
    title: "COMPETIDORES",
    description: "Treinamento voltado ao desenvolvimento técnico e preparação para competição.",
  },
];

export const leaders: LeaderProfile[] = [
  {
    id: "shihan",
    title: "SHIHAN",
    name: "Adilson Issami Nishimura",
    description:
      "À frente do Issami Dojo, conduz o treinamento de Karatê de Contato Shinkyokushin com uma trajetória construída em mais de 20 anos de experiência no Japão.",
  },
  {
    id: "sensei",
    title: "SENSEI",
    name: "Victor Ryu Nishimura",
    description:
      "Responsável pela condução dos treinos no Issami Dojo, acompanha praticantes de todas as idades no desenvolvimento técnico e marcial.",
  },
];

/** Horários ainda não definidos. Ao preencher esta lista, a seção passa a exibi-los. */
export const schedule: ScheduleEntry[] = [];

export const gallery: GalleryItem[] = [
  { id: "g1", alt: "Treino no Issami Dojo", category: "Treinos", span: "tall" },
  { id: "g2", alt: "Atleta do Issami Dojo", category: "Atletas" },
  { id: "g3", alt: "Espaço do Issami Dojo", category: "Dojo", span: "wide" },
  { id: "g4", alt: "Competição", category: "Competições" },
  { id: "g5", alt: "Evento do Issami Dojo", category: "Eventos" },
  { id: "g6", alt: "Treino coletivo", category: "Treinos", span: "tall" },
];
