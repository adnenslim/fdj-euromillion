import './loading.scss';

import React from 'react';

const Loading = (): JSX.Element => (
  <div className="lds-ripple">
    <div></div>
    <div></div>
  </div>
);

export default Loading;
