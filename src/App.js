import React, { useReducer } from 'react';
import './App.css';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import Home from './components/home';
import Deposit from './components/deposit';
import Withdraw from './components/withdraw';
import AppContext from './contexts/AppContext';
import { reducer, initialState } from './reducers'


function Component() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <ul className="ul-style">
            <li className="li-style">
              <NavLink to="/" className="App-lind">Home</NavLink>
            </li>
            <li className="li-style">
              <NavLink to="/deposit" className="App-lind">Deposit</NavLink>
            </li>
            <li className="li-style">
              <NavLink to="/withdraw" className="App-lind">Withdraw</NavLink>
            </li>
          </ul>
          <Route path="/" exact component={ Home } />
          <Route path="/deposit" component={ Deposit } />
          <Route path="/withdraw" component={ Withdraw } />
        </header>
      </div>
    </>
  );
};


function Container() {
  const [state, dispatch] = useReducer(reducer, initialState());
  return (
    <AppContext.Provider value={ { state, dispatch } }>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContext.Provider>
  );
};


export default Container;
