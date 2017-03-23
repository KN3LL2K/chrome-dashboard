import React from 'react';
import request from 'superagent';
import $ from 'jquery';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: 51.5007,
      latitude: 0.1246
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
    } else {
      console.log('Your browser does not support geolocation.');
      // fetches weather from default location (London)
      this.getForecast();
    }
  }

  showPosition(position) {
    const longitude = position.coords.longitude;
    const latitude = position.coords.latitude
    this.setState({longitude: longitude, latitude: latitude})
    this.getForecast(longitude, latitude);
    console.log(position.coords.latitude, position.coords.longitude); 
  }

  getForecast(longitude, latitude) {
    longitude = longitude || this.state.longitude;
    latitude = latitude || this.state.latitude;
    request
      .get('/api/forecast')
      .query({longitude: longitude, latitude: latitude})
      .then(function(res) {
        let success = res.body.success;
        let icon = res.body.icon;
        let temperature = res.body.temperature;
        if (success === true) {
          
        } else {
          
        }
        console.log('//////', res.body)
      })
  }

  render() {

    return (
      <div id='weather' className='sq-component ltred bottom-second'>
      <div></div>
      
      </div>
    );
  }
}

export default Weather;
