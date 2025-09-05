import { useState } from "react";
import searchPlayer from "../api/search";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/Loading Dots Blue.json";

function Search() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch({ gameName, tagLine, server }) {
    setResults(null);
    setLoading(true);
    setError(null);

    try {
      const data = await searchPlayer({ gameName, tagLine, server });
      setResults(data);
    } catch (error) {
      console.error(error);
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-2 w-2/5 m-auto pt-60">
      <div className="flex flex-row items-center justify-center gap-2 mb-2">
        <img src="/src/assets/fire.png" alt="fire logo" className="size-30" />
        <div className="flex flex-col gap-1">
          <h1 className="text-white text-4xl font-bold">
            League of Legends Player Search
          </h1>
          <div className="flex flex-row items-center gap-2">
            <img
              src="/src/assets/fistbump.svg"
              alt="riot fist bump"
              className="size-4"
            />
            <p className="text-white ">Riot Compliant</p>
          </div>
        </div>
      </div>
      <SearchBar handleSearch={handleSearch} />
      {loading && <Lottie animationData={loadingAnimation} />}
      {error && <p className="text-red-500">{error}</p>}
      {results && <SearchResults results={results} />}
    </div>
  );
}

export default Search;
