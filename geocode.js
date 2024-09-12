const request = require('request')

const geocode = (address, callback) => {
  const url =
  "https://api.mapbox.com/search/geocode/v6/forward?q=" +
  address +
    ".json&access_token=pk.eyJ1IjoiY2VzYXIyNiIsImEiOiJjbTBjOHp5ankwMHBtMnJzOTV1ZTh3c3hhIn0.QZOhuAMrrtStsYQNzz2PCQ";
  request({ url: url, json: true }, (error, response) => {
    //console.log(response);
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location.Try another search", undefined);
    } else {
      callback(undefined, {
        longitude: response.body.features[0].properties.coordinates.longitude,
        latitude: response.body.features[0].properties.coordinates.latitude,
        location: response.body.features[0].properties.name,
      });
      //console.log(response.body.features[0].properties.coordinates.longitude),
      //console.log(response.body.features[0].properties.coordinates.latitude)
    }
  });
};

  module.exports = geocode