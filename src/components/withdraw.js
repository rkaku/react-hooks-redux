import React, { useCallback, useContext, useMemo } from "react"
// import AppContext from "./../reducers"
import { withdrawCreator } from "./../store/creators/savings"
import { useSelector, useDispatch } from "react-redux"

function Withdraw(props) {
  return (
    <>
      <h1>Balance: { props.balanceLabel }</h1>
      <button onClick={ props.onWithdrawHandle }>Withdraw</button>
      <h1>{ props.loanLabel }</h1>
    </>
  )
}

export default function Container() {
  const balance = useSelector(state => state.savings.balance)
  const loan = useSelector(state => state.debts.loan)
  const dispatch = useDispatch()
  // const { state, dispatch } = useContext(AppContext)
  // const { balance, loan } = state
  const balanceLabel = useMemo(() => balance, [balance])
  const onWithdrawHandle = useCallback(() => dispatch(withdrawCreator(10)), [
    dispatch,
  ])
  const loanLabel = useMemo(
    () => (loan ? "Loan Applied :)" : "Loan Needed :("),
    [loan],
  )
  return (
    <Withdraw
      balanceLabel={ balanceLabel }
      onWithdrawHandle={ onWithdrawHandle }
      loanLabel={ loanLabel }
    />
  )
}