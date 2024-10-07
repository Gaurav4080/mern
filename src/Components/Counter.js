import React, { Component } from 'react'
import UpdatedComponent from './HigherOrderComponent'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter: 0
      }
    }
    UpdateCounter=()=>{
        this.setState({counter: this.state.counter + 1})
    }
  render() {
    const {counter} = this.state
    return (
      <div>
        <button onMouseEnter={this.UpdateCounter}>{this.props.name} Counter is {counter} </button>
      </div>
    )
  }
}

export default UpdatedComponent(Counter)