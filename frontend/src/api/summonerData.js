const API = import.meta.env.VITE_API_URL;

async function getSummonerData(platform, puuid) {
  const res = await fetch(API + `/api/summoner/${platform}/${puuid}`);
  if (!res.ok) {
    throw new Error("error fetching data");
  }
  const data = await res.json();
  return data;
}

export default getSummonerData;
