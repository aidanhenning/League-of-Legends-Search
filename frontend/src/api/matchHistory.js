const API = import.meta.env.VITE_API_URL;

async function getMatchHistory(region, puuid) {
  const res = await fetch(API + `/api/matches/${region}/${puuid}`);
  if (!res.ok) {
    throw new Error("error fetching data");
  }
  const data = await res.json();
  return data;
}

export default getMatchHistory;
