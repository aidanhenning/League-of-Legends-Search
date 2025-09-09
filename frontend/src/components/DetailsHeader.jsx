function DetailsHeader({ results }) {
  return (
    <div className="flex flex-row gap-3 pt-20 mb-5">
      <div className="flex flex-col items-center">
        <span className="relative top-[15px] max-w-1/2 py-0.5 px-1 border border-rose-400 rounded-lg bg-gray-800 text-white">
          {results.summonerData.summonerLevel}
        </span>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/15.15.1/img/profileicon/${results.summonerData.profileIconId}.png`}
          alt="player icon"
          className="max-w-[85px] rounded-lg border border-rose-400"
        />
      </div>
      <div className="flex flex-col justify-end gap-1">
        <div className="flex flex-row items-baseline gap-0.5">
          <span className="text-white text-4xl">
            {results.userData.gameName}
          </span>
          <span className="text-white text-4xl">
            #{results.userData.tagLine}
          </span>
        </div>
        <div>
          <button className="py-2 px-4 border-none rounded-md bg-rose-400 text-white">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsHeader;
