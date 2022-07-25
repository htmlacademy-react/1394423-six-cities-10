import React from "react";
import {Link} from 'react-router-dom';
import {AppRoute} from '../../types/routes/routes';
import {PropsValueCard} from '../../types/properties/properties';

const FactoriesCard = ((props: PropsValueCard): JSX.Element => {
  const pathToLink = AppRoute.Offer.replace(':id', props.id.toString());

  const mark = props.mark ?
    (<div className='place-card__mark'>
      <span>{props.mark}</span>
    </div>) :
    null

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        {mark}
        <Link to={pathToLink}>
          <img
            className="place-card__image"
            src={props.imageSrc}
            width="150"
            height="110"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.price.value}</b>
            <span className="place-card__price-text">
              &#47;&nbsp;{props.price.contractTerm}
            </span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: "80%" }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={pathToLink}>{props.description}</Link>
        </h2>
        <p className="place-card__type">{props.type}</p>
      </div>
    </article>
  )}
);

export default React.memo(FactoriesCard);
