import React from 'react';
import './loading.scss';

const Loading = (): JSX.Element => (
  <div className="lds-ripple">
    <div></div>
    <div></div>
  </div>
);

export default Loading;
