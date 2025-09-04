const API_KEY = import.meta.env.VITE_RIOT_API_KEY;

async function getUserData(region, gameName, tagLine) {
  const res = await fetch(
    `https://${region}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`,
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

export default getUserData;
