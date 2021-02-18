import './starsGrid.scss';

import { shallowEqual, useSelector } from 'react-redux';

import React from 'react';
import Star from 'components/Star';
import { State } from 'types';
import { range } from 'utils/range';

const StarsGrid = (): JSX.Element => {
  const selectedStars = useSelector<{ computedMise: State }, number[]>(
    (state) => state.computedMise.selectedStars,
    shallowEqual
  );

  const stars = range(1, 12);
  return (
    <div className="star-grid">
      {stars.map((star) => (
        <Star
          key={star}
          numero={star}
          selected={selectedStars?.includes(star)}
        />
      ))}
    </div>
  );
};

export default StarsGrid;
