import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import type { WelcomePageProps } from '../../types/properties/properties';

const App = (props: WelcomePageProps): JSX.Element => (
  <main>
    <WelcomeScreen countAvailablePlace={props.countAvailablePlace} />
  </main>
);

export default App;
