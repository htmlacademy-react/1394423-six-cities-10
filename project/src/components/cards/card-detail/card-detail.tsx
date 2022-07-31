import React from 'react';
import { PropsDetailCard } from '../../../types/properties/properties';
import { FormProperty } from '../../form/form-property';
import { ReviewList } from '../../review/review-list';

const CardDetail = (props: PropsDetailCard): JSX.Element => {
  const card = props;

  return (
    <section className='property'>
      <div className='property__gallery-container container'>
        <div className='property__gallery'>
          {card.imageSrc.map((value) => (
            <div key={value.id} className='property__image-wrapper'>
              <img
                className='property__image'
                src={value.imageSrc}
                alt='Photo studio'
              />
            </div>
          ))}
        </div>
      </div>
      <div className='property__container container'>
        <div className='property__wrapper'>
          {props.mark && (
            <div className='property__mark'>
              <span>{props.mark}</span>
            </div>
          )}
          <div className='property__name-wrapper'>
            <h1 className='property__name'>{card.name}</h1>
            <button className='property__bookmark-button button' type='button'>
              <svg className='property__bookmark-icon' width='31' height='33'>
                <use xlinkHref='#icon-bookmark'></use>
              </svg>
              <span className='visually-hidden'>{card.bookmark}</span>
            </button>
          </div>
          <div className='property__rating rating'>
            <div className='property__stars rating__stars'>
              <span style={{ width: '80%' }}></span>
              <span className='visually-hidden'>Rating</span>
            </div>
            <span className='property__rating-value rating__value'>
              {card.rating}
            </span>
          </div>
          <ul className='property__features'>
            <li className='property__feature property__feature--entire'>
              Apartment
            </li>
            <li className='property__feature property__feature--bedrooms'>
              3 Bedrooms
            </li>
            <li className='property__feature property__feature--adults'>
              Max 4 adults
            </li>
          </ul>
          <div className='property__price'>
            <b className='property__price-value'>&euro;{card.price.value}</b>
            <span className='property__price-text'>
              &nbsp;{card.price.contractTerm}
            </span>
          </div>
          <div className='property__inside'>
            <h2 className='property__inside-title'>{card.inside.title}</h2>

            <div className='property__inside-list'>
              {card.inside.item.map((item) => (
                <li key={item.id} className='property__inside-item'>
                  {item.value}
                </li>
              ))}
            </div>
          </div>
          <div className='property__host'>
            <h2 className='property__host-title'>{card.host.title}</h2>
            <div className='property__host-user user'>
              <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                <img
                  className='property__avatar user__avatar'
                  src={card.host.imageSrc}
                  width='74'
                  height='74'
                  alt='Host avatar'
                />
              </div>
              <span className='property__user-name'>{card.host.name}</span>
              <span className='property__user-status'>{card.host.status}</span>
            </div>
            <div className='property__description'>
              {card.host.description.map((item) => (
                <p key={item.id} className='property__text'>
                  {item.text}
                </p>
              ))}
            </div>
          </div>
          <section className='property__reviews reviews'>
            <h2 className='reviews__title'>
              Reviews &middot;{' '}
              <span className='reviews__amount'>{card.reviews.length}</span>
            </h2>
            <ReviewList reviews={card.reviews} />
          </section>
          {props?.userLogin && <FormProperty />}
        </div>
      </div>
      <section className='property__map map' />
    </section>
  );
};
export default React.memo(CardDetail);

