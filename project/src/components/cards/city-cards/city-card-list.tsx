import {
  PropsCards,
  PropsValueCard,
} from '../../../types/properties/properties';
import { useState } from 'react';
import CityCard from './city-card';

export const CityCardList = (props: PropsCards): JSX.Element => {
  const [activeCard, setActiveCard] = useState({ cardID: -1 });
  const onMouseOver = (id: number) => {
    setActiveCard({ cardID: id });
  };

  return (
    <div className='cities__places-list places__list tabs__content'>
      {props.cards.map((card: PropsValueCard) => (
        <CityCard
          key={card.id}
          card={card}
          onCardMouseOver={onMouseOver}
          active={activeCard.cardID === card.id}
        />
      ))}
    </div>
  );
};
