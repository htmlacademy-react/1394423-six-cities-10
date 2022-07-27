import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../types/routes/routes';

function NotFoundPage(): JSX.Element {
  const css = `
    .page__main--index {
      padding-left: 300px;
      background-color: rgba(219, 182, 182, 0.6);
      -webkit-backdrop-filter: blur(3px);
      backdrop-filter: blur(3px);
      color: black;
    }
      `;
  return (
    <div className='page page--gray page--main'>
      <style>{css}</style>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Link className='header__logo-link' to={AppRoute.Root}>
              <img
                className='header__logo'
                src='markup/img/logo.svg'
                alt='6 cities logo'
                width='81'
                height='41'
              />
            </Link>
          </div>
        </div>
      </div>
      <main className='page__main page__main--index'>
        <div className='page-text'>
          <h1 className='page-text__title'>Error 404</h1>
          <h2 className='page-text__info'>Page not found</h2>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
