function SearchResults({ results }) {
  const { userData, summonerData } = results;

  return (
    <div
      onClick={() =>
        navigate(`/lol/profile/${serverID}/${gameName}/${tagLine}`)
      }
      className="bg-gray-200 rounded-lg shadow-lg p-4 hover:cursor-pointer"
    >
      {userData && summonerData && (
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-4">
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/15.15.1/img/profileicon/${summonerData.profileIconId}.png`}
              alt="player icon"
              className="max-w-10 border-1 border-rose-400 rounded-md"
            />
            <div className="flex flex-row items-center gap-2">
              <span>
                <strong className="text-rose-400">{userData.gameName}</strong>
              </span>
              <span className="text-gray-500 text-sm">#{userData.tagLine}</span>
            </div>
          </div>
          <span className="px-2">Lvl {summonerData.summonerLevel}</span>
        </div>
      )}
    </div>
  );
}

export default SearchResults;
