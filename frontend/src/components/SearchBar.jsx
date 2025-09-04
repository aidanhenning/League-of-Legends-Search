import servers from "../data/server.js";

function SearchBar() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form has been submitted!");
  }
  return (
    <div className="p-8 flex items-center">
      <img src="/src/assets/fire.png" alt="fire logo" className="size-8" />
      <search className="absolute left-1/2 -translate-x-1/2">
        <form
          onSubmit={handleSubmit}
          className="flex flex-row rounded-lg shadow-lg p-4"
        >
          <input type="text" placeholder="Enter Game Name" />
          <input type="text" placeholder="Enter Tag Line" />
          <select name="server" id="server">
            <option value="NA">NA</option>
            <option value="EUW">EUW</option>
            <option value="KR">KR</option>
          </select>
          <button>Search</button>
        </form>
      </search>
    </div>
  );
}

export default SearchBar;
