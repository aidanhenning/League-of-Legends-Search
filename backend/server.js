import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = 5000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// Riot userData API route
app.get("/api/user/:region/:gameName/:tagLine", async (req, res) => {
  const { region, gameName, tagLine } = req.params;

  if (!region || !gameName || !tagLine) {
    res.status(400).json({ error: "Missing parameters" });
  }

  try {
    const response = await axios.get(
      `https://${region}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`,
      {
        headers: {
          "X-Riot-Token": process.env.RIOT_API_KEY,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Riot API Error: ", error.message);
    res.status(500).json({ error: error.message });
  }
});

// Riot summonerData API route
app.get("/api/summoner/:platform/:puuid", async (req, res) => {
  const { platform, puuid } = req.params;

  if (!platform || !puuid) {
    res.status(400).json({ error: "Missing parameters" });
  }

  try {
    const response = await axios.get(
      `https://${platform}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`,
      {
        headers: {
          "X-Riot-Token": process.env.RIOT_API_KEY,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Riot API Error: ", error.message);
    res.status(500).json({ error: error.message });
  }
});

// Riot rankedData API route
app.get("/api/ranked/:platform/:puuid", async (req, res) => {
  const { platform, puuid } = req.params;

  if (!platform || !puuid) {
    res.status(400).json({ error: "Missing parameters" });
  }

  try {
    const response = await axios.get(
      `https://${platform}.api.riotgames.com/lol/league/v4/entries/by-puuid/${puuid}`,
      {
        headers: {
          "X-Riot-Token": process.env.RIOT_API_KEY,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Riot API Error: ", error.message);
    res.status(500).json({ error: error.message });
  }
});

// Riot championMastery API route
app.get("/api/mastery/:platform/:puuid", async (req, res) => {
  const { platform, puuid } = req.params;

  if (!platform || !puuid) {
    res.status(400).json({ error: "Missing parameters" });
  }

  try {
    const response = await axios.get(
      `https://${platform}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}`,
      {
        headers: {
          "X-Riot-Token": process.env.RIOT_API_KEY,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Riot API Error: ", error.message);
    res.status(500).json({ error: error.message });
  }
});

// Riot matchHistory API route
app.get("/api/matches/:region/:puuid", async (req, res) => {
  const { region, puuid } = req.params;

  if (!region || !puuid) {
    res.status(400).json({ error: "Missing parameters" });
  }

  try {
    const response = await axios.get(
      `https://${region}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?count=10`,
      {
        headers: {
          "X-Riot-Token": process.env.RIOT_API_KEY,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Riot API Error: ", error.message);
    res.status(500).json({ error: error.message });
  }
});

// Riot matchData API route
app.get("/api/match/:region/:matchId", async (req, res) => {
  const { region, matchId } = req.params;

  if (!region || !matchId) {
    res.status(400).json({ error: "Missing parameters" });
  }

  try {
    const response = await axios.get(
      `https://${region}.api.riotgames.com/lol/match/v5/matches/${matchId}`,
      {
        headers: {
          "X-Riot-Token": process.env.RIOT_API_KEY,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error("Riot API Error: ", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
