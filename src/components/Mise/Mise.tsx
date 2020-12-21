import React from 'react';
import { useSelector } from 'react-redux';
import { selectMise } from 'behaviours/computeMise/computedMise.slice';

import './mise.scss';

const Mise = (): JSX.Element => {
  const mise = useSelector<{ computedMise: number }>(selectMise);
  return <span className="mise">Mise totale {mise} €</span>;
};

export default Mise;
