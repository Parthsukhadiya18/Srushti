import React, { Component } from 'react'

export default class ClassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }


  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {


    return (
      <div>ClassState

        <p>Count:{this.state.count}</p>
        <button onClick={this.increment} >+</button>

      </div>
    )
  }
}
