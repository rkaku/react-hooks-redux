import React, { useCallback, useMemo } from "react"
import { withdrawCreator } from "../redux/creators/savings"
import { useSelector, useDispatch } from "react-redux"
import Button from './../components/Button'

export default function Container () {

  function Withdraw () {
    return (
      <>
        <h1>Balance: { balanceLabel }</h1>
        <Button
          onClickHandle={ onWithdrawHandle }
          buttonLabel={ "Withdraw" }
        />
        <h1>{ loanLabel }</h1>
      </>
    )
  }

  const balance = useSelector( state => state.savings.balance )
  const loan = useSelector( state => state.debts.loan )
  const dispatch = useDispatch()
  const balanceLabel = useMemo( () => balance, [ balance ] )
  const onWithdrawHandle = useCallback( () => dispatch( withdrawCreator( 10 ) ), [
    dispatch,
  ] )
  const loanLabel = useMemo(
    () => ( loan ? "Loan Applied :)" : "Loan Needed :(" ),
    [ loan ],
  )

  return (
    <Withdraw />
  )
}