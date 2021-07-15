import React from 'react';

export default class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        teste: 5
      };
    }
  
    render() {
      return (
        <div>
          <p>CLASSE - You clicked {this.state.count} times ---  {this.state.teste}</p>
          <button onClick={() => this.setState({ teste: this.state.count + 1 })}>
            Click me
          </button>
        </div>
      );
    }
  }