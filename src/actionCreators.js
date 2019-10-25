import * as types from './actionTypes';

export const deposit = () => {
  return { type: types.DEPOSIT };
};

export const withdraw = () => {
  return { type: types.WITHDRAW };
}

export const loan = () => {
  return { type: types.APPLY };
};