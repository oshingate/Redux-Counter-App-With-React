import { createStore } from 'redux';

function reducer(state = { count: 0, step: 5 }, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };

    case 'decrement':
      return { ...state, count: state.count - state.step };

    case 'reset':
      return { count: 0, step: 5 };
    default:
      return state;
  }
}

let store = createStore(reducer);

export default store;
