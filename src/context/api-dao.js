import axios from "axios";

const getGamesType = async () => {
  const options = {
    method: "GET",
    url: process.env.REACT_APP_BASE_URL,
    params: { type: "game" },
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      "x-rapidapi-host": process.env.REACT_APP_API_HOST,
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};

const getAllGames = async () => {
  const options = {
    method: "GET",
    url: process.env.REACT_APP_BASE_URL,
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      "x-rapidapi-host": process.env.REACT_APP_API_HOST,
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};

const getGamesPlatform = async () => {
  const options = {
    method: "GET",
    url: process.env.REACT_APP_BASE_URL,
    params: { platform: "pc" },
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      "x-rapidapi-host": process.env.REACT_APP_API_HOST,
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};

const getGame = async (id) => {
  const options = {
    method: "GET",
    url: process.env.REACT_APP_BASE_URL,
    params: id,
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      "x-rapidapi-host": process.env.REACT_APP_API_HOST,
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};

export { getGamesType, getAllGames, getGamesPlatform, getGame };
