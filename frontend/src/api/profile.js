import getUserData from "./userData";
import getSummonerData from "./summonerData";
import getRankedData from "./rankedData";
import getChampionMastery from "./championMastery";
import getMatchHistory from "./matchHistory";
import getMatchData from "./matchData";

async function getDetails(gameName, tagLine, server) {
  const userData = await getUserData(server.value.region, gameName, tagLine);
  const summonerData = await getSummonerData(
    server.value.platform,
    userData.puuid
  );
  const rankedData = await getRankedData(server.value.platform, userData.puuid);
  const championMastery = await getChampionMastery(
    server.value.platform,
    userData.puuid
  );
  const matchHistory = await getMatchHistory(
    server.value.region,
    userData.puuid
  );
  const matchData = await getMatchData(server.value.region, matchId);
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
