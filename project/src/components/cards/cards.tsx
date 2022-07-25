import {PropsValueCard, Toggle, PropsToggle} from '../../types/properties/properties';
import CardValue from '../card/cities-card';
import PlacesCard from '../card/places-card';
import FactoriesCard from '../card/factories-card';

export const Cards = ((props: PropsToggle): JSX.Element => {
  const {switched, cards} = props;

  switch (switched) {
    case Toggle.citiesCard:
      return (
        <div className="cities__places-list places__list tabs__content">
          {cards.map((value: PropsValueCard) => (
            <CardValue key={value.id} {...value} />
          ))}
        </div>
      );
    case Toggle.placeCard:
      return (
        <div className="near-places__list places__list">
          {cards.map((value: PropsValueCard) => (
            <PlacesCard key={value.id} {...value} />
          ))}
        </div>
      );
    case Toggle.factoriesCard:
      return (
        <div className='favorites__places'>
          {cards.map((value: PropsValueCard) => (
            <FactoriesCard key={value.id} {...value} />
          ))}
        </div>
      );
  }
});
