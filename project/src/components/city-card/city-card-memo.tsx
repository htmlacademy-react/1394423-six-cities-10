import React from 'react';

const CityCards = (card: {
  imageSrc: string;
  price: {
    value: number;
    contractTerm: string;
  };
  name: string;
  type: string;
}): JSX.Element => (
  <article className='cities__card place-card'>
    <div className='cities__image-wrapper place-card__image-wrapper'>
      <a href='#'>
        <img
          className='place-card__image'
          src={card.imageSrc}
          width='260'
          height='200'
          alt='Place image'
        />
      </a>
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
        <a href='#'>{card.name}</a>
      </h2>
      <p className='place-card__type'>{card.type}</p>
    </div>
  </article>
);

const CityCardMemo = React.memo(CityCards);

export default CityCardMemo;
