import types from './actionTypes'

export const depositCreator = (payload) => {
  return { type: types.DEPOSIT, payload }
}

export const withdrawCreator = (payload) => {
  return { type: types.WITHDRAW, payload }
}

export const loanCreator = () => {
  return { type: types.APPLY }
}

export const loadingCreator = () => {
  return { type: types.LOADING }
}