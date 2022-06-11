const { fetchMyIP, fetchCoordsByIP } = require('./iss');


// testing the fetchMyIP function
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});



const hardIP = '38.147.245.197'


// testing the fetchCoordsByIP function
fetchCoordsByIP(hardIP, (error, coords) => {
  if (error) {
    console.log('broken coords', error);
    return;
  }
  console.log('Coords: ', coords);
});