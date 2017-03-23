const request = require('superagent');

module.exports.getWeather = function(longitude, latitude) {
  var promise = new Promise(function(resolve, reject) {
    request
      .get('https://api.darksky.net/forecast/fa4f9fbaba0c9ef9915c5544ea4b98b9/' + latitude + ',' + longitude)
      .withCredentials()
      .then(function(res) {
        let temperature = res.body.currently.temperature;
        let icon = res.body.currently.icon;
        resolve({icon: icon, temperature: temperature, success: true});
        reject({success: false})
      })
  })
  return promise;
}
