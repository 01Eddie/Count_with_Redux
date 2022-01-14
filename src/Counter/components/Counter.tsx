import { useAppDispatch, useAppSelector } from "../store";
import { decrementCounter, incrementCounter } from "../store/counter";
import { getCount } from "../store/counter/selectors";

const Counter = () => {
    const counter = useAppSelector(getCount)
    const dispatch = useAppDispatch()

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(incrementCounter())}>+</button>
      <button onClick={() => dispatch(decrementCounter())}>-</button>
    </div>
  );
};

export default Counter