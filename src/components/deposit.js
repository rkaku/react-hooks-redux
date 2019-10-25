import React, { useContext, useMemo } from 'react';
import AppContext from '../contexts/AppContext';
import { deposit } from '../actionCreators';


function Component(props) {
  return (
    <>
      <h1>Balance: { props.balance }</h1>
      <button onClick={ props.onDepositHandle }>Deposit</button>
      <h1>{ props.loanState }</h1>
    </>
  );
};


function Container() {
  const { state, dispatch } = useContext(AppContext);
  const onDepositHandle = () => {
    setTimeout(() => {
      dispatch(deposit());
    }, 500);
  };
  const balance = useMemo(() => state.balance, [state]);
  const loanState = state.loan ? "Loan Applied :)" : "Loan Needed :(";
  return (
    <Component
      balance={ balance }
      onDepositHandle={ onDepositHandle }
      loanState={ loanState }
    />
  );
}


export default Container;