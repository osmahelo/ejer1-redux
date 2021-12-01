import { useSelector, useDispatch } from "react-redux";

const Counter = () =>{
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const show = useSelector((state) => state.show);

    const incrementHandler = () => {
        dispatch({ type: 'increment' });
      };
      const incrementFiveHandler = () => {
        dispatch({ type: 'increment', payload: 5});
      };
      const decrementHandler = () => {
        dispatch({ type: 'decrement' });
      };
      const toggleCounterHandler = () => {
        dispatch({ type: 'toggle' });
      };
      const ResetHandler = () => {
        dispatch({ type: 'reset' });
      };


    return (
        <main>
          <h3>Redux Counter</h3>
          {show && <div >{counter}</div>}
          <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
          </div>
          <div>
            <button onClick={incrementFiveHandler}>Increment 5</button>
          </div>
          <button onClick={toggleCounterHandler}>  Toggle  </button>
          <button onClick={ResetHandler}>Reset</button>
        </main>
      );
};

export default Counter;