import {
  PropsCards,
  PropsValueCard,
} from '../../../types/properties/properties';
import CitiesCard from './cities-card';
import { useState } from 'react';

export const CityCards = (props: PropsCards): JSX.Element => {
  const [activeCard, setActiveCard] = useState({ cardID: -1 });
  const onMouseOver = (id: number) => {
    setActiveCard({ cardID: id });
  };

  return (
    <div className='cities__places-list places__list tabs__content'>
      {props.cards.map((card: PropsValueCard) => (
        <CitiesCard
          key={card.id}
          card={card}
          onCardMouseOver={onMouseOver}
          active={activeCard.cardID === card.id}
        />
      ))}
    </div>
  );
};
