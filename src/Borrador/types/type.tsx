import { Action } from "redux";

export interface CounterState {
    value: number
}

export const initialState: CounterState = {
    value: 0
}

export interface State {
    count: CounterState
}

export enum CounterType {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT'
  }


export interface IncrementAction extends Action {
    type: CounterType.INCREMENT;
}

export interface DecrementAction extends Action {
    type: CounterType.DECREMENT;
}

export type CounterActions = IncrementAction | DecrementAction;
