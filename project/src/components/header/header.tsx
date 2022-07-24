import {Link} from 'react-router-dom';
import {AppRoute} from '../../types/routes/routes';

const Header = (): JSX.Element => (
  <header className='header'>
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
        <nav className='header__nav'>
          <ul className='header__nav-list'>
            <li className='header__nav-item user'>
              <Link className='header__nav-link header__nav-link--profile' to={AppRoute.Login}>
                <div className='header__avatar-wrapper user__avatar-wrapper'/>
                <span className='header__login'>Sign in</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
