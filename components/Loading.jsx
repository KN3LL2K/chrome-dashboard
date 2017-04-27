import React from 'react';

class Loading extends React.Component {
   componentDidMount() {
      TweenMax.from('#html-spinner', 0.3, {opacity: 0, delay: 0.3});
    }
  render() {
    return (
        <div id="html-spinner"></div>
      )
  }
}

export default Loading;
