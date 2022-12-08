import { useEffect, useState } from "react";

function DadJoke() {
  const [joke, setJoke] = useState("");
  const [error, setError] = useState(null);

  // here they are chaining to get around doing async/await. {joke} is destructured from the promise returned by the previous line of code
  
  useEffect(() => {
    fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then(({ joke }) => setJoke(joke))
      .catch((err) => setError(err));
  }, []);

  if (error) {
    return <p>Error!</p>;
  }

  return (
    <section>
      <h4>Dad Joke!</h4>
      <p>{joke}</p>
    </section>
  );
}

export default DadJoke;
