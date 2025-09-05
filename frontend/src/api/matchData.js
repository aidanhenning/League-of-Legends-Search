const API = import.meta.env.VITE_API_URL;

async function getMatchData(region, matchId) {
  const res = await fetch(API + `/api/match/${region}/${matchId}`);
  if (!res.ok) {
    throw new Error("error fetching data");
  }
  const data = await res.json();
  return data;
}

export default getMatchData;
