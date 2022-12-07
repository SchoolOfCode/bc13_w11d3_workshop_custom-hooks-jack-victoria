
import { useBasicCounter } from "../../hooks/useCounter";
import sheep from "./sheep.svg";

function SheepCounter() {
  // const [count, setCount] = useState(0);
  const [count, increment, decrement] = useBasicCounter()


  // PREVIOUS CODE
  // function increment() {
  //   setCount((count) => count + 1);
  // }
  // function decrement() {
  //   setCount((count) => Math.max(0, count - 1));
  // }

  return (
    <div>
      <h4>Sheep Counter</h4>
      <button onClick={decrement}>Less</button>
      <button onClick={increment}>More</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        
        {/* Here we're building an array that is COUNT items long, but empty */}
        {Array(count)
          .fill()
          // the underscore here is a stand-in for an unused parameter. it can be anything that's unused. It just has to be here so that we can access the index, which IS used in the sunsequent function. 
          .map((_, i) => {
            return (
              <img
                src={sheep}
                key={i}
                alt={`sheep number ${i + 1}`}
                style={{ width: "50px" }}
              />
            );
          })}
      </div>
    </div>
  );
}

export default SheepCounter;
