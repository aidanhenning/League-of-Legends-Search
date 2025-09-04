const API_KEY = import.meta.env.VITE_RIOT_API_KEY;

async function getChampionMastery(platform, puuid) {
  const res = await fetch(
    `https://${platform}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}`,
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

export default getChampionMastery;
