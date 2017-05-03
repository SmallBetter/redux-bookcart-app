import TYPE from './types'

export const showItem = (It, Book, home) => ({
  type: TYPE.SHOW.ITEM,
  payload: { It, Book, home }
})