const request = require("request");

const capital = (pays, callback) => {
  const url = "https://restcountries.com/v3.1/name/" + pays;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      console.log("Not unavailable");
    } else if (response.body.error) {
      console.log("Not unavailable.Try another");
    } else {
      const nameOfcapital = response.body[0].capital;
      //console.log("La capitale est :" + nameOfcapital);
    }
    const nameOfcapital = response.body[0].capital;
    callback(error,nameOfcapital)
  });
};

module.exports = capital;
