import React from 'react'

import TimerComponent from '../Components/Timer/TimerComponent'

const HomePage = () => (
  <section>
    
    <h2>Timer Example</h2>
    
    <TimerComponent 
      startTime={0}
      stopTime={5}
      countRate={1000}
    />
    
    <TimerComponent
      startTime={5}
      stopTime={0}
      countRate={1000}
    />
    
  </section>
);

export default HomePage
