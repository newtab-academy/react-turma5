import React, {Component} from 'react';


export default class ComponenteClasse extends Component {
    render() {
      return <h1>Hello, {this.props.nome}</h1>;
    }
  }
