import React, { useCallback, useContext, useMemo } from "react"
// import AppContext from "./../reducers"
import { loanCreator } from "../store/creators/debts"
import { useSelector, useDispatch } from "react-redux"

function Home(props) {
  return (
    <>
      <h1>Balance: { props.balanceLabel }</h1>
      <button
        className={ props.loanButtonColor }
        onClick={ props.applyLoanHandle }
      >
        { props.loanButtonLabel }
      </button>
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
  const applyLoanHandle = useCallback(() => dispatch(loanCreator()), [dispatch])
  const loanButtonLabel = useMemo(() => (loan ? "Loan Applied" : "Apply for Loan"), [
    loan,
  ])
  const loanButtonColor = useMemo(() => (loan ? "button-style-applied" : "button-style"), [loan])
  const loanLabel = useMemo(
    () => (loan ? "Loan Applied :)" : "Loan Needed :("),
    [loan],
  )
  return (
    <Home
      balanceLabel={ balanceLabel }
      applyLoanHandle={ applyLoanHandle }
      loanButtonLabel={ loanButtonLabel }
      loanButtonColor={ loanButtonColor }

      loanLabel={ loanLabel }
    />
  )
}
