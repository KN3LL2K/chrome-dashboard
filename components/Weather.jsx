import React from 'react';
import request from 'superagent';
import $ from 'jquery';
import Loading from './Loading.jsx';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: 51.5007,
      latitude: 0.1246,
      loading: true,
      temp: 0,
      icon: 'clear-day'
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
          this.setForecast(temperature, icon)
        } else {

        }
      }.bind(this))
  }

  setForecast(temp, icon) {
    this.setState({temp: temp, icon: icon, loading: false})
  }

  render() {
    let loading = this.state.loading;
    let temp = this.state.temp; 
    let icon = this.state.icon;
    return (
      <div id='weather' className='sq-component ltred bottom-second'>
      { loading ? <Loading /> : <Forecast temp={temp} icon={icon} /> }
      </div>
    );
  }
}

class Forecast extends React.Component {
  render() {
    let temp = Math.round(this.props.temp);
    let icon = 'assets/' + this.props.icon + '.svg';
    return (
    <div id='forecast'>
      <img className='icon' src={icon} />
      <div>
        <span> {temp} </span> 
        <img className='fahrenheit' src='assets/fahrenheit.svg' />
      </div>
      <a href='https://darksky.net/poweredby/'>Powered By Dark Sky</a>
    </div>
      )
  }
}

export default Weather;
