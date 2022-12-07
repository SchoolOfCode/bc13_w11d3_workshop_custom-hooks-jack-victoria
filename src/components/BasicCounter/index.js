import useDocumentTitle from "../../hooks/useDocumentTitle";

// importing custom basic counter hook
import { useBasicCounter } from "../../hooks/useCounter";

function BasicCounter() {
  // destructuring count 'state' and the increment and decrement functions produced by useBasicCounter so we can assign them to onClick later
  const [count, increment, decrement] = useBasicCounter();

  // uses the count from useBasicCounter (the order matters here! Must come BELOW where we pull out he count itself)
  useDocumentTitle(count);

  return (
    <div>
      <h4>Basic Counter</h4>

      {/* adding the + and - functions that we descructured from useBasicCounter */}
      <button onClick={decrement}>Less</button>

      {/* uses count pulled from custom hook */}
      <output>{count}</output>
      <button onClick={increment}>More</button>
    </div>
  );
}

export default BasicCounter;
