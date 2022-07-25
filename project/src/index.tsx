import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {OFFERS} from './mocks/offers';
import {OFFER_DETAIL} from './mocks/offer-detail';
import {PropsMain} from './types/properties/properties';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const welcomePageProps: PropsMain = {
  countAvailablePlace: 5,
  cards: OFFERS,
  cardsDetail: OFFER_DETAIL
};

root.render(
  <React.StrictMode>
    <App {...welcomePageProps}/>
  </React.StrictMode>
);
