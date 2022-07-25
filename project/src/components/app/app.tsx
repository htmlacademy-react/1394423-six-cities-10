import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import type { PropsWelcomePage } from '../../types/properties/properties';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import { AppRoute, AuthorizationStatus } from '../../types/routes/routes';
import PrivateRoute from '../private-route/private-route';

const App = (props: PropsWelcomePage): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.Root}
        element={
          <main>
            <WelcomeScreen countAvailablePlace={props.countAvailablePlace} cards={props.cards} />
          </main>
        }
      />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <Favorites cards={props.cards}/>
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Offer} element={<Property cards={props.cards}/>} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
