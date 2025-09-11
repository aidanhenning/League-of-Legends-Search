import { DDRAGON_VERSION } from "../config/constants";

function MasteryCard({ champion, championName }) {
  const champIconUrl = `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/img/champion/${championName}.png`;

  const masteryLevel = Math.min(champion.championLevel, 7);
  const masteryUrl = `https://opgg-static.akamaized.net/images/champion_mastery/renew_v2/mastery-${masteryLevel}.png?image=q_auto:good,f_webp,w_64`;

  return (
    <div className="flex flex-col items-center w-24">
      <div className="relative mb-18">
        <img
          src={champIconUrl}
          alt={championName}
          className="w-20 h-20 rounded-md"
        />
        <img
          src={masteryUrl}
          alt={`Mastery ${champion.championLevel}`}
          className="w-20 h-20 absolute top-16"
        />
        <span className="w-5 h-5 absolute left-1/2 -translate-x-1/2 top-32 text-sm text-center text-white bg-gray-700 rounded-full">
          {champion.championLevel}
        </span>
      </div>
      <span className="text-sm text-white font-bold">{championName}</span>
      <span className="text-sm text-amber-400">{champion.championPoints}</span>
    </div>
  );
}

export default MasteryCard;
