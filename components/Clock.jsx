import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      hours: new Date().getHours(),
      minutes: new Date().getMinutes()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick(), 1000
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      hour: new Date().getHours(),
      minutes: new Date().getMinutes()
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
       
    return (
      <div id='clock' className='sq-component green first'>
      <div id='clock-face'></div>
        <span id='time'>{this.state.hours} : {minutes()}</span>
        
      
      </div>
    );
  }
}

export default Clock;
