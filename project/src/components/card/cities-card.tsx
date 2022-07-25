import React from 'react';
import {PropsValueCard} from '../../types/properties/properties';
import {AppRoute} from '../../types/routes/routes';
import {Link} from 'react-router-dom';

const CitiesCard = ((props: PropsValueCard): JSX.Element => {
  const pathToLink = AppRoute.Offer.replace(':id', props.id.toString());

  return (
    <article className="cities__card place-card">
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={pathToLink}>
          <img
            className="place-card__image"
            src={props.imageSrc}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.price.value}</b>
            <span className="place-card__price-text">
            &#47;&nbsp;{props.price.contractTerm}
          </span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={pathToLink}>{props.description}</Link>
        </h2>
        <p className="place-card__type">{props.type}</p>
      </div>
    </article>
  );
});

export default React.memo(CitiesCard);
