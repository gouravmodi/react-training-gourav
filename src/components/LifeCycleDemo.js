import React, { Component } from 'react';

class LifeCycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Initial message',
    };
    alert('Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    alert('getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    alert('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    alert('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    alert('getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    alert('componentDidUpdate');
  }

  componentWillUnmount() {
    alert('componentWillUnmount');
  }

  updateMessage = () => {
    this.setState({ message: 'Updated message' });
  };

  render() {
    alert('Render');
    return (
      <div>
        <h1>LifeCycleDemo</h1>
        <p>{this.state.message}</p>
        <button onClick={this.updateMessage}>Update Message</button>
      </div>
    );
  }
}

export default LifeCycleDemo;
