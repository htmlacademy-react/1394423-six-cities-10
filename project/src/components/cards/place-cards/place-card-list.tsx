import {
  PropsCards,
  PropsValueCard,
} from '../../../types/properties/properties';
import PlaceCard from './place-card';

export const PlaceCardList = (props: PropsCards): JSX.Element => (
  <div className='near-places__list places__list'>
    {props.cards.map((card: PropsValueCard) => (
      <PlaceCard key={card.id} {...card} />
    ))}
  </div>
);
