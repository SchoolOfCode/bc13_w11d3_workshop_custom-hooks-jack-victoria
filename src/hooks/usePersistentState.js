import { useState, useEffect } from "react";

function usePersistentState() {
  const [storedText, setStoredText] = useState(
    localStorage.getItem("text") || ""
  );

  useEffect(() => {
    localStorage.setItem("text", storedText);
  }, [storedText]);

  function changeStoredText(e) {
    setStoredText(e.target.value);
  }

  return [storedText, changeStoredText];
}

export default usePersistentState;
