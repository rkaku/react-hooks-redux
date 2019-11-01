import React from "react"
import "./../styles/App.css"
import { BrowserRouter, Route, NavLink } from "react-router-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import Home from "./home"
import Deposit from "./deposit"
import Withdraw from "./withdraw"
import reducer from "../redux/reducers/index"

function App () {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <ul className="ul-style">
            <li className="li-style">
              <NavLink
                exact
                to="/"
                className="App-link"
                activeClassName="link-active-style"
              >
                Home
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink
                to="/deposit"
                className="App-link"
                activeClassName="link-active-style"
              >
                Deposit
              </NavLink>
            </li>
            <li className="li-style">
              <NavLink
                to="/withdraw"
                className="App-link"
                activeClassName="link-active-style"
              >
                Withdraw
              </NavLink>
            </li>
          </ul>
          <Route exact path="/" component={ Home } />
          <Route exact path="/deposit" component={ Deposit } />
          <Route exact path="/withdraw" component={ Withdraw } />
        </header>
      </div>
    </>
  )
}

export default function Container () {
  const store = createStore( reducer, applyMiddleware( thunk ) )

  return (
    <Provider store={ store }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )
}
