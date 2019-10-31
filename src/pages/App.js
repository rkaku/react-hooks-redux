import React, { useReducer } from "react"
import "./../css/App.css"
import { BrowserRouter, Route, NavLink } from "react-router-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import Home from "./home"
import Deposit from "./deposit"
import Withdraw from "./withdraw"
import reducer from "./../store/reducers/index"
// import { AppContext, reducer, initialState } from "./reducers"

function App() {
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

export default function Container() {
  const store = createStore(reducer)
  // const [state, dispatch] = useReducer(reducer, initialState())
  return (
    <BrowserRouter>
      {/* <AppContext.Provider value={ { state, dispatch } }> */ }
      <Provider store={ store }>
        <App />
      </Provider>
      {/* </AppContext.Provider> */ }
    </BrowserRouter>
  )
}
