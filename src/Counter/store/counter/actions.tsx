import { CounterActionType, DecrementAction, IncrementAction } from ".";

export const incrementCounter = (): IncrementAction => ({
    type: CounterActionType.INCREMENT
});

export const decrementCounter = (): DecrementAction => ({
    type: CounterActionType.DECREMENT
});
