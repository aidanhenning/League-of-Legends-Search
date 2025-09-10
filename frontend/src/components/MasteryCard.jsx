import { DDRAGON_VERSION } from "../config/constants";

function MasteryCard({ champion }) {
  const champIconUrl = `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/img/champion/${champion.championName}.png`;

  return (
    <div className="flex flex-col items-center">
      {/* champion icon */}
      {/* mastery level icon */}
      {/* champion level */}
      {/* champion name */}
      {/* champion points to next level */}
      {/* total mastery points */}
    </div>
  );
}

export default MasteryCard;
