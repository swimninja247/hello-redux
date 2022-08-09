import { createStore } from 'redux';
import rootReducer from './reducer';

let prelodadedState;
const persistedTodosString = localStorage.getItem('todos');

if (persistedTodosString) {
  prelodadedState = {
    todos: JSON.parse(persistedTodosString),
  };
}

const store = createStore(rootReducer, prelodadedState);

export default store;

