import React, { Component } from 'react';

export default class ClassDemo extends Component {
  state = {
    count: 100,
  };

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Class Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Decrement</button>
      </div>
    );
  }
}



