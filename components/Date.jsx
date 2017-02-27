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
    var date = new Date().getDate();
    var day = new Date().getDay();
    var month = new Date().getMonth();
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

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
