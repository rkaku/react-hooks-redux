import React, { useCallback, useContext, useMemo } from 'react';
import AppContext from '../contexts/AppContext';
import { loanCreator } from '../actionCreators';


function Component({ balanceLabel, applyLoanHandle, loanButton, loanLabel }) {
  return (
    <>
      <h1>Balance: { balanceLabel }</h1>
      <button
        className="button-style"
        onClick={ applyLoanHandle }
      >{ loanButton }</button>
      <h1>{ loanLabel }</h1>
    </>
  );
};


function Container() {
  const { state, dispatch } = useContext(AppContext);
  const { balance, loan } = state;
  const balanceLabel = useMemo(() => balance, [balance]);
  const applyLoanHandle = useCallback(() => dispatch(loanCreator()), [dispatch]);
  const loanButton = useMemo(() => loan ? "Loan Applied" : "Apply for Loan</button", [loan]);
  const loanLabel = useMemo(() => loan ? "Loan Applied :)" : "Loan Needed :(", [loan]);
  return (
    <Component
      balanceLabel={ balanceLabel }
      applyLoanHandle={ applyLoanHandle }
      loanButton={ loanButton }
      loanLabel={ loanLabel }
    ></Component>
  );
};


export default Container;