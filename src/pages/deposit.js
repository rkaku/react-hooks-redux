import React, { useCallback, useMemo } from "react"
import { depositCreator, loadingCreator } from "../store/creators/savings"
import { useSelector, useDispatch } from "react-redux"
import Button from './../components/Button'

export default function Container() {

  function Deposit() {
    return (
      <>
        <h1>{ balanceLabelHandle }</h1>
        <Button
          onClickHandle={ onDepositHandle }
          buttonLabel={ "Deposit" }
        />
        <h1>{ loanLabel }</h1>
      </>
    )
  }

  const balance = useSelector(state => state.savings.balance)
  const loan = useSelector(state => state.debts.loan)
  const loading = useSelector(state => state.savings.loading)
  const dispatch = useDispatch()
  const onDepositHandle = useCallback(() => {
    dispatch(loadingCreator())
    setTimeout(() => {
      dispatch(depositCreator(25))
    }, 1000)
  }, [dispatch])
  const balanceLabelHandle = useMemo(() => {
    return loading ? "Saving..." : `Balance: ${ balance }`
  }, [loading, balance])
  const loanLabel = useMemo(
    () => (loan ? "Loan Applied :)" : "Loan Needed :("),
    [loan],
  )

  return (
    <Deposit />
  )
}