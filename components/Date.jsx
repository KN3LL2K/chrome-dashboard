import React from 'react';

class DateComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 0,
      month: 0,
      date: 0
    };
  }

   componentDidMount() {
      TweenMax.from('#date', 0.3, {opacity: 0, delay: 1});
      TweenMax.from('.dateText', 0.3, {opacity: 0, delay: 1});
    }

  render() {
    let date = new Date().getDate();
    let day = new Date().getDay();
    let month = new Date().getMonth();
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    return (
      <div id='date-comp' className='sq-component yellow second'>
      <span className='dateText'>{days[day]}</span>
      <div id='date'>{date}</div>
      <span className='dateText'>{months[month]}</span>
      </div>
      );
  }
}


export default DateComp;
