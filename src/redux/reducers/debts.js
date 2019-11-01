import types from './../types/debts'
// import { createContext } from 'react';

const initialState = () => {
  return {
    loan: false
  }
}

// export const AppContext = createContext(initialState)

export default function reducer(state = initialState(), action) {
  switch (action.type) {
    case types.APPLY:
      return { ...state, loan: !state.loan }
    default:
      return state;
  }
}