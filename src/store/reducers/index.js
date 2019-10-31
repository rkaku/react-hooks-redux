import { combineReducers } from "redux"

import savings from './savings'
import debts from './debts'

export default combineReducers({ savings, debts })