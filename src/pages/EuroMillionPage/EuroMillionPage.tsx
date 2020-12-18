import React from 'react';
import BallsGrid from 'components/BallsGrid';
import Mise from 'components/Mise';
import StarsGrid from 'components/StarsGrid';
import './euroMillionPage.scss';

const EuroMillionApp = (): JSX.Element => {
  return (
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
  );
};

export default EuroMillionApp;
