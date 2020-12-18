import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  selectStarAction,
  deselectStarAction,
} from 'behaviours/computeMise/computedMise.slice';
import './star.scss';

interface StarProps {
  numero: number;
  selected: boolean;
}

const Star: FC<StarProps> = ({ numero, selected }: StarProps) => {
  const dispatch = useDispatch();

  const hundleSelectStar = useCallback(() => {
    if (selected) {
      dispatch(deselectStarAction(numero));
    } else {
      dispatch(selectStarAction(numero));
    }
  }, [selected, numero]);

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
