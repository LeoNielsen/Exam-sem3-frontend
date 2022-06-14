import URL from "./settings";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}

function apiFacade() {
  /* Insert utility-methods from a later step (d) here (REMEMBER to uncomment in the returned object when you do)*/
  const setToken = (token) => {
    localStorage.setItem('jwtToken', token)
  }
  const getToken = () => {
    return localStorage.getItem('jwtToken')
  }
  const loggedIn = () => {
    const loggedIn = getToken() != null;
    return loggedIn;
  }
  const logout = () => {
    localStorage.removeItem("jwtToken");
  }


  const login = (user, password) => {
    const options = makeOptions("POST", true, { username: user, password: password });
    return fetch(URL + "/api/login", options)
      .then(handleHttpErrors)
      .then(res => { setToken(res.token) })
  }

  const decodeToken = () => {
    const token = getToken()
    const decodeToken = token;
    const decode = jwtDecode(decodeToken)
    setToken(token);
    return decode
  }

  const fetchUserInfo = () => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + "/api/info/userinfo", options).then(handleHttpErrors);
  }

  const create = (username, password) => {
    const options = makeOptions("POST", true, { userName: username, userPass: password }); //True add's the token
    console.log(username + " " + password);
    return fetch(URL + "/api/info/newuser", options)
      .then(handleHttpErrors)
      .then(res => { setToken(res.token) })
  }

  const fetchAllDrivers = () => {
    const options = makeOptions("GET", false);
    return fetch(URL + "/api/driver/all", options).then(handleHttpErrors);
  }

  const fetchDriverById = (id) => {
    const options = makeOptions("GET", true);
    return fetch(URL + `/api/driver/${id}`, options).then(handleHttpErrors);
  }

  const createDriver = (data) => {
    const options = makeOptions("PUT", true, data);
    return fetch(URL + `/api/driver/create`, options).then(handleHttpErrors);
  }

  const updateDriver = (id, data) => {
    const options = makeOptions("POST", true, data);
    return fetch(URL + `/api/driver/update/${id}`, options).then(handleHttpErrors);
  }

  const deleteDriver = (id) => {
    const options = makeOptions("Delete", true);
    return fetch(URL + `/api/driver/delete/${id}`, options).then(handleHttpErrors);
  }

  const fetchAllCars = () => {
    const options = makeOptions("GET", false);
    return fetch(URL + "/api/car/all", options).then(handleHttpErrors);
  }

  const fetchCarById = (id) => {
    const options = makeOptions("GET", true);
    return fetch(URL + `/api/car/${id}`, options).then(handleHttpErrors);
  }

  const createCar = (data) => {
    const options = makeOptions("PUT", true, data);
    return fetch(URL + `/api/car/create`, options).then(handleHttpErrors);
  }

  const updateCar = (id, data) => {
    const options = makeOptions("POST", true, data);
    return fetch(URL + `/api/car/update/${id}`, options).then(handleHttpErrors);
  }

  const deleteCar = (id) => {
    const options = makeOptions("Delete", true);
    return fetch(URL + `/api/car/delete/${id}`, options).then(handleHttpErrors);
  }

  const getDriverFromCar = (id) => {
    const options = makeOptions("GET", true);
    return fetch(URL + `/api/car/getdrivers/${id}`, options).then(handleHttpErrors);
  }


  const fetchAllRaces = () => {
    const options = makeOptions("GET", false);
    return fetch(URL + "/api/race/all", options).then(handleHttpErrors);
  }

  const fetchRaceById = (id) => {
    const options = makeOptions("GET", true);
    return fetch(URL + `/api/race/${id}`, options).then(handleHttpErrors);
  }

  const createRace = (data) => {
    const options = makeOptions("PUT", true, data);
    return fetch(URL + `/api/race/create`, options).then(handleHttpErrors);
  }

  const updateRace = (id, data) => {
    const options = makeOptions("POST", true, data);
    return fetch(URL + `/api/race/update/${id}`, options).then(handleHttpErrors);
  }

  const deleteRace = (id) => {
    const options = makeOptions("Delete", true);
    return fetch(URL + `/api/race/delete/${id}`, options).then(handleHttpErrors);
  }

  const getCarsFromRace = (id) => {
    const options = makeOptions("GET", true);
    return fetch(URL + `/api/race/getcars/${id}`, options).then(handleHttpErrors);
  }


  const makeOptions = (method, addToken, body) => {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        'Accept': 'application/json',
      }
    }
    if (addToken && loggedIn()) {
      opts.headers["x-access-token"] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  }
  return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    decodeToken,
    fetchUserInfo,
    create,
    fetchAllDrivers,
    fetchAllCars,
    fetchAllRaces,
    fetchDriverById,
    fetchCarById,
    fetchRaceById,
    createDriver,
    createCar,
    createRace,
    updateDriver,
    updateCar,
    updateRace,
    deleteDriver,
    deleteCar,
    deleteRace,
    getCarsFromRace,
    getDriverFromCar,
  }
}
const facade = apiFacade();
export default facade;
