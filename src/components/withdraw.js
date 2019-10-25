import React, { useCallback, useContext, useMemo } from 'react';
import AppContext from '../contexts/AppContext';
import { withdrawCreator } from '../actionCreators';


function Component(props) {
  return (
    <>
      <h1>Balance: { props.balanceLabel }</h1>
      <button onClick={ props.onWithdrawHandle }>Withdraw</button>
      <h1>{ props.loanLabel }</h1>
    </>
  );
};


function Container() {
  const { state, dispatch } = useContext(AppContext);
  const { balance, loan } = state;
  const balanceLabel = useMemo(() => balance, [balance])
  const onWithdrawHandle = useCallback(() => dispatch(withdrawCreator()), [dispatch]);
  const loanLabel = useMemo(() => loan ? "Loan Applied :)" : "Loan Needed :(", [loan]);
  return (
    <Component
      balanceLabel={ balanceLabel }
      onWithdrawHandle={ onWithdrawHandle }
      loanLabel={ loanLabel }
    />
  )
}


export default Container;