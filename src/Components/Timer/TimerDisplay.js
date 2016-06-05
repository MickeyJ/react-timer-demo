import React from 'react'

const TimerDisplay = props => (
  <div id="timer-display">
    <span className="count">
      {props.count}
    </span>
  </div>
);

export default TimerDisplay