import React, { Component } from 'react'

export default class countstate extends Component {
    constructor(prop){
      super(prop)
      this.state={
        count:0,
      }
    }
    increament =()=>{
        this.setState({count:this.state.count+1})
    }

  render() {
    return (
      <div>countstate
       <p>count:{this.state.count}</p>
       <button onClick={this.increament}>+</button>



      </div>
    )
  }
}
