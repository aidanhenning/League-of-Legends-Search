import getUserData from "./userData";
import getSummonerData from "./summonerData.js";

async function searchPlayer({ gameName, tagLine, server }) {
  const region = server.value.region;
  const platform = server.value.platform;

  const userData = await getUserData(region, gameName, tagLine);
  const summonerData = await getSummonerData(platform, userData.puuid);
  return { userData, summonerData };
}

export default searchPlayer;
