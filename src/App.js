import logo from './logo.svg';
import './App.css';
import React from 'react';



function App() {
  let produtos = [
    {item:'Produto 1', valor: 3.50},
    {item:'Produto 2', valor: 4.50},
    {item:'Produto 3', valor: 5.50},
    {item:'Produto 4', valor: 6.50},
  ]
  return (
    <div className="App">
      Vamos ver a lista de produtos:
      <ListaProdutos produtos={produtos} />
    </div>
  );
}


class ListaProdutos extends React.Component {
  
  componentDidMount() {
    console.log('Lista carregada')
  }

  render() {
    return this.props.produtos.map((prod) => {
      return <div className="linha">
        <strong>{prod.item}</strong>: {prod.valor}
      </div>
    })
  }
}
export default App;
