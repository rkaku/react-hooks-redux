import React, { useCallback, useContext, useMemo } from "react"
// import AppContext from "./../reducers"
import { depositCreator, loadingCreator } from "../store/creators/savings"
import { useSelector, useDispatch } from "react-redux"
import Button from './../components/Button'

function Deposit(props) {
  return (
    <>
      <h1>{ props.balanceLabelHandle }</h1>
      {/* <button onClick={ props.onDepositHandle }>Deposit</button> */}
      <Button
        onClickHandle={ props.onDepositHandle }
        buttonLabel={"Deposit"}
      />
      <h1>{ props.loanLabel }</h1>
    </>
  )
}

export default function Container() {
  const balance = useSelector(state => state.savings.balance)
  const loan = useSelector(state => state.debts.loan)
  const loading = useSelector(state => state.savings.loading)
  const dispatch = useDispatch()
  // const { state, dispatch } = useContext(AppContext)
  // const { balance, loan, loading } = state
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
    <Deposit
      balanceLabelHandle={ balanceLabelHandle }
      onDepositHandle={ onDepositHandle }
      loanLabel={ loanLabel }
    />
  )
}