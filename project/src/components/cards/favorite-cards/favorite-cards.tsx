import {PropsCards, PropsValueCard,} from '../../../types/properties/properties';
import FavoriteCard from './factorite-card';

export const FavoriteCards = (props: PropsCards): JSX.Element => (
  <div className='favorites__places'>
    {props.cards.map((card: PropsValueCard) => (
      <FavoriteCard key={card.id} {...card} />
    ))}
  </div>
);

