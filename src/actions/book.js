import TYPE from './types'

export const addBook = ({ isbn, name, price, quantity }) => ({
  type: TYPE.BOOK.ADD,
  payload: { isbn, name, price, quantity }
})
export const removeBook = isbn => ({
  type: TYPE.BOOK.REMOVE,
  payload: { isbn }
})