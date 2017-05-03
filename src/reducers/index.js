import { combineReducers } from 'redux'
import books from './books'
import searchs from './searchs'
import item from './item'

export const reducers = {
  books,
  searchs,
  item
}

export const rootReducers = combineReducers(reducers)
