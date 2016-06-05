import React from 'react'

import Timer from '../Components/Timer/TimerComponent'

const HomeComponent = () => {
  return (
    <div>
      <h2>Timer Example</h2>
      <Timer 
        startTime={0}
        stopTime={5}
        countRate={1000}
      />
      <Timer
        startTime={5}
        stopTime={0}
        countRate={1000}
      />
      
      <Timer
        startTime={0}
        stopTime={50}
        countRate={250}
      />
      <Timer
        startTime={50}
        stopTime={0}
        countRate={250}
      />
    </div>
  )
};

export default HomeComponent