
import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../types/routes/routes';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Root + AppRoute.Login} />
  );
}

export default PrivateRoute;
