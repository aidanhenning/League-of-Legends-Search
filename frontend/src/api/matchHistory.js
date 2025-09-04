const API_KEY = import.meta.env.VITE_RIOT_API_KEY;

async function getMatchHistory(region, puuid) {
  const res = await fetch(
    `https://${region}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?count=10`,
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

export default getMatchHistory;
