import { useState, useEffect } from "react";

function useFetch(apiUrl) {
  //   const [url, setUrl] = useState(apiUrl);
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
      } catch (err) {
        setError(err);
      }
    }
    fetchData();
  }, []);

  return [fetchedData, error];
}

export default useFetch;
