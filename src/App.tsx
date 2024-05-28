import { useEffect, useReducer, useState } from "react";
import "./App.css";
import { getData } from "./services/fetchData";
import { useQuery } from "@tanstack/react-query";

function App() {
  // const [number, setNumber] = useState<number | null>(null);
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | undefined>(undefined);
  // const [key, forceRefetch] = useReducer((x) => x + 1, 0);

  // useEffect(() => {
  //   setIsLoading(true);
  //   getData()
  //     .then((num) => {
  //       setNumber(num);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, [key]);

  const query = useQuery({ queryKey: ["randomNumber"], queryFn: getData });

  return (
    <div>
      {query.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <h2>Random Number: {query.data} </h2>
      )}
      {!query.isLoading && query.isError && (
        <h3>Random Number: {`${query.error}`}</h3>
      )}

      <button onClick={() => query.refetch()} disabled={query.isLoading}>
        {query.isLoading ? "..." : "Generate new number"}
      </button>
    </div>
  );
}

export default App;
