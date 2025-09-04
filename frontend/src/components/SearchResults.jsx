function SearchResults({ results }) {
  const { userData, summonerData } = results;

  return (
    <div className="p-8 flex items-center justify-center">
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/15.15.1/img/profileicon/${summonerData.profileIconId}.png`}
        alt="player icon"
      />
      <div>
        <span>{userData.gameName}</span>
        <span>#{userData.tagLine}</span>
      </div>
      <span>{summonerData.summonerLevel}</span>
    </div>
  );
}

export default SearchResults;
