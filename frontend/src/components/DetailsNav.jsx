import { NavLink } from "react-router-dom";

function DetailsNav({ serverId, gameName, tagLine }) {
  return (
    <div>
      <div>
        <NavLink to={`/lol/summoner/${serverId}/${gameName}/${tagLine}`}>
          Overview
        </NavLink>
        <NavLink
          to={`/lol/summoner/${serverId}/${gameName}/${tagLine}/champions`}
        >
          Champions
        </NavLink>
        <NavLink
          to={`/lol/summoner/${serverId}/${gameName}/${tagLine}/mastery`}
        >
          Mastery
        </NavLink>
      </div>
    </div>
  );
}

export default DetailsNav;
