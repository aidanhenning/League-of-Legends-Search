import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import getDetails from "../../api/profile";
import servers from "../../data/server";
import Navbar from "../../components/Navbar";
import DetailsHeader from "../../components/DetailsHeader";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/Loading Dots Blue.json";
import MasteryList from "../../components/MasteryList";

function Mastery() {
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
    <div className="min-h-screen bg-gray-700">
      <Navbar />
      <div className="w-3/5 m-auto">
        {loading && <Lottie animationData={loadingAnimation} />}
        {error && <p className="text-red-500">{error}</p>}
        {results && (
          <>
            <DetailsHeader results={results} />
            <div className="flex flex-row w-full rounded-sm bg-gray-800">
              <NavLink
                to={`/lol/summoner/${serverId}/${gameName}/${tagLine}`}
                className="py-1.5 px-3 text-white hover:cursor-pointer hover:bg-gray-700"
              >
                Overview
              </NavLink>
              <NavLink
                to={`/lol/summoner/${serverId}/${gameName}/${tagLine}/champions`}
                className="py-1.5 px-3 text-white hover:cursor-pointer hover:bg-gray-700"
              >
                Champions
              </NavLink>
              <NavLink
                to={`/lol/summoner/${serverId}/${gameName}/${tagLine}/mastery`}
                className="py-1.5 px-3 text-white hover:cursor-pointer hover:bg-gray-700 border border-t-0 border-l-0 border-r-0 border-b-rose-400"
              >
                Mastery
              </NavLink>
            </div>
            <div className="py-4">
              <MasteryList masteryData={results.championMastery} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Mastery;
