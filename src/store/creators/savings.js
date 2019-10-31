import types from './../types/savings'

export const depositCreator = (payload) => {
  return { type: types.DEPOSIT, payload }
}

export const withdrawCreator = (payload) => {
  return { type: types.WITHDRAW, payload }
}

export const loadingCreator = () => {
  return { type: types.LOADING }
}