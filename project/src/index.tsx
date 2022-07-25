import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import type { PropsWelcomePage } from './types/properties/properties';
import {OFFERS} from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const welcomePageProps: PropsWelcomePage = {
  countAvailablePlace: 5,
  cards: OFFERS
};

root.render(
  <React.StrictMode>
    <App {...welcomePageProps}></App>
  </React.StrictMode>
);
