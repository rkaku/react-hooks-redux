import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import { withdraw } from '../actionCreators';


function Withdraw() {
  const { state, dispatch } = useContext(AppContext);

  function onWithdrawHandle() {
    dispatch(withdraw());
  };

  return (
    <>
      <h1>Balance: { state.balance }</h1>
      <button onClick={ onWithdrawHandle }>Withdraw</button>
      <h1>{ state.loan ? "Loan Applied :)" : "Loan Needed :(" }</h1>
    </>
  );
};


export default Withdraw;