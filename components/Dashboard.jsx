import React from 'react';
import Clock from './Clock.jsx';
import DateComp from './Date.jsx'
import Twitter from './Twitter.jsx';
import Weather from './Weather.jsx';
import TransitLarge from './TransitLarge.jsx';
import TweenMax from 'gsap';
import TransitionGroup from 'react-addons-transition-group';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    const el = this;
    TweenMax.staggerFrom('.sq-component', 0.8, { y:25, opacity: 0, delay:0.3, ease:Elastic.easeOut}, 0.08)
    TweenMax.from('.tall-component', 0.8, {y:25, opacity: 0, ease:Elastic.easeOut, delay:0.44})
  }

  render() {
    return (
      <div id='body-wrapper'>
      <TransitionGroup>
        <Clock />
        <DateComp />
        <Twitter />
        <Weather />
        <TransitLarge />
      </TransitionGroup>
      </div>
    );
  }
}

export default Dashboard;
