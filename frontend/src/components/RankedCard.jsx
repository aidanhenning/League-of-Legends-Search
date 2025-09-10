function RankedCard({ label, data }) {
  return (
    <div className="flex flex-col py-1.5 px-3 rounded-sm bg-gray-800">
      <div className="flex flex-row justify-between mb-2">
        <span>{label}</span>
        <span>{data?.tier ? "" : "Unranked"}</span>
      </div>

      {data && (
        <div className="flex flex-row justify-between text-sm">
          {/* Ranked Icon */}
          <div className="flex flex-row gap-2">
            <img
              src={`https://static.bigbrain.gg/assets/lol/ranks/s13/${data.tier.toLowerCase()}.png`}
              alt={`${data.tier} ${data.rank}`}
              className="w-10 h-10"
            />
            <div className="flex flex-col gap-1">
              <span>
                <strong>{data.tier}</strong>
              </span>
              <span>{data.leaguePoints} LP</span>
            </div>
          </div>

          {/* Win/Loss Stats */}
          <div>
            <div className="flex flex-row gap-1">
              <span>{data.wins}W</span>
              <span>{data.losses}L</span>
            </div>
            <span>
              {Math.floor((data.wins / (data.wins + data.losses)) * 100)}%
              Winrate
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default RankedCard;
