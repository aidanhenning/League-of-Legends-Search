import { DDRAGON_VERSION } from "../config/constants";

function MatchCard({ match, player }) {
  const win = player.win;
  const { gameMode, gameDuration, participants } = match.info;

  function formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  }

  function getSummonerSpellName(id) {
    const spellMap = {
      21: "SummonerBarrier",
      1: "SummonerBoost",
      14: "SummonerDot",
      3: "SummonerExhaust",
      4: "SummonerFlash",
      6: "SummonerHaste",
      7: "SummonerHeal",
      13: "SummonerMana",
      30: "SummonerPoroRecall",
      31: "SummonerPoroThrow",
      11: "SummonerSmite",
      39: "SummonerSnowURFSnowball_Mark",
      32: "SummonerSnowball",
      12: "SummonerTeleport",
    };
    return spellMap[id] || "SummonerFlash"; // fallback
  }

  const championIconUrl = `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/img/champion/${player.championName}.png`;
  const spell1Url = `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/img/spell/${getSummonerSpellName(
    player.summoner1Id
  )}.png`;
  const spell2Url = `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/img/spell/${getSummonerSpellName(
    player.summoner2Id
  )}.png`;

  const kda =
    player.deaths === 0
      ? "Perfect"
      : ((player.kills + player.assists) / player.deaths).toFixed(2);

  const items = [
    player.item0,
    player.item1,
    player.item2,
    player.item3,
    player.item4,
    player.item5,
  ];

  const blueTeam = participants.filter((p) => p.teamId === 100);
  const redTeam = participants.filter((p) => p.teamId === 200);

  return (
    <div
      className={`flex flex-row justify-between items-center gap-4 p-2 rounded-sm text-white ${
        win ? "bg-blue-500/20" : "bg-red-500/20"
      }`}
    >
      <div className="flex flex-col">
        <strong>
          <span className="text-sm">{gameMode}</span>
        </strong>
        <span className="text-sm text-gray-400">
          {formatDuration(gameDuration)}
        </span>
        <strong>
          <span className={`text-sm ${win ? "text-blue-600" : "text-red-500"}`}>
            {win ? "WIN" : "LOSS"}
          </span>
        </strong>
      </div>

      <div className="flex flex-row gap-1 items-center">
        <img
          src={championIconUrl}
          alt={player.championName}
          className="w-12 h-12 rounded"
        />
        <div className="flex flex-col gap-1">
          <img src={spell1Url} alt="Spell 1" className="w-5 h-5 rounded" />
          <img src={spell2Url} alt="Spell 2" className="w-5 h-5 rounded" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-sm">
        <strong>
          <span>
            {player.kills} /{" "}
            <span className="text-red-500">{player.deaths}</span> /{" "}
            {player.assists}
          </span>
        </strong>
        <span className="text-gray-300">{kda} KDA</span>
        <span className="text-gray-400">{player.totalMinionsKilled} CS</span>
      </div>

      <div className="flex flex-row items-center gap-1">
        <div className="grid grid-cols-3 gap-1 items-center">
          {items.map((itemId, index) =>
            itemId !== 0 ? (
              <img
                key={index}
                src={`https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/img/item/${itemId}.png`}
                alt={`Item ${index}`}
                className="w-6 h-6 rounded"
              />
            ) : (
              <div key={index} className="w-6 h-6 rounded bg-gray-900/30"></div>
            )
          )}
        </div>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/img/item/${player.item6}.png`}
          alt="Extra Item"
          className="w-6 h-6 rounded"
        />
      </div>

      <div className="flex flex-row gap-1 text-sm">
        {/* Blue team */}
        <div className="flex flex-col">
          {blueTeam.map((p, idx) => (
            <div key={idx} className="flex flex-row items-center gap-1">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/img/champion/${p.championName}.png`}
                alt=""
                className="w-5 h-5 rounded-sm"
              />
              <span
                className={`text-xs truncate w-20 ${
                  p.puuid === player.puuid ? "font-bold" : ""
                }`}
              >
                {p.riotIdGameName || p.summonerName}
              </span>
            </div>
          ))}
        </div>
        {/* Red team */}
        <div className="flex flex-col">
          {redTeam.map((p, idx) => (
            <div key={idx} className="flex flex-row items-center gap-1">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/img/champion/${p.championName}.png`}
                alt=""
                className="w-5 h-5 rounded-sm"
              />
              <span
                className={`text-xs truncate w-20 ${
                  p.puuid === player.puuid ? "font-bold" : ""
                }`}
              >
                {p.riotIdGameName || p.summonerName}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MatchCard;
