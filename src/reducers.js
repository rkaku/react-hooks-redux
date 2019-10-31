import types from './actionTypes'
import { createContext } from 'react';

export const initialState = () => {
  return {
    balance: 0,
    loan: false,
    loading: false
  }
}

export const AppContext = createContext(initialState)

export function reducer(state = initialState(), action) {
  switch (action.type) {
    case types.DEPOSIT:
      return { ...state, balance: state.balance + action.payload, loading: false }
    case types.WITHDRAW:
      return { ...state, balance: state.balance - action.payload }
    case types.APPLY:
      return { ...state, loan: !state.loan }
    case types.LOADING:
      return { ...state, loading: true }
    default:
      return state;
  }
}