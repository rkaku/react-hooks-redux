import * as types from './actionTypes';

export const depositCreator = () => {
  return { type: types.DEPOSIT };
};

export const withdrawCreator = () => {
  return { type: types.WITHDRAW };
}

export const loanCreator = () => {
  return { type: types.APPLY };
};

export const loadingCreator = () => {
  return { type: types.LOADING };
};