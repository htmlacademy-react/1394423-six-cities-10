import type { Card } from '../../types/properties/properties';
import CityCardMemo from '../city-card/city-card-memo';
import { CITY_CARDS } from '../../store/constants/constants';

export const CityCards = (): JSX.Element => (
  <div className='cities__places-list places__list tabs__content'>
    {CITY_CARDS.map((value: { id: number; card: Card }) => (
      <CityCardMemo key={value.id} {...value.card} />
    ))}
  </div>
);
