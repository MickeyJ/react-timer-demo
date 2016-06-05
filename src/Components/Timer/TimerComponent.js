import React, { Component, PropTypes } from 'react'

import TimerDisplay from './TimerDisplay'

export default class TimerComponent extends Component {
  constructor(props){
    super(props);
    this.currentTime = props.startTime;
    this.stopTime = props.stopTime;
    this.countRate = props.countRate;
    
    // Set the initial state
    //——————————————————————
    this.state = {
      count: this.currentTime
    };
  }
  componentWillMount(){
    // Start timer on 'load'
    //——————————————————————
    this.tick();
  }
  componentWillUnmount(){
    // Clear timer on 'unload'
    //————————————————————————
    clearInterval(this.timer)
  }
  tick(){
    this.timer = setInterval(() =>{
      this.currentTime < this.stopTime
        ? this.currentTime++
        : this.currentTime--;

      // Set state to new current time
      //——————————————————————————————
      this.setState({
        count: this.currentTime
      });
      
      if(this.currentTime === this.stopTime){
        clearInterval(this.timer);
      }
    }, this.countRate);
  }
  render(){
    
    // Pass down the timer's STATE as a PROP
    //——————————————————————————————————————
    return <TimerDisplay count={this.state.count} />
  }
}

TimerComponent.propTypes = {
  startTime: PropTypes.number.isRequired,
  stopTime: PropTypes.number.isRequired,
  countRate: PropTypes.number.isRequired
};

