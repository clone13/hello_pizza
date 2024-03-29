export const HEADER_LINKS = [
  {
    title: "Прямой эфир",
    link: "/live",
  },

  {
    title: "Франшиза",
    link: "/franchise",
  },

  {
    title: "О нас",
    link: "/about",
  },

  {
    title: "Контакты",
    link: "/contacts",
  },
  {},
];

export interface SectionNavigationLink {
  title: string;
  link: string;
}

export const SECTION_NAVIGATION_LINKS: SectionNavigationLink[] = [
  {
    title: "Пицца",
    link: "#pizzas",
  },
  {
    title: "Закуски",
    link: "#snacks",
  },
  {
    title: "Десерты",
    link: "#desserts",
  },
  {
    title: "Напитки",
    link: "#drinks",
  },
  {
    title: "Кофе",
    link: "#coffee",
  },
  {
    title: "Коктейли",
    link: "#cocktails",
  },
  {
    title: "Соусы",
    link: "#sauces",
  },
  {
    title: "Другие товары",
    link: "#other",
  },
  {
    title: "Акции",
    link: "/promo",
  },
];

export const OTP_CODE_LENGTH = 4;
