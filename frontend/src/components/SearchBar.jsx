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
    <search className="md:bg-gray-200 rounded-lg md:shadow-lg py-4 md:p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center justify-between gap-1"
      >
        <input
          value={gameName}
          type="text"
          placeholder="Enter Game Name"
          onChange={(e) => setGameName(e.target.value)}
          className="w-full p-1 bg-gray-200 rounded-sm md:rounded-none focus:outline-none"
        />
        <input
          value={tagLine}
          type="text"
          placeholder="Enter Tag Line"
          onChange={(e) => setTagLine(e.target.value)}
          className="w-full p-1 bg-gray-200 rounded-sm md:rounded-none focus:outline-none"
        />
        <div className="flex flex-col md:flex-row gap-1 md:gap-6 w-full">
          <select
            value={serverId}
            name="server"
            id="server"
            onChange={(e) => setServerId(Number(e.target.value))}
            className="p-1 bg-gray-200 rounded-sm md:rounded-none focus:outline-none hover:cursor-pointer"
          >
            {servers.map((server) => (
              <option value={server.id} key={server.id} className="bg-gray-200">
                {server.label}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="flex items-center justify-center rounded-sm md:rounded-none w-full !bg-gray-200 p-2 hover:cursor-pointer"
          >
            <IoSearchSharp />
          </button>
        </div>
      </form>
    </search>
  );
}

export default SearchBar;
