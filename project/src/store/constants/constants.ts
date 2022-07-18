import { Card } from '../../types/properties/properties';

export const CITY_CARDS: { id: number; card: Card }[] = [
  {
    id: 0,
    card: {
      imageSrc: 'markup/img/apartment-01.jpg',
      price: {
        value: 120,
        contractTerm: 'night',
      },
      name: 'Beautiful luxurious apartment at great location',
      type: 'Apartment',
    },
  },
  {
    id: 1,
    card: {
      imageSrc: 'markup/img/room.jpg',
      price: {
        value: 80,
        contractTerm: 'night',
      },
      name: 'Wood and stone place',
      type: 'Private room',
    },
  },
  {
    id: 2,
    card: {
      imageSrc: 'markup/img/apartment-02.jpg',
      price: {
        value: 132,
        contractTerm: 'night',
      },
      name: 'Canal View Prinsengracht',
      type: 'Apartment',
    },
  },
  {
    id: 3,
    card: {
      imageSrc: 'markup/img/apartment-03.jpg',
      price: {
        value: 180,
        contractTerm: 'night',
      },
      name: 'Nice, cozy, warm big bed apartment',
      type: 'Apartment',
    },
  },
  {
    id: 4,
    card: {
      imageSrc: 'markup/img/room.jpg',
      price: {
        value: 80,
        contractTerm: 'night',
      },
      name: 'Wood and stone place',
      type: 'Private room',
    },
  },
];
