import { useState } from "react";
import servers from "../data/server.js";

function SearchBar({ handleSearch }) {
  const [gameName, setGameName] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [serverId, setServerId] = useState(servers[0].id);

  function handleSubmit(e) {
    e.preventDefault();
    const server = servers.find((server) => server.id === serverId);

    handleSearch({ gameName, tagLine, server });
  }

  return (
    <div className="p-8 flex items-center justify-center">
      <img src="/src/assets/fire.png" alt="fire logo" className="size-8" />
      <search>
        <form
          onSubmit={handleSubmit}
          className="flex flex-row rounded-lg shadow-lg p-4"
        >
          <input
            value={gameName}
            type="text"
            placeholder="Enter Game Name"
            onChange={(e) => setGameName(e.target.value)}
          />
          <input
            value={tagLine}
            type="text"
            placeholder="Enter Tag Line"
            onChange={(e) => setTagLine(e.target.value)}
          />
          <select
            value={serverId}
            name="server"
            id="server"
            onChange={(e) => setServerId(Number(e.target.value))}
          >
            {servers.map((server) => (
              <option value={server.id} key={server.id}>
                {server.label}
              </option>
            ))}
          </select>
          <button type="submit">Search</button>
        </form>
      </search>
    </div>
  );
}

export default SearchBar;
