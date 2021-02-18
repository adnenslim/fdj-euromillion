import './ballsGrid.scss';

import Ball from 'components/Ball';
import React from 'react';
import { State } from 'types';
import { range } from 'utils/range';
import { useSelector } from 'react-redux';

const BallsGrid = (): JSX.Element => {
  const selectedBalls = useSelector<{ computedMise: State }, number[]>(
    (state) => state.computedMise.selectedBalls
  );
  const balls = range(1, 50);
  return (
    <div className="ball-grid">
      {balls.map((numero) => (
        <Ball
          key={numero}
          numero={numero}
          selected={selectedBalls?.includes(numero)}
        />
      ))}
    </div>
  );
};

export default BallsGrid;
