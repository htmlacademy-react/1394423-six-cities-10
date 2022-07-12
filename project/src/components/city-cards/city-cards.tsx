import { Card } from '../../types/card/card';
import CityCard from '../city-card/city-card';

function CityCards(): JSX.Element {
  return (
    <div className='cities__places-list places__list tabs__content'>
      {cityCards.map((cardValue: Card) => (
        <CityCard key={cardValue.nameCard} card={cardValue} />
      ))}
    </div>
  );
}

export default CityCards;

const cityCards: Card[] = [
  {
    imageSrc: 'markup/img/apartment-01.jpg',
    price: {
      value: 120,
      contractTerm: 'night',
    },
    nameCard: 'Beautiful luxurious apartment at great location',
    typeCard: 'Apartment',
  },
  {
    imageSrc: 'markup/img/room.jpg',
    price: {
      value: 80,
      contractTerm: 'night',
    },
    nameCard: 'Wood and stone place',
    typeCard: 'Private room',
  },
  {
    imageSrc: 'markup/img/apartment-02.jpg',
    price: {
      value: 132,
      contractTerm: 'night',
    },
    nameCard: 'Canal View Prinsengracht',
    typeCard: 'Apartment',
  },
  {
    imageSrc: 'markup/img/apartment-03.jpg',
    price: {
      value: 180,
      contractTerm: 'night',
    },
    nameCard: 'Nice, cozy, warm big bed apartment',
    typeCard: 'Apartment',
  },
  {
    imageSrc: 'markup/img/room.jpg',
    price: {
      value: 80,
      contractTerm: 'night',
    },
    nameCard: 'Wood and stone place',
    typeCard: 'Private room',
  },
];
