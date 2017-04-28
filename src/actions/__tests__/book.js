import { addBook, removeBook, toggleBook, editBook, addBuyBook, buyBook } from '../book'
import TYPE from '../types'


describe('Books Reducer', () => {
  const id = { id: 1 }
  describe('addBook', () => {
    const book = {
      isbn: 12345678,
      name: 'small',
      price: 10,
      quantity: 10
    }
    it('addBook', () => {
      const action = addBook(book)

      expect(action.type).toBe(TYPE.BOOK.ADD)
      expect(action.payload).toEqual(book)
      expect(action.payload).not.toBe(book)
    })
  })

  describe('editBook', () => {
    const book = {
      id: 1,
      name: 'small',
      price: 10,
      quantity: 10
    }
    it('editBook', () => {
      const action = editBook(book)

      expect(action.type).toBe(TYPE.BOOK.EDIT)
      expect(action.payload).toEqual(book)
      expect(action.payload).not.toBe(book)
    })
  })

  describe('buyBook', () => {
    const book = {
      id: 1,
      quantity: 10
    }
    it('buyBook', () => {
      const action = buyBook(book)

      expect(action.type).toBe(TYPE.BOOK.BUY)
      expect(action.payload).toEqual(book)
      expect(action.payload).not.toBe(book)
    })
  })

  describe('removeBook', () => {
    it('removeBook', () => {
      const action = removeBook(1)

      expect(action.type).toBe(TYPE.BOOK.REMOVE)
      expect(action.payload).toEqual(id)
      expect(action.payload).not.toBe(id)
    })
  })

  describe('toggleBook', () => {
    it('toggleBook', () => {
      const action = toggleBook(1)

      expect(action.type).toBe(TYPE.BOOK.TOGGLE)
      expect(action.payload).toEqual(id)
      expect(action.payload).not.toBe(id)
    })
  })

  describe('addBuyBook', () => {
    it('addBuyBook', () => {
      const action = addBuyBook(1)

      expect(action.type).toBe(TYPE.BOOK.ADDBUY)
      expect(action.payload).toEqual(id)
      expect(action.payload).not.toBe(id)
    })
  })
})