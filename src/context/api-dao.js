import axios from "axios";

const getGamesType = async () => {
  const options = {
    method: "GET",
    url: "https://gamerpower.p.rapidapi.com/api/giveaways",
    params: { type: "game" },
    headers: {
      "x-rapidapi-key": "395095bc65msh0781275ca103113p1110cfjsned1b817d0c23",
      "x-rapidapi-host": "gamerpower.p.rapidapi.com",
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
    url: "https://gamerpower.p.rapidapi.com/api/giveaways",
    headers: {
      "x-rapidapi-key": "395095bc65msh0781275ca103113p1110cfjsned1b817d0c23",
      "x-rapidapi-host": "gamerpower.p.rapidapi.com",
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
    url: "https://gamerpower.p.rapidapi.com/api/giveaways",
    params: { platform: "pc" },
    headers: {
      "x-rapidapi-key": "395095bc65msh0781275ca103113p1110cfjsned1b817d0c23",
      "x-rapidapi-host": "gamerpower.p.rapidapi.com",
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
    url: "https://gamerpower.p.rapidapi.com/api/giveaway",
    params: id,
    headers: {
      "x-rapidapi-key": "395095bc65msh0781275ca103113p1110cfjsned1b817d0c23",
      "x-rapidapi-host": "gamerpower.p.rapidapi.com",
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
