import TYPE from './types'

export const showItem = (It, Book) => ({
  type: TYPE.SHOW.ITEM,
  payload: { It, Book }
})