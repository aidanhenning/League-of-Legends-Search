const DATA_DRAGON_VERSION = "15.15.1";

function RankIcon({ tier, size = 48, className = "" }) {
  if (!tier) return null;

  const upperTier = tier.toUpperCase();

  const validTiers = [
    "IRON",
    "BRONZE",
    "SILVER",
    "GOLD",
    "PLATINUM",
    "EMERALD",
    "DIAMOND",
    "MASTER",
    "GRANDMASTER",
    "CHALLENGER",
  ];

  if (!validTiers.includes(upperTier)) return null;

  const src = `https://ddragon.leagueoflegends.com/cdn/${DATA_DRAGON_VERSION}/img/ranked-emblems/${upperTier}.png`;

  return (
    <img
      src={src}
      alt={`${upperTier} rank icon`}
      width={size}
      height={size}
      className={className}
    />
  );
}

export default RankIcon;
