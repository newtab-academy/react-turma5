import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import PrimeiroComponent from './componentes/PrimeiroComponente';
// import CompA, {CompB} from './componentes/SegundoComponente';
// import Loop from './componentes/Loop'
// import Jogadores from './componentes/Jogadores'
// import Time from './componentes/Time'
// import ComponenteClasse from './componentes/ComponenteClasse'
// import Hook from './componentes/Hook'

// import ClasseStateHook from './componentes/ClasseStateHook'
// import Home from './componentes/Home'
// import About from './componentes/About'
// import Formulario from './componentes/Formulario'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import List from './pages/list/list';

// import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <List />
  {/* <BrowserRouter>
    <Switch>     
    <Route path="/" exact={true} component={Home} />
      <Route path="/sobre" component={About} />
     
    </Switch>
  </BrowserRouter>  */}
  
  {/* <Formulario /> */}
  {/* <Hook />
  <ComponenteClasse nome="Bruno"/>
  <Time />
  <Jogadores nome="Tafarel" />
  <Loop />
  <button onClick={alertOi} >Teste</button>
  <div>
    <CompA valor="10"/>
    <CompB valor="555" />
  </div>
  <App />
  <PrimeiroComponent nome="Joao" valor={Math.pow(2,10)}/> */}
  </React.StrictMode>,
  document.getElementById('root')
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  // reportWebVitals();
  