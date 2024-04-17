import axios from "axios";

const BASE_URL = "https://yt-api.p.rapidapi.com";

const getOptions = (apiKey) => {
  return {
    url: BASE_URL,
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
    },
  };
};

const apiKeys = [
  process.env.NEXT_PUBLIC_API_KEY_1,
  process.env.NEXT_PUBLIC_API_KEY_2,
  process.env.NEXT_PUBLIC_API_KEY_3,
]; // Filter out any undefined values

let currentApiKeyIndex = 0;

export const fetchFromAPI = async (url, retries = 3) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/${url}`,
      getOptions(apiKeys[currentApiKeyIndex])
    );
    return data;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        // Unauthorized error, maybe the API key is invalid, throw the error
        throw error;
      } else if (error.response.status === 429 && retries > 0) {
        // Rate limit exceeded, switch to the next API key
        currentApiKeyIndex = (currentApiKeyIndex + 1) % apiKeys.length;
        // Retry the request with the new API key, decrementing the retries
        return fetchFromAPI(url, retries - 1);
      }
    }
    throw error; // Throw other errors or if retries run out
  }
};
