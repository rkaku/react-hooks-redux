import React, { useCallback, useContext, useMemo } from 'react';
import AppContext from '../contexts/AppContext';
import { depositCreator, loadingCreator } from '../actionCreators';


function Component({ balanceLabelHandle, onDepositHandle, loanLabel }) {
  return (
    <>
      <h1>{ balanceLabelHandle }</h1>
      <button onClick={ onDepositHandle }>Deposit</button>
      <h1>{ loanLabel }</h1>
    </>
  );
};


function Container() {
  const { state, dispatch } = useContext(AppContext);
  const { balance, loan, loading } = state;
  const onDepositHandle = useCallback(() => {
    dispatch(loadingCreator());
    setTimeout(() => {
      dispatch(depositCreator());
    }, 1000);
  }, [dispatch]);
  const balanceLabelHandle = useMemo(() => {
    return loading ? "Saving..." : `Balance: ${ balance }`
  }, [loading, balance]);
  const loanLabel = useMemo(() => loan ? "Loan Applied :)" : "Loan Needed :(", [loan]);
  return (
    <Component
      balanceLabelHandle={ balanceLabelHandle }
      onDepositHandle={ onDepositHandle }
      loanLabel={ loanLabel }
    />
  );
}


export default Container;