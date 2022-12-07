import useFetch from "../../hooks/useFetch";

function DadJoke() {
  const [fetchedData, error] = useFetch("https://icanhazdadjoke.com/");
  if (error) {
    console.log(error);
    return <p>Error!</p>;
  }

  return (
    <section>
      <h4>Dad Joke!</h4>
      <p>{fetchedData.joke}</p>
    </section>
  );
}

export default DadJoke;
