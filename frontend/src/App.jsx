import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Overview from "./pages/Details/Overview";
import Champions from "./pages/Details/Champions";
import Mastery from "./pages/Details/Mastery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/lol/summoner/:serverId/:gameName/:tagLine"
        element={<Overview />}
      />
      <Route
        path="/lol/summoner/:serverId/:gameName/:tagLine/Champions"
        element={<Champions />}
      />
      <Route
        path="/lol/summoner/:serverId/:gameName/:tagLine/Mastery"
        element={<Mastery />}
      />
    </Routes>
  );
}

export default App;
