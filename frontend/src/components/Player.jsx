import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RankedDetails from "./RankedDetails";
import MasteryDetails from "./MasteryDetails";
import MatchDetails from "./MatchDetails";
import getDetails from "../api/profile";
import servers from "../data/server";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/Loading Dots Blue.json";

function Player() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let { serverId, gameName, tagLine } = useParams();

  useEffect(() => {
    setResults(null);
    setLoading(true);
    setError(null);

    async function fetchData() {
      try {
        const server = servers.find((server) => server.id === Number(serverId));
        const data = await getDetails({ gameName, tagLine, server });
        setResults({ ...data, server });
      } catch (error) {
        console.error(error);
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  console.log(results);

  return (
    <div className="flex flex-col gap-2 w-3/5 md:w-2/5 m-auto pt-30 md:pt-60">
      {loading && <Lottie animationData={loadingAnimation} />}
      {error && <p className="text-red-500">{error}</p>}
      {results && <RankedDetails results={results} />}
      {results && <MasteryDetails results={results} />}
      {results && <MatchDetails results={results} />}
    </div>
  );
}

export default Player;
