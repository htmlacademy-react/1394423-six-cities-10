import Header from '../../components/header/header';
import { useParams } from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import { PropsProperty } from '../../types/properties/properties';
import CardDetail from '../../components/cards/card-detail/card-detail';
import { PlaceCardList } from '../../components/cards/place-cards/place-card-list';

const Property = (props: PropsProperty): JSX.Element => {
  const { id } = useParams();

  const cardID = Number(id);
  if (
    (!cardID && cardID !== 0) ||
    cardID > props.cardsDetail.length ||
    !props.cardsDetail[cardID]
  ) {
    return <NotFoundPage />;
  }
  const cardDetail = props.cardsDetail[cardID];

  return (
    <div className='page'>
      <Header />
      <main className='page__main page__main--property'>
        <CardDetail {...cardDetail} userLogin />
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

export default Property;
