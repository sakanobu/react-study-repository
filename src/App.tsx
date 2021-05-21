import React, { FC } from 'react';
import DisplayCount from 'DisplayCount';
import CountButton from 'CountButton';

const App: FC = () => (
  // これだとコンポーネントが変化を検知できない
  // const count = 0;

  // const [count, setCount] = React.useState(0);

  <>
    <DisplayCount />
    <CountButton />
  </>
);

export default App;
