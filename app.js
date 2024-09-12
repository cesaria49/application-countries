const request = require("request");
const capital = require("./capital");
const geocode = require("./geocode");
const forecast = require("./forecast.js");
//
// const url = 'https://restcountries.com/v3.1/name/benin'

// request({ url: url, json: true }, (error, response) => {

//   if (error){
//      console.log('Not unavailable')
//   }else if(response.body.error){
//    console.log('Not unavailable.Try another')
//   }
//   else{
//     const capital = response.body[0].capital
//     console.log('La capitale est :'  + capital)

//   }
// });
//

const pays = process.argv[2];
if (!pays) {
  console.log("Please enter a good name");
} else {
  capital(pays, (error, capital) => {
    if (error) {
      return console.log(error);
    }

    geocode(capital, (error, data) => {
      if (error) {
        return console.log(error);
      }

      forecast(data.latitude, data.longitude, (error, temperature) => {
        if (error) {
          return console.log(error);
        }
     
      });
    });
  });
}

//   const geocodageURL = "https://api.mapbox.com/search/geocode/v6/forward?q=porto-novo.json&access_token=pk.eyJ1IjoiY2VzYXIyNiIsImEiOiJjbTBjOHp5ankwMHBtMnJzOTV1ZTh3c3hhIn0.QZOhuAMrrtStsYQNzz2PCQ"
//   request({url : geocodageURL,json : true},(error,response) => {

//      if (error){
//       console.log('Unable to connect to weather service')
//   }
//   else if(response.body.features.length===0) {
//       console.log('Unable to find location.Try another')
//   }
//   else {
//       const latitude = response.body.features[1].geometry.coordinates[0]
//       const longitude = response.body.features[1].geometry.coordinates[1]
//       console.log(latitude,longitude)
//   }
//   })

//   const url = 'https://api.weatherstack.com/current?access_key=c496581fb26e165dda930de6e77a6ab9&query=-43.075,-22.822&units=f'

// request ({url :url,json : true},(error,response) => {
//     if (error){
//         console.log('Unable to connect to weather service')
//     }
//     else if(response.body.error) {
//         console.log(response.body.error)
//         console.log('Unable to find location')
//     }
//     else{
//         console.log( ' It is currently ' + response.body.current.temperature + ' degress out.There is  a '+ response.body.current.precip+ '% chance of rain')
//     }
// })

console.log(process.argv);
