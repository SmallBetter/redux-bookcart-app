import { combineReducers } from 'redux'
import books from './books'
import buyitem from './buyitem'

export const reducers = {
  books,
  buyitem
}

export const rootReducers = combineReducers(reducers)
