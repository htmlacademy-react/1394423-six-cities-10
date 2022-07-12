import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {WelcomePageProps} from './types/props/welcome-page';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const welcomePageProps: WelcomePageProps = {
  countAvailablePlace: 5
};

root.render(
  <React.StrictMode>
    <App countAvailablePlace={welcomePageProps.countAvailablePlace}></App>
  </React.StrictMode>,
);
