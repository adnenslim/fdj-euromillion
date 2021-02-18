import './star.scss';

import React, { FC } from 'react';
import {
  deselectStarAction,
  selectStarAction,
} from 'behaviours/computeMise/computedMise.slice';

import { useDispatch } from 'react-redux';

interface StarProps {
  numero: number;
  selected: boolean;
}

const Star: FC<StarProps> = ({ numero, selected }: StarProps) => {
  const dispatch = useDispatch();

  const hundleSelectStar = () =>
    selected
      ? dispatch(deselectStarAction(numero))
      : dispatch(selectStarAction(numero));

  return (
    <button
      className={`star ${selected ? 'selected' : null}`}
      onClick={hundleSelectStar}
    >
      <span>{numero}</span>
    </button>
  );
};

export default React.memo(Star);
