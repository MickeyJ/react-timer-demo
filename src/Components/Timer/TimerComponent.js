import React, { Component, PropTypes } from 'react'

import TimerDisplay from './TimerDisplay'

/** @namespace this */

class TimerContainer extends Component {
  constructor(props){
    super(props);
    this.state = { count: props.startTime };
    this.currentTime = props.startTime;
    this.stopTime = props.stopTime;
    this.countRate = props.countRate;
    this.message = 'Done!'
  }
  componentWillMount(){
    this.timer = setInterval(() =>{
      this.currentTime++;
      this.setState({
        count: this.currentTime
      });
      if(this.currentTime === this.stopTime)
        clearInterval(this.timer);
    }, this.countRate);
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  render(){
    return(
      <div>
        <TimerDisplay count={this.state.count} />
      </div>
    )
  }
}

TimerContainer.propTypes ={
  startTime: PropTypes.number.isRequired,
  stopTime: PropTypes.number.isRequired,
  countRate: PropTypes.number.isRequired
};

export default TimerContainer
