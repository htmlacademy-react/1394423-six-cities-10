import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../types/routes/routes';
import { PropsCards } from '../../types/properties/properties';
import { FavoriteCardList } from '../../components/cards/favorite-cards/favorite-card-list';

const Favorites = (props: PropsCards): JSX.Element => (
  <div className='page'>
    <Header />
    <main className='page__main page__main--favorites'>
      <div className='page__favorites-container container'>
        <section className='favorites'>
          <h1 className='favorites__title'>Saved listing</h1>
          <ul className='favorites__list'>
            <li className='favorites__locations-items'>
              <div className='favorites__locations locations locations--current'>
                <div className='locations__item'>
                  <a className='locations__item-link' href='#'>
                    <span>Amsterdam</span>
                  </a>
                </div>
              </div>
              <FavoriteCardList cards={props.cards} />
            </li>

            <li className='favorites__locations-items'>
              <div className='favorites__locations locations locations--current'>
                <div className='locations__item'>
                  <a className='locations__item-link' href='#'>
                    <span>Cologne</span>
                  </a>
                </div>
              </div>
              <FavoriteCardList cards={props.cards} />
            </li>
          </ul>
        </section>
      </div>
    </main>
    <footer className='footer container'>
      <Link className='header__logo-link' to={AppRoute.Root}>
        <img
          className='footer__logo'
          src='markup/img/logo.svg'
          alt='6 cities logo'
          width='64'
          height='33'
        />
      </Link>
    </footer>
  </div>
);

export default Favorites;
