import { usePersistentState } from "../../hooks/usePersistentState";

function ControlledInput() {
  //import and deconstruct usePersistentState custom hook
  const [text, handleChange] = usePersistentState();

  return (
    <div>
      <h4>You can refresh, but I will remain!!</h4>
      <input
        type="text"
        //use handleChange deconstructed from our custom hook
        onChange={handleChange}
        value={text}
        placeholder="text in here..."
      />
    </div>
  );
}

export default ControlledInput;
