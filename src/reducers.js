import * as types from './actionTypes';


const initialState = () => {
  return {
    balance: 0,
    loan: false,
    loading: false
  };
};

function reducer(state, action) {
  switch (action.type) {
    case types.DEPOSIT:
      return { ...state, balance: state.balance + 10, loading: false };
    case types.WITHDRAW:
      return { ...state, balance: state.balance - 10 };
    case types.APPLY:
      return { ...state, loan: !state.loan };
    case types.LOADING:
      return { ...state, loading: true }
    default:
      return state;
  };
};


export { reducer, initialState };