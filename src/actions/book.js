import TYPE from './types'

export const addBook = ({ isbn, name, price, quantity }) => ({
  type: TYPE.BOOK.ADD,
  payload: { isbn, name, price, quantity }
})
export const removeBook = isbn => ({
  type: TYPE.BOOK.REMOVE,
  payload: { isbn }
})
export const toggleBook = isbn => ({
  type: TYPE.BOOK.TOGGLE,
  payload: { isbn }
})
export const editBook = ({ isbn, name, price, quantity }) => ({
  type: TYPE.BOOK.EDIT,
  payload: { isbn, name, price, quantity }
})
