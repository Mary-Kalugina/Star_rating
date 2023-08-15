import React from 'react';
import Stars from './components/Stars';

const App: React.FC = () => {
  const count: number = 3;

  return (
    <>
      {count >= 1 && <Stars count={count} />}
    </>
  );
}

export default App;
