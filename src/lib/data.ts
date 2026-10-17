export const BRAND = {
  name: "Gaia Tattoo, Piercing & Bar",
  short: "GAIA",
  whatsappDisplay: "+55 47 99979-6365",
  phoneDisplay: "(47) 3522-6052",
  phoneTel: "+554735226052",
  whatsappHero:
    "https://wa.me/5547999796365?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20ou%20agendamento%20no%20Gaia.",
  whatsappGeneral:
    "https://wa.me/5547999796365?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Gaia.",
  instagramHandle: "@gaiatattoorsl",
  instagram: "https://www.instagram.com/gaiatattoorsl",
  facebook: "https://www.facebook.com/gaiatattoorSL/",
  addressLine1: "R. Pres. Kennedy, 383",
  addressLine2: "Jardim América, Rio do Sul - SC, 89160-190",
  mapsRoute:
    "https://www.google.com/maps/dir/?api=1&destination=Gaia+Tattoo+Piercing+%26+Bar%2C+R.+Pres.+Kennedy%2C+383+-+Jardim+Am%C3%A9rica%2C+Rio+do+Sul+-+SC%2C+89160-190",
  mapsReviews:
    "https://www.google.com/maps/search/?api=1&query=Gaia+Tattoo+Piercing+%26+Bar+R.+Pres.+Kennedy+383+Rio+do+Sul",
  mapsEmbed:
    "https://www.google.com/maps?q=R.+Pres.+Kennedy,+383+-+Jardim+Am%C3%A9rica,+Rio+do+Sul+-+SC,+89160-190&output=embed",
} as const;

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Espaço", href: "#galeria" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
] as const;

export const EXPERIENCES = [
  { top: "TATTOO & PIERCING", bottom: "Profissional" },
  { top: "CERVEJA GELADA", bottom: "& Drinks" },
  { top: "BILHAR & KARAOKÊ", bottom: "Todas as noites" },
  { top: "PLAYLISTS & SHOWS", bottom: "Música ao vivo" },
] as const;

export const HOURS = [
  { day: "Terça a Sábado", time: "14:00 às 02:00", open: true },
  { day: "Domingo e Segunda", time: "Fechado", open: false },
] as const;

export type Review = { author: string; text: string };

/** Avaliações reais do Google Maps — destaque (textos mais longos). */
export const FEATURED_REVIEWS: Review[] = [
  {
    author: "James Aruda",
    text: "Aqui no gaia o ambiente é agradável, os atendentes são excelentes, toca muita música boa. Além de um estúdio completo de tatuagem e piercing. Combo completo...",
  },
  {
    author: "Thamires Kauane",
    text: "Gaia é um lugar incrível, com pessoas incríveis. É o bar criativo da cidade. Excelente para quem curte um ambiente alternativo.",
  },
  {
    author: "Santo Bendo",
    text: "Tive uma ótima experiência fiz 5 tatuagens e coloquei 10 piercings e vou fazer mais.",
  },
  {
    author: "Vitor Zimmermann",
    text: "O melhor bar de Rio do Sul. Não deixem de experimentar o shot de cachaça chamado 'Disco voador'.",
  },
  {
    author: "Kauê Lotin Ferreira",
    text: "Tio Gaia, sangue bom demais e um tatuador muy profissa! Ambiente aconchegante e alternativo.",
  },
  {
    author: "Julia Cristina",
    text: "Melhor bar da cidade! Ambiente descontraído, música boa e pessoas legais.",
  },
];

/** Avaliações reais do Google Maps — carrossel contínuo (textos curtos). */
export const SHORT_REVIEWS: Review[] = [
  { author: "Carlos Eduardo", text: "Ótimo lugar para tomar uma cervejinha e jogar uma sinuquinha com os amigos." },
  { author: "Luisa Schlemper", text: "Fiz 15 tatuagens, 20 piercings, nenhum deu problema, incrível." },
  { author: "Julia Mattos Siqueira", text: "Melhores shows da cidade." },
  { author: "Jhelyck Kauã", text: "Muito bom gostei bastante já fiz tatuagem e curti muito..." },
  { author: "Lúcio José Beirão", text: "Espaço incrível, música de qualidade." },
  { author: "João Pedro A de Paulo", text: "Ambiente muito agradável, cerveja gelada e boas conversas." },
  { author: "Dariane Noely", text: "Local bem descontraído com mesa de sinuca e público mais jovem." },
  { author: "Gessica Oliveira", text: "O melhor bar de Rio do Sul. Tem sinuca, boa música e ótimo atendimento." },
  { author: "Dinho Fernandes", text: "Melhor pico da city!!" },
  { author: "Paulo Ig", text: "Bar maneiro, só rolê daora." },
  { author: "Leonardo Silveira", text: "Melhor bar, tatuador de respeito." },
  { author: "Gabriel Dias", text: "Sempre me sinto em casa." },
  { author: "JC Rodrigues", text: "Foi minha segunda casa durante anos!" },
  { author: "Ana Laura Edener", text: "Fiz piercing e recomendo super." },
  { author: "Everton Borgonha", text: "Tomei uma breja dqle jeito." },
  { author: "ofban", text: "Muito bom, já fiz tatuagem e curti." },
  { author: "Vinicius Castilho", text: "Ambiente diferenciado, se curte um jogo de sinuca recomendo." },
  { author: "Luis Alfredo Polis", text: "Ótimo ambiente, música boa e super aconchegante..." },
];
