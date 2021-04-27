import axios from "axios";

// ----------- PC GAMES
const getPCGames = async () => {
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

// ----------- SWITCH GAMES
const getSwitchGames = async () => {
  const options = {
    method: "GET",
    url: process.env.REACT_APP_BASE_URL,
    params: { platform: "switch" },
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

// ----------- STEAM GAMES
const getSteamGames = async () => {
  const options = {
    method: "GET",
    url: process.env.REACT_APP_BASE_URL,
    params: { platform: "steam" },
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

// ----------- PS4 GAMES
const getPS4Games = async () => {
  const options = {
    method: "GET",
    url: process.env.REACT_APP_BASE_URL,
    params: { platform: "ps4" },
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

// ----------- XBOX GAMES
const getXBoxOneGames = async () => {
  const options = {
    method: "GET",
    url: process.env.REACT_APP_BASE_URL,
    params: { platform: "xbox-one" },
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

// ----------- IOS GAMES
const getIOSGames = async () => {
  const options = {
    method: "GET",
    url: process.env.REACT_APP_BASE_URL,
    params: { platform: "ios" },
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

// ----------- Android GAMES
const getAndroidGames = async () => {
  const options = {
    method: "GET",
    url: process.env.REACT_APP_BASE_URL,
    params: { platform: "android" },
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

export {
  getAndroidGames,
  getPCGames,
  getSteamGames,
  getPS4Games,
  getSwitchGames,
  getIOSGames,
  getXBoxOneGames,
};
