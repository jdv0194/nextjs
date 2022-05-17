import axios from "axios";

export async function loadUser() {
  // Call an external API endpoint to get user
  const res = await axios.get(
    "https://cm-sit.isaca.org/api/myisaca/jssheader?isacaId=467939",
    {
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent": "*",
      },
    }
  );

  return res.data;
}

export async function loadUserSummary() {
  // Call an external API endpoint to get user summary
  const res = await axios.get(
    "https://cm-sit.isaca.org/api/myisaca/jsssummary?isacaId=467939",
    {
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent": "*",
      },
    }
  );

  return res.data;
}
