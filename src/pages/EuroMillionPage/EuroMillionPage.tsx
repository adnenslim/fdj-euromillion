import React, { useEffect } from 'react';
import BallsGrid from 'components/BallsGrid';
import Mise from 'components/Mise';
import StarsGrid from 'components/StarsGrid';
import './euroMillionPage.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCota,
  PENDING,
  SUCCESS,
  ERROR,
} from 'behaviours/gameCotas/gameCotas.slice';
import Loading from 'components/Loading';

const EuroMillionApp = (): JSX.Element => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { loading } = useSelector<{ gameCotas: any }>(
    (state) => state.gameCotas
  );
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
