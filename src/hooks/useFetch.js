import { useState, useEffect } from "react";

// ## Task 3:
// 👉 Extract the common logic in the `PokemonViewer` and the `DadJoke` components into a custom hook called `useFetch`. Write your hook in `src/hooks/useFetch.js` and import it into each component.

export default function useFetch(url, key) {
  const [output, setOutput] = useState("");
  const [error, setError] = useState(null);

  // here WE are chaining to get around doing async/await. {joke} is destructured from the promise returned by the previous line of code

  useEffect(() => {
    fetch(`${url}/${id}`, {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((output) => setOutput(output))
      .catch((err) => setError(err));
  }, [url, key]);

  if (error) {
    return <p>Error!</p>;
  }

  return [output, error];
}
