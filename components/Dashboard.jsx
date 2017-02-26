import React from 'react';
import Clock from './Clock.jsx';
import Date from './Date.jsx'
import Twitter from './Twitter.jsx';
import Weather from './Weather.jsx';
import TransitLarge from './TransitLarge.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    

    return (
      <div id='body-wrapper'>
      <Clock />
      <Date />
      <Twitter />
      <Weather />
      <TransitLarge />
      </div>
    );
  }
}

export default Dashboard;
