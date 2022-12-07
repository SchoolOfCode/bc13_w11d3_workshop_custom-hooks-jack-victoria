import { useState } from "react";
import useFetch from "../../hooks/useFetch";

function PokemonViewer() {
  const [id, setId] = useState("");

  const [fetchedData, error] = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

  // useEffect(() => {
  //   if (id) {
  //     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
  //       headers: { Accept: "application/json" },
  //     })
  //       .then((res) => res.json())
  //       .then((poke) => setPokemon(poke))
  //       .catch((err) => setError(err));
  //   }
  // }, [id]);

  if (error) {
    console.log(error);
    return <p>Error!</p>;
  }

  return (
    <section>
      <h4>Pokemon</h4>
      <input type="number" onChange={(e) => setId(e.target.value)} value={id} />
      {fetchedData && <p>{fetchedData.name}</p>}
    </section>
  );
}

export default PokemonViewer;
