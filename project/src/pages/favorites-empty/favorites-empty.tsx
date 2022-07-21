import Header from '../../components/header/header';
import {Link} from 'react-router-dom';

function FavoritesEmpty(): JSX.Element {
  return (
    <div className='page page--favorites-empty'>
      <Header/>

      <main className='page__main page__main--favorites page__main--favorites-empty'>
        <div className='page__favorites-container container'>
          <section className='favorites favorites--empty'>
            <h1 className='visually-hidden'>Favorites (empty)</h1>
            <div className='favorites__status-wrapper'>
              <b className='favorites__status'>Nothing yet saved.</b>
              <p className='favorites__status-description'>
                Save properties to narrow down search or plan your future trips.
              </p>
            </div>
          </section>
        </div>
      </main>
      <footer className='footer'>
        <Link className='footer__logo-link' to="/">
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
}

export default FavoritesEmpty;
