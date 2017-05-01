import { combineReducers } from 'redux'
import books from './books'
import searchs from './searchs'
import pages from './pages'

export const reducers = {
  books,
  searchs,
  pages
}

export const rootReducers = combineReducers(reducers)
