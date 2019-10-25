import * as types from './actionTypes';


const initialState = () => {
  return {
    balance: 0,
    loan: false
  };
};

function reducer(state, action) {
  switch (action.type) {
    case types.DEPOSIT:
      return { ...state, balance: state.balance + 10 };
    case types.WITHDRAW:
      return { ...state, balance: state.balance - 10 };
    case types.APPLY:
      return { ...state, loan: !state.loan };
    default:
      return state;
  };
};


export { reducer, initialState };