const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');


changeTimeToDate = function(t) {
  // no functionality yet
  return t;
}

nextISSTimesForMyLocation((error, times) => {
  if (error) {
    console.log("It didn't work! Failed to fetch flyover times. \n", error);
    return;
  }
  for (const time of times.response) {
    riseTime = changeTimeToDate(time.risetime);
    console.log(`Next flyover at ${riseTime} for ${time.duration} seconds!`);
  }
})



const testing = false;
if (testing) {

  // creating some data to pass to the functions
  const mockData = {
    ip: '38.147.245.197',
    coords: { latitude: 40.7589111328125, longitude: -73.97901916503906 }
  };

  // testing the fetchMyIP function
  fetchMyIP((error, ip) => {
    if (error) {
      console.log("It didn't work! Failed to fetch IP. \n" , error);
      return;
    }
    console.log('It worked! Returned IP:' , ip);
  });
  
  // testing the fetchCoordsByIP function
  fetchCoordsByIP(mockData.ip, (error, coords) => {
    if (error) {
      console.log('It didn\'t work! Failed to fetch coordinates. \n', error);
      return;
    }
    console.log('It worked! Your coordinates are: ', coords);
  });
  
  // testing the fetchISSFlyOverTimes function
  fetchISSFlyOverTimes(mockData.coords, (error, times) => {
    if (error) {
      console.log('bad bad things', error);
      return;
    }
    console.log('good times', times);
  });

}