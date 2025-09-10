import { DDRAGON_VERSION } from "../config/constants";

function RecentlyPlayedWith({ matches, playerPuuid }) {
  if (!matches?.length) return null;

  const seenPlayers = new Map();
  const version = "15.17.1"; // You can store this globally

  matches.forEach((match) => {
    const participants = match.info.participants;
    const player = participants.find((p) => p.puuid === playerPuuid);
    if (!player) return;

    const teammates = participants.filter(
      (p) => p.teamId === player.teamId && p.puuid !== playerPuuid
    );

    teammates.forEach((mate) => {
      if (!seenPlayers.has(mate.puuid)) {
        seenPlayers.set(mate.puuid, {
          name: mate.riotIdGameName || mate.summonerName,
          profileIcon: mate.profileIcon,
          gamesPlayed: 1,
        });
      } else {
        seenPlayers.get(mate.puuid).gamesPlayed++;
      }
    });
  });

  const playerList = Array.from(seenPlayers.values())
    .sort((a, b) => b.gamesPlayed - a.gamesPlayed)
    .slice(0, 10);

  return (
    <div className="flex flex-col gap-2 py-1.5 px-3 rounded-sm bg-gray-800 text-white">
      <span className="mb-1">Recently Played With</span>
      {playerList.length === 0 && (
        <span className="text-gray-400 text-sm">No recent teammates</span>
      )}
      {playerList.map((p, idx) => (
        <div key={idx} className="flex flex-row items-center gap-2 text-sm">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/img/profileicon/${p.profileIcon}.png`}
            alt={p.name}
            className="w-6 h-6 rounded-sm"
          />
          <span className="truncate w-28">{p.name}</span>
          <span className="text-gray-400">({p.gamesPlayed} games)</span>
        </div>
      ))}
    </div>
  );
}

export default RecentlyPlayedWith;
