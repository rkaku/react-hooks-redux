import types from './../types/savings'
// import { createContext } from 'react';

const initialState = () => {
  return {
    balance: 0,
    loading: false
  }
}

// export const AppContext = createContext(initialState)

export default function reducer ( state = initialState(), action ) {
  switch ( action.type ) {
    case types.LOADING:
      return { ...state, loading: true }
    case types.DEPOSIT:
      return { ...state, balance: state.balance + action.payload, loading: false }
    case types.WITHDRAW:
      return { ...state, balance: state.balance - action.payload }
    default:
      return state;
  }
}