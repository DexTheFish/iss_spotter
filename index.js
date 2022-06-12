const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

const myIP = '38.147.245.197'
const myCoords = { latitude: 40.7589111328125, longitude: -73.97901916503906 };

// testing the fetchMyIP function
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work! Failed to fetch IP. \n" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });




// testing the fetchCoordsByIP function
// fetchCoordsByIP(myIP, (error, coords) => {
//   if (error) {
//     console.log('It didn\'t work! Failed to fetch coordinates. \n', error);
//     return;
//   }
//   console.log('It worked! Your coordinates are: ', coords);
// });

// testing the fetchISSFlyOverTimes function
fetchISSFlyOverTimes(myCoords, (error, times) => {
  if (error) {
    console.log('bad bad things', error);
    return;
  }
  console.log('good times', times);
});