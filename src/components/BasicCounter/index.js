// import { useState } from "react";
import useCounter from "../../hooks/useCounter";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function BasicCounter() {
  // const [count, setCount] = useState(0);
  // function increment() {
  //   setCount((count) => count + 1);
  // }
  // function decrement() {
  //   setCount((count) => Math.max(0, count - 1));
  // }

  const [count, increment, decrement] = useCounter();

  useDocumentTitle(count);
  return (
    <div>
      <h4>Basic Counter</h4>
      <button onClick={decrement}>Less</button>
      <output>{count}</output>
      <button onClick={increment}>More</button>
    </div>
  );
}

export default BasicCounter;
