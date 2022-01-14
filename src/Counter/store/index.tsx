import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";

import counter from "./counter/reducers";
import { CounterState } from "./counter/types";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const reducer = combineReducers({
  counter
});

export interface RootAppState {
  counter: CounterState;
}

const configureStore = (initialState?: RootAppState) =>
createStore(reducer, initialState, applyMiddleware(logger));

const store = configureStore();

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
