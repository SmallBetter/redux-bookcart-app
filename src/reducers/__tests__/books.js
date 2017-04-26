import booksReducer from '../books'
import { initialStore } from '../../store'
import TYPE from '../../actions/types'

describe('Books Reducer', () => {
  it(TYPE.BOOK.ADD, () => {
    const currentState = initialStore.books
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
    expect(receiveState).not.toBe(expectedState)
  })

  it(TYPE.BOOK.REMOVE, () => {
    const currentState = initialStore.books
    const expectedState = []
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.REMOVE,
      payload: {
        id: 1
      }
    })
    expect(receiveState).not.toBe(expectedState)
  })

  it(TYPE.BOOK.EDIT, () => {
    const currentState = initialStore.books
    const expectedState = []
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.EDIT,
      payload: {
        id: 1,
        name: 'Smallbetter 4',
        price: 999,
        quantity: 99
      }
    })
    expect(receiveState).not.toBe(expectedState)
  })

  it(TYPE.BOOK.TOGGLE, () => {
    const currentState = initialStore.books
    const expectedState = []
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.TOGGLE,
      payload: {
        id: 1
      }
    })
    expect(receiveState).not.toBe(expectedState)
  })

  it(TYPE.BOOK.ADDBUY, () => {
    const currentState = initialStore.books
    const expectedState = []
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.ADDBUY,
      payload: {
        id: 1
      }
    })
    expect(receiveState).not.toBe(expectedState)
  })

  it(TYPE.BOOK.BUY, () => {
    const currentState = initialStore.books
    const expectedState = []
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.BUY,
      payload: {
        id: 1,
        quantity: 1
      }
    })
    expect(receiveState).not.toBe(expectedState)
  })

  it('initial', () => {
    const receiveState = booksReducer(undefined, {})

    expect(receiveState).toEqual(initialStore.books)
    expect(receiveState).toBe(initialStore.books)
  })
})