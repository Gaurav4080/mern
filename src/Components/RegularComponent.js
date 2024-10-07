import React, { Component } from 'react'

class RegularComponent extends Component {
  render() {
    console.log("Regular component render")
    return <div> I am the regular component {this.props.name} </div>
  }
}

export default RegularComponent