import TYPE from './types'

export const addBook = ({ isbn, name, price, quantity }) => ({
  type: TYPE.BOOK.ADD,
  payload: { isbn, name, price, quantity }
})
export const removeBook = id => ({
  type: TYPE.BOOK.REMOVE,
  payload: { id }
})
export const toggleBook = id => ({
  type: TYPE.BOOK.TOGGLE,
  payload: { id }
})
export const editBook = ({ id, name, price, quantity }) => ({
  type: TYPE.BOOK.EDIT,
  payload: { id, name, price, quantity }
})
export const addBuyBook = id => ({
  type: TYPE.BOOK.ADDBUY,
  payload: { id }
})
export const buyBook = ({ id, quantity }) => ({
  type: TYPE.BOOK.BUY,
  payload: { id, quantity }
})
