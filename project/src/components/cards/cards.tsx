import type { Card } from '../../types/properties/properties';
import CityCardMemo from '../card-value/card-value';
import { CITY_CARDS } from '../../store/constants/constants';

export const Cards = (): JSX.Element => (
  <div className='cities__places-list places__list tabs__content'>
    {CITY_CARDS.map((value: { id: number; card: Card }) => (
      <CityCardMemo key={value.id} {...value.card} />
    ))}
  </div>
);
