import { useEffect, useState } from "react";
import MasteryCard from "./MasteryCard";
import { DDRAGON_VERSION } from "../config/constants";

function MasteryList({ masteryData = [] }) {
  const [idToName, setIdToName] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchChampionList() {
      try {
        const res = await fetch(
          `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/data/en_US/champion.json`
        );
        if (!res.ok) throw new Error("Failed to fetch champion list");
        const json = await res.json();

        const map = {};
        Object.values(json.data).forEach((champ) => {
          map[Number(champ.key)] = champ.id;
        });

        if (!cancelled) setIdToName(map);
      } catch (err) {
        console.error(err);
        if (!cancelled) setIdToName({});
      }
    }

    fetchChampionList();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!masteryData || masteryData.length === 0) return null;
  if (!idToName) return null;

  const top = masteryData.slice(0, 20);

  return (
    <div className="flex flex-wrap justify-between gap-4 py-3 px-1 rounded-sm bg-gray-800">
      {top.map((m) => (
        <MasteryCard
          key={m.championId}
          champion={m}
          championName={idToName[m.championId]}
        />
      ))}
    </div>
  );
}

export default MasteryList;
