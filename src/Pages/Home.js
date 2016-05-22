import React from 'react'

import Timer from '../Components/Timer/TimerComponent'

const HomeComponent = props => {
  return (
    <div>
      <h1>Home</h1>
      
      <Timer 
        startTime={100}
        stopTime={0}
        rate={10}
      />
      
    </div>
  )
};

export default HomeComponent