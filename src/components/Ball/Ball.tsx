import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  selectBallAction,
  deselectBallAction,
} from 'behaviours/computeMise/computedMise.slice';
import './ball.scss';

interface BallProps {
  numero: number;
  selected: boolean;
}

const Ball: FC<BallProps> = ({ numero, selected }: BallProps) => {
  const dispatch = useDispatch();

  const hundleSelectBall = useCallback(() => {
    if (selected) {
      dispatch(deselectBallAction(numero));
    } else {
      dispatch(selectBallAction(numero));
    }
  }, [selected, numero]);

  return (
    <button
      className={`bull ${selected ? 'selected-grid' : null}`}
      onClick={hundleSelectBall}
    >
      {numero}
    </button>
  );
};

export default React.memo(Ball);
