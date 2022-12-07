// import { useState, useEffect } from "react";
import usePersistentState from "../../hooks/usePersistentState";

function ControlledInput() {
  // const [text, setText] = useState(localStorage.getItem("text") || "");

  // useEffect(() => {
  //   localStorage.setItem("text", text);
  // }, [text]);

  // function handleChange(e) {
  //   setText(e.target.value);
  // }

  const [storedText, changeStoredText] = usePersistentState();

  return (
    <div>
      <h4>You can refresh, but I will remain!!</h4>
      <input
        type="text"
        // onChange={handleChange}
        // value={text}
        onChange={changeStoredText}
        value={storedText}
        placeholder="text in here..."
      />
    </div>
  );
}

export default ControlledInput;
