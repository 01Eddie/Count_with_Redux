/* import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { CounterState } from "../../types/type";
import { decrementCounter, incrementCounter } from "../actions/actions";


interface CounterProps {
  readonly increment: () => void;
  readonly decrement: () => void;
  readonly count: number;
}

const Counter = ({ increment, decrement, count }: CounterProps) => {
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

const mapStateToProps = (state: CounterState) => ({
  count: state.value
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter); */
export const Count= "Borrador"