import { combineReducers } from 'redux'
import books from './books'
import searchs from './searchs'
import pages from './pages'
import item from './item'

export const reducers = {
  books,
  searchs,
  pages,
  item
}

export const rootReducers = combineReducers(reducers)
