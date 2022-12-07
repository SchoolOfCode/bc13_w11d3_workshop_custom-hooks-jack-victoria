import { useState, useEffect } from "react";

export function usePersistentState() {
  //below we set state text to either what's currently stored on the users local storage or blank by default
  const [text, setText] = useState(localStorage.getItem("text") || "");

  //Altering the local storage based on user input
  useEffect(() => {
    localStorage.setItem("text", text);
  }, [text]);

  //a simple handleChange function for the text input - changes text value based on what user has entered
  function handleChange(e) {
    setText(e.target.value);
  }

  return [text, handleChange];
}
