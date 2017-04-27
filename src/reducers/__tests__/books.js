import booksReducer from '../books'
import { initialStore } from '../../store'
import TYPE from '../../actions/types'

describe('Books Reducer', () => {
  const books = [
    {
      id: 1,
      isbn: 51242577,
      name: 'Smallbetter 1',
      price: 200,
      quantity: 10,
      totalprice: 2000,
      isediting: false,
      buy: false
    }
  ]

  it(TYPE.BOOK.ADD, () => {
    const currentState = books
    const expectedState = []
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.ADD,
      payload: {
        isbn: 99999999,
        name: 'Smallbetter 4',
        price: 999,
        quantity: 99
      }
    })
    expect(receiveState).not.toEqual(expectedState)
    expect(receiveState).not.toBe(expectedState)
    expect(receiveState).not.toBe(currentState)
    expect(receiveState).not.toBe(books)
  })

  it(TYPE.BOOK.REMOVE, () => {
    const currentState = books
    const expectedState = []
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.REMOVE,
      payload: {
        id: 1
      }
    })
    expect(receiveState).toEqual(expectedState)
    expect(receiveState).not.toBe(expectedState)
    expect(receiveState).not.toBe(currentState)
    expect(receiveState).not.toBe(books)
  })

  it(TYPE.BOOK.REMOVE, () => {
    const currentState = books
    const expectedState = []
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.REMOVE,
      payload: {
        id: 0
      }
    })
    expect(receiveState).not.toEqual(expectedState)
    expect(receiveState).toEqual(currentState)
    expect(receiveState).not.toBe(expectedState)
    expect(receiveState).not.toBe(currentState)
    expect(receiveState).not.toBe(books)
  })

  it(TYPE.BOOK.EDIT, () => {
    const currentState = books
    const expectedState = [
      {
        id: 1,
        isbn: 51242577,
        name: 'Smallbetter 1',
        price: 999,
        quantity: 99,
        totalprice: 98901,
        isediting: false,
        buy: false
      }
    ]
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.EDIT,
      payload: {
        id: 1,
        name: 'Smallbetter 1',
        price: 999,
        quantity: 99
      }
    })
    expect(receiveState).toEqual(expectedState)
    expect(receiveState).not.toBe(expectedState)
    expect(receiveState).not.toBe(currentState)
    expect(receiveState).not.toBe(books)
  })

  it(TYPE.BOOK.TOGGLE, () => {
    const currentState = books
    const expectedState = []
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.TOGGLE,
      payload: {
        id: 1
      }
    })
    expect(receiveState).not.toEqual(expectedState)
    expect(receiveState).not.toBe(expectedState)
    expect(receiveState).not.toBe(currentState)
    expect(receiveState).not.toBe(books)
  })

  it(TYPE.BOOK.ADDBUY, () => {
    const currentState = books
    const expectedState = []
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.ADDBUY,
      payload: {
        id: 1
      }
    })
    expect(receiveState).not.toEqual(expectedState)
    expect(receiveState).not.toBe(expectedState)
    expect(receiveState).not.toBe(currentState)
    expect(receiveState).not.toBe(books)
  })

  it(TYPE.BOOK.BUY, () => {
    const currentState = books
    const expectedState = [
      {
        id: 1,
        isbn: 51242577,
        name: 'Smallbetter 1',
        price: 200,
        quantity: 9,
        totalprice: 1800,
        isediting: false,
        buy: false
      }
    ]
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.BUY,
      payload: {
        id: 1,
        quantity: 1
      }
    })
    expect(receiveState).toEqual(expectedState)
    expect(receiveState).not.toBe(expectedState)
    expect(receiveState).not.toBe(currentState)
    expect(receiveState).not.toBe(books)
  })

  it(TYPE.BOOK.BUY, () => {
    const currentState = books
    const expectedState = [
      {
        id: 1,
        isbn: 51242577,
        name: 'Smallbetter 1',
        price: 200,
        quantity: 9,
        totalprice: 1800,
        isediting: false,
        buy: false
      }
    ]
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.BUY,
      payload: {
        id: 1,
        quantity: 1
      }
    })
    expect(receiveState).toEqual(expectedState)
    expect(receiveState).not.toBe(expectedState)
    expect(receiveState).not.toBe(currentState)
    expect(receiveState).not.toBe(books)
  })

  it('initial', () => {
    const receiveState = booksReducer(undefined, {})

    expect(receiveState).toEqual(initialStore.books)
    expect(receiveState).toBe(initialStore.books)
  })
})