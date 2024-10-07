import React, { Component } from 'react'
import PureCom from './PureCom';
import RegularComponent from './RegularComponent';

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Gaurav"
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "Gaurav"
            })
        }, 3000);
    }
  render() {
    console.log("Parent component render")
    return <div><p>I am the Parent Component</p>
        <RegularComponent name={this.state.name} />
        <PureCom name={this.state.name} />
      </div>
  }
}

export default ParentComponent