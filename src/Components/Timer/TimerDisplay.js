import React from 'react'

import d3 from 'd3';

var x = Math.floor(Math.random() * (700 - 300) + 300);


const TimerDisplay = props => {
 var direction = props.right ? x++ : x--;

 return(
    <div id="timer-display">
      <span className="count">
        <svg width="1000" height="600">
          <circle cx={direction} cy={props.count * props.count / 25} r={props.count} />
        </svg>
      </span>

    </div>
  );
};

export default TimerDisplay