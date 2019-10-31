import React, { useCallback, useMemo } from "react"
import { loanCreator } from "../store/creators/debts"
import { useSelector, useDispatch } from "react-redux"

export default function Container() {

  function Home() {
    return (
      <>
        <h1>Balance: { balanceLabel }</h1>
        <button
          className={ loanButtonColor }
          onClick={ applyLoanHandle }
        >
          { loanButtonLabel }
        </button>
        <h1>{ loanLabel }</h1>
      </>
    )
  }

  const balance = useSelector(state => state.savings.balance)
  const loan = useSelector(state => state.debts.loan)
  const dispatch = useDispatch()
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
    <Home />
  )
}
