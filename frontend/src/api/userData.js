const API = import.meta.env.VITE_API_URL;

async function getUserData(region, gameName, tagLine) {
  const res = await fetch(API + `/api/user/${region}/${gameName}/${tagLine}`);
  if (!res.ok) {
    throw new Error("error fetching data");
  }
  const data = await res.json();
  return data;
}

export default getUserData;
