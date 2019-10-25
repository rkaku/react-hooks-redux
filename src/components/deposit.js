import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import { deposit } from '../actionCreators';


function Deposit() {
  const { state, dispatch } = useContext(AppContext);

  function onDepositHandle() {
    dispatch(deposit());
  };

  return (
    <>
      <h1>Balance: { state.balance }</h1>
      <button onClick={ onDepositHandle }>Deposit</button>
      <h1>{ state.loan ? "Loan Applied :)" : "Loan Needed :(" }</h1>
    </>
  );
};


export default Deposit;