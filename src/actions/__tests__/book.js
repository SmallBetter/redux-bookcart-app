/* eslint-disable prefer-arrow-callback */
import { addBook, removeBook, toggleBook, editBook, addBuyBook, buyBook } from '../book'
import TYPE from '../types'


describe('Books Reducer', () => {
  describe('addBook', () => {
    it('', () => {
      const action = addBook()

      expect(action.type).toBe(TYPE.AUTH.ADD)
      expect(action.payload).toBe(undefined)
    })
  })
})