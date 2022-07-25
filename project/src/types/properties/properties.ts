export type PropsWelcomePage = {
  countAvailablePlace: number;
  cards: PropsValueCard[];
};

export type PropsValueCard = {
  id: number;
  imageSrc: string;
  price: {
    value: number;
    contractTerm: string;
  };
  description: string;
  type: string;
  mark?: string;
  onCardMouseOver?: (id: number) => void;
};

export enum Toggle {
  placeCard,
  citiesCard,
  factoriesCard
}

export type PropsCards = {
  cards: PropsValueCard[];
}

export type PropsToggle = {
  switched: Toggle;
  cards: PropsValueCard[];
}
