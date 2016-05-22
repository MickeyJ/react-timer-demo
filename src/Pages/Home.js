import React from 'react'

import Timer from '../Components/Timer/TimerComponent'

const HomeComponent = props => {
  return (
    <div>
      <h2>Timer Example</h2>
      <Timer 
        startTime={0}
        stopTime={5}
        countRate={1000}
      />
    </div>
  )
};

export default HomeComponent