import { useState, useEffect } from "react";

function useFetch(apiUrl) {
  const [fetchedData, setFetchedData] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(apiUrl, {
          headers: { Accept: "application/json" },
        });
        const data = await res.json();
        setFetchedData(data);
        console.log(data);
      } catch (err) {
        setError(err);
      }
    }
    fetchData();
  }, [apiUrl]);

  return [fetchedData, error];
}

export default useFetch;
