/* eslint-disable max-len */
import React, { useReducer } from 'react';

const initialVal = {
  before: [],
  current: '#FF0000',
  after: ['#00FF00']
};

const colorHistory = (state, action) => {
  switch (action.type) {
    case 'undoColor':
      return { after: [state.current, ...state.after], current: state.before[state.length - 1], before: state.before.slice(0, 1) };

  }
};

function App() {
  const [state, dispatch] = useReducer(colorHistory, initialVal);

  return (
    <>
      <button aria-label="undo-button" onClick={() => dispatch({ type: 'undo' })}>undo</button>
      <button aria-label="redo-button" onClick={() => dispatch({ type: 'redo' })}>redo</button>
    </>
  );
}

export default App;
