import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { addValue, subValue, resetValue } from "./Redux/ConfigureSlice";
export default function App() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const decrement = () => {
    if (value <= 0) {
      alert("least value");
    } else {
      dispatch(subValue());
    }
  };
  const resetHandler = () => {
    if (value == 0) {
      alert("Already reset");
    } else {
      dispatch(resetValue());
    }
  };
  return (
    <div className="App">
      {value}
      <button onClick={() => dispatch(addValue())}> + </button>
      <button onClick={() => decrement()}> - </button>
      <button onClick={() => resetHandler()}> reset </button>
    </div>
  );
}
