import React, { FC } from 'react';
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

  const hundleSelectBall = () =>
    selected
      ? dispatch(deselectBallAction(numero))
      : dispatch(selectBallAction(numero));

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
