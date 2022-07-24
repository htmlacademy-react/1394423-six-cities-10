export type WelcomePageProps = {
  countAvailablePlace: number;
};

export type Card = {
  imageSrc: string;
  price: {
    value: number;
    contractTerm: string;
  };
  name: string;
  type: string;
};
