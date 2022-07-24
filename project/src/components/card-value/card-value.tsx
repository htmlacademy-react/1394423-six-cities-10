import React from 'react';
import {Card} from '../../types/properties/properties';

const CardValue = (props: Card): JSX.Element => (
  <article className='cities__card place-card'>
    <div className='cities__image-wrapper place-card__image-wrapper'>
      <a href='#'>
        <img
          className='place-card__image'
          src={props.imageSrc}
          width='260'
          height='200'
          alt='Place image'
        />
      </a>
    </div>
    <div className='place-card__info'>
      <div className='place-card__price-wrapper'>
        <div className='place-card__price'>
          <b className='place-card__price-value'>&euro;{props.price.value}</b>
          <span className='place-card__price-text'>
            &#47;&nbsp;{props.price.contractTerm}
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
        <a href='#'>{props.name}</a>
      </h2>
      <p className='place-card__type'>{props.type}</p>
    </div>
  </article>
);

export default React.memo(CardValue);