import React from 'react'

const TimerDisplay = props => (
  <div className="timer-display">
    <span className="count">
      {props.count}
    </span>
  </div>
);

export default TimerDisplay