import getUserData from "./userData";
import getSummonerData from "./summonerData";
import getRankedData from "./rankedData";
import getChampionMastery from "./championMastery";
import getMatchHistory from "./matchHistory";
import getMatchData from "./matchData";

async function getDetails({ gameName, tagLine, server }) {
  const region = server.value.region;
  const platform = server.value.platform;

  const userData = await getUserData(region, gameName, tagLine);
  const summonerData = await getSummonerData(platform, userData.puuid);
  const rankedData = await getRankedData(platform, userData.puuid);
  const championMastery = await getChampionMastery(platform, userData.puuid);
  const matchHistory = await getMatchHistory(region, userData.puuid);
  const matchData = await Promise.all(
    matchHistory.map((match) => getMatchData(region, match))
  );

  return {
    userData,
    summonerData,
    rankedData,
    championMastery,
    matchHistory,
    matchData,
  };
}

export default getDetails;
