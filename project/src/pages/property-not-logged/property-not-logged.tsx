import Header from '../../components/header/header';
import { PropsProperty } from '../../types/properties/properties';
import CardDetail from '../../components/cards/card-detail/card-detail';
import { useParams } from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import { PlaceCardList } from '../../components/cards/place-cards/place-card-list';

const PropertyNotLogged = (props: PropsProperty): JSX.Element => {
  const params = useParams();
  let ID;
  if (params.id) {
    ID = parseInt(params.id, 10);
  }

  if (
    !ID ||
    ID > props.cardsDetail.length ||
    ID.toString() !== params.id ||
    !props.cardsDetail[ID]
  ) {
    return <NotFoundPage />;
  }
  const cardDetail = props.cardsDetail[ID];

  return (
    <div className='page'>
      <Header />
      <main className='page__main page__main--property'>
        <CardDetail {...cardDetail} userLogin={false} />
        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>
              Other places in the neighbourhood
            </h2>
            <PlaceCardList cards={props.cards} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default PropertyNotLogged;
