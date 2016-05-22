import React, { Component, PropTypes } from 'react'

import TimerDisplay from './TimerDisplay'

class TimerContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: props.startTime
    };
    this.time = props.startTime + 1;
    this.stopTime = props.stopTime;
    this.right = true
  }
  componentWillMount(){
    this.timer = setInterval(() =>{
      this.time--;
      this.setState({
        count: this.time
      });
      if(this.time == this.stopTime){
        clearInterval(this.timer);
        this.right = false;

        this.timer = setInterval(() =>{
          this.time++;
          this.setState({
            count: this.time
          });
          if(this.time == this.props.startTime){
            clearInterval(this.timer);
          }
        }, this.props.rate);

      }
    }, this.props.rate);
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  render(){
    return(
      <div>
        <TimerDisplay
          count={this.state.count}
          right={this.right}
        />
      </div>
    )
  }
}

TimerContainer.propTypes ={
  startTime: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired
};

export default TimerContainer
