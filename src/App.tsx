import { useEffect, useReducer, useState } from "react";
import "./App.css";
import { getData } from "./services/fetchData";

function App() {
  const [number, setNumber] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>(undefined);
  const [key, forceRefetch] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    setIsLoading(true);
    getData()
      .then((num) => {
        setNumber(num);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [key]);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        !error && (
          <div>
            <h4>Random Number: {number}</h4>
          </div>
        )
      )}
      {!isLoading && error && <h1>{error}</h1>}
      <button onClick={forceRefetch} disabled={isLoading}>
        {isLoading ? "..." : "Generate new number"}
      </button>
    </div>
  );
}

export default App;
