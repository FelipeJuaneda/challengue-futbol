import axios from "axios";

const API_URL = "https://apiv3.apifootball.com";
const API_KEY =
  "c8891fd444150dff370ef3aa5a67a8c750f5fb566d7ea61c0b6a0caa03365cfe";

const api = axios.create({
  baseURL: API_URL,
  params: {
    APIkey: API_KEY,
  },
});

export const fetchCountries = async (): Promise<any[]> => {
  try {
    const response = await api.get("/", {
      params: { action: "get_countries" },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
};

export const fetchLeagues = async (countryId: string): Promise<any[]> => {
  try {
    const response = await api.get("/", {
      params: { action: "get_leagues", country_id: countryId },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching leagues:", error);
    return [];
  }
};

export const fetchTeams = async (leagueId: string): Promise<any[]> => {
  try {
    const response = await api.get("/", {
      params: { action: "get_teams", league_id: leagueId },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching teams:", error);
    return [];
  }
};
