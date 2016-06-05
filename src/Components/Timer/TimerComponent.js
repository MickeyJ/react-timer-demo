import React, { Component, PropTypes } from 'react'

import TimerDisplay from './TimerDisplay'

class TimerContainer extends Component {
  constructor(props){
    super(props);
    this.currentTime = props.startTime;
    this.stopTime = props.stopTime;
    this.countRate = props.countRate;
    this.state = {
      count: this.currentTime
    };
  }
  componentWillMount(){
    this.tick();
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  tick(){
    this.timer = setInterval(() =>{

      this.currentTime < this.stopTime
        ? this.currentTime++
        : this.currentTime--;
      
      this.setState({
        count: this.currentTime
      });
      
      if(this.currentTime === this.stopTime){
        clearInterval(this.timer);
      }
      
    }, this.countRate);
  }
  render(){
    return <TimerDisplay count={this.state.count} />
  }
}

TimerContainer.propTypes = {
  startTime: PropTypes.number.isRequired,
  stopTime: PropTypes.number.isRequired,
  countRate: PropTypes.number.isRequired
};

export default TimerContainer
