import {PropsReview, PropsReviewList} from '../../types/properties/properties';
import {Review} from './review';
import React from 'react';

export const ReviewList = (props: PropsReviewList): JSX.Element => (
  <ul className='reviews__list'>
    {props.reviews.map((review: PropsReview) => (
      <Review key={review.id} {...review} />
    ))}
  </ul>
);
