import {Card} from '../../types/card/card';

function CityCard(props: {card: Card}): JSX.Element {
  return (
    <article className='cities__card place-card'>
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <a href='#'>
          <img className='place-card__image' src={props.card.imageSrc} width='260' height='200' alt='Place image'>
          </img>
        </a>
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{props.card.price.value}</b>
            <span className='place-card__price-text'>&#47;&nbsp;{props.card.price.contractTerm}</span>
          </div>
          <button className='place-card__bookmark-button button' type='button'>
            <svg className='place-card__bookmark-icon' width='18' height='19'>
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>To bookmarks</span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{width: '80%'}}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <a href='#'>{props.card.nameCard}</a>
        </h2>
        <p className='place-card__type'>{props.card.typeCard}</p>
      </div>
    </article>
  );
}

export default CityCard;
