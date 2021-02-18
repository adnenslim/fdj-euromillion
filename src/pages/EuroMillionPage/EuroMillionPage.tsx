import './euroMillionPage.scss';

import {
  ERROR,
  PENDING,
  SUCCESS,
  fetchCota,
} from 'behaviours/gameCotas/gameCotas.slice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BallsGrid from 'components/BallsGrid';
import Loading from 'components/Loading';
import Mise from 'components/Mise';
import StarsGrid from 'components/StarsGrid';

const EuroMillionApp = (): JSX.Element => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { loading } = useSelector<{ gameCotas: any }>(
    (state) => state.gameCotas
  );

  const a = 19
  console.log("🚀 ~ file: EuroMillionPage.tsx ~ line 26 ~ a", a)
  useEffect(() => {
    dispatch(fetchCota());
  }, []);
  return loading === SUCCESS ? (
    <div className="grid-wrapper">
      <div className="grid-top">
        <span>Grille 1</span>
        <Mise />
      </div>
      <div className="grid">
        <BallsGrid />
        <StarsGrid />
      </div>
    </div>
  ) : loading === PENDING ? (
    <div>
      <Loading />
    </div>
  ) : loading === ERROR ? (
    <h1>Error</h1>
  ) : (
    <></>
  );
};

export default EuroMillionApp;
