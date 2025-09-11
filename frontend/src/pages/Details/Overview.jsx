import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import getDetails from "../../api/profile";
import servers from "../../data/server";
import Navbar from "../../components/Navbar";
import DetailsHeader from "../../components/DetailsHeader";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/Loading Dots Blue.json";
import MatchCard from "../../components/MatchCard";
import RankedCard from "../../components/RankedCard";
import RecentlyPlayedWith from "../../components/RecentlyPlayedWith";

function Overview() {
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

  const soloDuo =
    results?.rankedData?.find((r) => r.queueType === "RANKED_SOLO_5x5") || null;
  const flex =
    results?.rankedData?.find((r) => r.queueType === "RANKED_FLEX_SR") || null;

  return (
    <div className="min-h-screen bg-gray-700">
      <Navbar />
      <div className="w-3/5 m-auto">
        {loading && <Lottie animationData={loadingAnimation} />}
        {error && <p className="text-red-500">{error}</p>}
        {results && (
          <>
            <DetailsHeader results={results} />
            <div className="flex flex-row w-full mb-2 rounded-sm bg-gray-800">
              <NavLink
                to={`/lol/summoner/${serverId}/${gameName}/${tagLine}`}
                className="py-1.5 px-3 text-white hover:cursor-pointer hover:bg-gray-700 border border-t-0 border-l-0 border-r-0 border-b-rose-400"
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
                className="py-1.5 px-3 text-white hover:cursor-pointer hover:bg-gray-700"
              >
                Mastery
              </NavLink>
            </div>

            <div>
              <div className="grid grid-cols-3 gap-2 pb-4 text-white">
                {/* Left*/}
                <div className="flex flex-col gap-2">
                  <RankedCard label="Ranked Solo/Duo" data={soloDuo} />
                  <RankedCard label="Ranked Flex" data={flex} />
                  <RecentlyPlayedWith
                    matches={results.matchData}
                    playerPuuid={results.userData.puuid}
                  />
                </div>
                {/* Right*/}
                <div className="flex flex-col gap-2 col-span-2 py-1.5 px-3 rounded-sm bg-gray-800">
                  <span>Recent Match History</span>
                  {results.matchData.map((match, idx) => {
                    const player = match.info.participants.find(
                      (p) => p.puuid === results.userData.puuid
                    );
                    if (!player) return null;
                    return (
                      <MatchCard key={idx} match={match} player={player} />
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Overview;
