const request = require("request");


/**
 * Makes a single API request to retrieve the user's IP address.
 */
const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const data = JSON.parse(body);
    callback(error, data.ip);
  });
};


/**
 * Makes a single API request to retrieve the user's geographic coordinates based on IP address.
 */
const fetchCoordsByIP = function(ip, callback) {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      callback(Error(`bad status code: ${response.statusCode} while fetching coordinates.\n Response: ${body}`), null);
      return;
    }
    const { latitude, longitude } = JSON.parse(body);
    callback(null, { latitude, longitude });
  })
};

const fetchISSFlyOverTimes = function(coordinates, callback) {
  const url = `https://iss-pass.herokuapp.com/json/?lat=${coordinates.latitude}&lon=${coordinates.longitude}`
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      callback(Error(`Status code ${response.statusCode} while fetching flyover times. \n Response: ${body}`), null);
      return;
    }
    const data = JSON.parse(body);
    callback(null, data);
  })
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };