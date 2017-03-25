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
  }

  render() {
    let date = new Date().getDate();
    let day = new Date().getDay();
    let month = new Date().getMonth();
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    return (
      <div id='date-comp' className='sq-component yellow second'>
      {days[day]}
      <div id='date'>{date}</div>
      {months[month]}
      </div>
      );
  }
}


export default DateComp;
