import React from 'react';
// import Snap from 'snapsvg';
import TransitionGroup from 'react-addons-transition-group';
const Snap = require( "imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js" );

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds()
    }
  }


  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick()
    }, 1000);


  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  init() {

  }


  tick() {
    let newHour = new Date().getHours();
    let newMin = new Date().getMinutes();
    let newSec = new Date().getSeconds();
    TweenMax.to('#hour-hand', 0.0167, {rotation:((newHour * 30) + (newMin/2)), transformOrigin:'50% 27.5px'});
    TweenMax.to('#min-hand', 0.0167, {rotation:(newMin * 6), transformOrigin:'50% 49px'});
    TweenMax.to('#sec-hand', 0.0167, {rotation:(newSec * 6), transformOrigin:'50% 46px'});
    this.setState({
      hour: newHour,
      minutes: newMin,
      seconds: newSec
    });
  }

  render() {
    let minutes = () => {
      if (this.state.minutes < 10) {
        return '0' + this.state.minutes;
      } else {
        return this.state.minutes;
      }
    }
    let hours = () => {
      if (this.state.hours < 10) {
        return '0' + this.state.hours;
      } else {
        return this.state.hours;
      }
    }
       
    return (
        <div id='clock' className='sq-component green first'>
        <div id='clock-face'>
          <img src='assets/clock-face.svg' />
          <img id='hour-hand' className='clock-hand' src='assets/hourHand.svg' />
          <img id='min-hand' className='clock-hand' src='assets/minHand.svg' />
          <img id='sec-hand' src='assets/secHand.svg' />
        </div>
          <span id='time'>{hours()} : {minutes()}</span>
          
        
        </div>
    );
  }
}

export default Clock;
