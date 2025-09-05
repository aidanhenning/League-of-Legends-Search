import { useState } from "react";
import servers from "../data/server.js";
import { IoSearchSharp } from "react-icons/io5";

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
    <search className="bg-gray-200 rounded-lg shadow-lg p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-row items-center justify-between"
      >
        <input
          value={gameName}
          type="text"
          placeholder="Enter Game Name"
          onChange={(e) => setGameName(e.target.value)}
          className="focus:outline-none"
        />
        <input
          value={tagLine}
          type="text"
          placeholder="Enter Tag Line"
          onChange={(e) => setTagLine(e.target.value)}
          className="focus:outline-none"
        />
        <div className="flex flex-row gap-6">
          <select
            value={serverId}
            name="server"
            id="server"
            onChange={(e) => setServerId(Number(e.target.value))}
            className="focus:outline-none hover:cursor-pointer"
          >
            {servers.map((server) => (
              <option value={server.id} key={server.id} className="bg-gray-200">
                {server.label}
              </option>
            ))}
          </select>
          <button type="submit" className="px-2 hover:cursor-pointer">
            <IoSearchSharp />
          </button>
        </div>
      </form>
    </search>
  );
}

export default SearchBar;
