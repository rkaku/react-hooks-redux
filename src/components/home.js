import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import { loan } from '../actionCreators';

function Home() {
  const { state, dispatch } = useContext(AppContext);

  function applyLoanHandle() {
    dispatch(loan());
  };

  return (
    <>
      <h1>Balance: { state.balance }</h1>
      <button
        className="button-style"
        onClick={ applyLoanHandle }
      >{ state.loan ? "Loan Applied" : "Apply for Loan</button" }</button>
      <h1>{ state.loan ? "Loan Applied :)" : "Loan Needed :(" }</h1>
    </>
  );
};


export default Home;