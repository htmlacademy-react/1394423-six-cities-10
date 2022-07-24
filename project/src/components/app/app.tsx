import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import type { WelcomePageProps } from '../../types/properties/properties';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Property from '../../pages/property/property';
import { AppRoute, AuthorizationStatus } from '../../types/routes/routes';
import PrivateRoute from '../private-route/private-route';

const App = (props: WelcomePageProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.Root}
        element={
          <main>
            <WelcomeScreen countAvailablePlace={props.countAvailablePlace} />
          </main>
        }
      />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <Favorites />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Offer} element={<Property />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
