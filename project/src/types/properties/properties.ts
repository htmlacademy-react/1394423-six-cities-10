export type PropsWelcomePage = {
  countAvailablePlace: number;
  cards: PropsValueCard[];
};

export type PropsMain = {
  countAvailablePlace: number;
  cards: PropsValueCard[];
  cardsDetail: PropsDetailCard[];
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
};

export type PropsDetailCard = {
  id: number;
  imageSrc: {
    id: number;
    imageSrc: string;
  }[];
  name: string;
  bookmark: string;
  rating: string;
  features: {
    entire: string;
    bedrooms: string;
    adults: string;
  };
  price: {
    value: number;
    contractTerm: string;
  };
  inside: {
    title: string;
    item: {
      id: number;
      value: string;
    }[];
  };
  host: {
    title: string;
    imageSrc: string;
    name: string;
    status: string;
    description: {
      id: number;
      text: string;
    }[];
  };
  reviews: PropsReview[];
  mark?: string;
  userLogin?: boolean;
};

export type PropsReview = {
  id: number;
  imageSrc: string;
  name: string;
  text: string;
  time: string;
};

export type PropsReviewList = {
  reviews: PropsReview[];
};

export type PropsProperty = {
  cards: PropsValueCard[];
  cardsDetail: PropsDetailCard[];
};

export type PropsCards = {
  cards: PropsValueCard[];
};

export type PropsActiveCard = {
  card: PropsValueCard;
  onCardMouseOver: (id: number) => void;
  active: boolean;
};
