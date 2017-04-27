import React from 'react';
import TransitionGroup from 'react-addons-transition-group';

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
    this.initHands();
    

  }

  initHands() {
    let newHour = new Date().getHours();
    let newMin = new Date().getMinutes();
    let newSec = new Date().getSeconds();
    TweenMax.from('#clock-face', 1, {opacity: 0, delay: 1});
    TweenMax.from('#clock-face.clock-hand', 1, {opacity: 0, delay: 1});
    TweenMax.from('#time', 1, {opacity: 0, delay: 1});
    TweenMax.to('#hour-hand', 2, {rotation:((newHour * 30) + (newMin/2)), transformOrigin:'50% 27.5px', delay: 0.5});
    TweenMax.to('#min-hand', 2, {rotation:(newMin * 6), transformOrigin:'50% 49px', delay: 0.5});
    TweenMax.to('#sec-hand', 2, {rotation:(newSec * 6), transformOrigin:'50% 46px', onComplete: this.startTimer.bind(this), delay: 0.5});
  }

  startTimer() {
    this.timerID = setInterval(() => {
      this.tick()
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
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
    let format = (inc) => {
      if (this.state[inc] < 10) {
        return '0' + this.state[inc];
      } else {
        return this.state[inc];
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
          <span id='time'>{format('hours')}:{format('minutes')}</span>
          
        
        </div>
    );
  }
}

export default Clock;
