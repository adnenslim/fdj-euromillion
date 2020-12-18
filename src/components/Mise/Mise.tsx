import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectMise } from 'behaviours/computeMise/computedMise.slice';

import './mise.scss';

interface MiseProps {}

const Mise: FC<MiseProps> = () => {
  const mise = useSelector<(state: { computedMise: any }) => void>(selectMise);
  return <span className="mise">Mise totale {mise} €</span>;
};

export default Mise;
