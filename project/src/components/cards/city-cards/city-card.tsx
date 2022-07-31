import React from 'react';
import { PropsActiveCard } from '../../../types/properties/properties';
import { AppRoute } from '../../../types/routes/routes';
import { Link } from 'react-router-dom';

const CityCard = (props: PropsActiveCard): JSX.Element => {
  const { card, onCardMouseOver, active } = props;
  const pathToLink = AppRoute.Offer.replace(':id', card.id.toString());

  const onMouseOver = () => {
    onCardMouseOver(card.id);
  };

  return (
    <article className='cities__card place-card' onMouseOver={onMouseOver}>
      {
        active
        // временная заглушка
      }
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to={pathToLink}>
          <img
            className='place-card__image'
            src={card.imageSrc}
            width='260'
            height='200'
            alt='Place image'
          />
        </Link>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{card.price.value}</b>
            <span className='place-card__price-text'>
              &#47;&nbsp;{card.price.contractTerm}
            </span>
          </div>
          <button className='place-card__bookmark-button button' type='button'>
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark' />
            </svg>
            <span className='visually-hidden'>To bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: '80%' }} />
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={pathToLink}>{card.description}</Link>
        </h2>
        <p className='place-card__type'>{card.type}</p>
      </div>
    </article>
  );
};

export default React.memo(CityCard);
