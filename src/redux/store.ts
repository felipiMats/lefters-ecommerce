import { combineReducers, createStore } from 'redux';
import { cartReducer } from './reducer/reducer';

const rootReducer = combineReducers({
  cartReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;