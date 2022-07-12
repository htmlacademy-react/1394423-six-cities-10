import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import {WelcomePageProps} from '../../types/props/welcome-page';

function App(prop: WelcomePageProps): JSX.Element {
  return (
    <main>
      <WelcomeScreen countAvailablePlace={prop.countAvailablePlace}></WelcomeScreen>
    </main>
  );
}

export default App;
