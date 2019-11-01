import { depositCreator, loadingCreator } from './../creators/savings'

export default function depositAsync ( payload ) {
  return dispatch => {
    dispatch( loadingCreator() )
    setTimeout( () => {
      dispatch( depositCreator( payload ) )
    }, 1000 )
  }
}