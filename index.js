import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

const NormalDiv = props => <div {...props} />

const App = () => {
  const [randomValue, setRandomValue] = React.useState(0);
  return (
    <React.Fragment>
      {new Array(50).fill(null).map((__, i) => (
        <NormalDiv key={i}>Hello World</NormalDiv>
      ))}
      <button onClick={() => setRandomValue(Math.random())}>Force Rerender</button>
    </React.Fragment>
  );
};

render(<App />, document.getElementById('root'));
