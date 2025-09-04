const API_KEY = import.meta.env.VITE_RIOT_API_KEY;

async function getSummonerData(platform, puuid) {
  const res = await fetch(
    `https://${platform}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`,
    {
      method: "GET",
      headers: { "X-Riot-Token": API_KEY },
    }
  );
  if (!res.ok) {
    throw new Error("error fetching data");
  }
  const data = await res.json();
  return data;
}

export default getSummonerData;
