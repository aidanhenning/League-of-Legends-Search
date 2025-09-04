import { useState } from "react";
import searchPlayer from "../api/search";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

function Search() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch({ gameName, tagLine, server }) {
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
    <div>
      <SearchBar handleSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {results && <SearchResults results={results} />}
    </div>
  );
}

export default Search;
