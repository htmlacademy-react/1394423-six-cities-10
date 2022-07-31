import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import {AppRoute, AuthorizationStatus} from '../../types/routes/routes';
import PrivateRoute from '../private-route/private-route';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import {PropsMain} from '../../types/properties/properties';

const App = (props: PropsMain): JSX.Element => (
  <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route
        path={AppRoute.Root}
        element={
          <main>
            <WelcomeScreen
              countAvailablePlace={props.countAvailablePlace}
              cards={props.cards}
              city={props.city}
            />
          </main>
        }
      />
      <Route path={AppRoute.Login} element={<Login/>}/>
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <Favorites cards={props.cards}/>
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Offer}
        element={
          <Property
            cards={props.cards}
            cardsDetail={props.cardsDetail}
          />
        }
      />
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
  </BrowserRouter>
);

export default App;
