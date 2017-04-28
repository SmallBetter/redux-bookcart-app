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
    const currentState = []
    const expectedState = books
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.ADD,
      payload: {
        isbn: 51242577,
        name: 'Smallbetter 1',
        price: 200,
        quantity: 10
      }
    })
    expect(receiveState).toEqual(expectedState)
    expect(receiveState).not.toBe(expectedState)
  })

  it('TYPE.BOOK.ADD 2', () => {
    const currentState = books
    const expectedState = [
      ...books,
      {
        id: 2,
        isbn: 51242578,
        name: 'Smallbetter 2',
        price: 100,
        quantity: 10,
        totalprice: 1000,
        isediting: false,
        buy: false
      }
    ]
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.ADD,
      payload: {
        isbn: 51242578,
        name: 'Smallbetter 2',
        price: 100,
        quantity: 10
      }
    })
    expect(receiveState).toEqual(expectedState)
    expect(receiveState).not.toBe(expectedState)
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
  })

  it('TYPE.BOOK.REMOVE 2', () => {
    const currentState = books
    const expectedState = books
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.REMOVE,
      payload: {
        id: 0
      }
    })
    expect(receiveState).toEqual(expectedState)
    expect(receiveState).toBe(expectedState)
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
  })

  it('TYPE.BOOK.EDIT 2', () => {
    const currentState = books
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.EDIT,
      payload: {
        id: 0,
        name: 'Smallbetter 1',
        price: 999,
        quantity: 99
      }
    })
    expect(receiveState).toEqual(currentState)
    expect(receiveState).toBe(currentState)
  })

  it(TYPE.BOOK.TOGGLE, () => {
    const currentState = books
    const expectedState = [
      {
        id: 1,
        isbn: 51242577,
        name: 'Smallbetter 1',
        price: 200,
        quantity: 10,
        totalprice: 2000,
        isediting: true,
        buy: false
      }
    ]
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.TOGGLE,
      payload: {
        id: 1
      }
    })
    expect(receiveState).toEqual(expectedState)
    expect(receiveState).not.toBe(expectedState)
  })

  it('TYPE.BOOK.TOGGLE 2', () => {
    const currentState = books
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.TOGGLE,
      payload: {
        id: 0
      }
    })
    expect(receiveState).toEqual(currentState)
    expect(receiveState).toBe(currentState)
  })

  it(TYPE.BOOK.ADDBUY, () => {
    const currentState = books
    const expectedState = [
      {
        id: 1,
        isbn: 51242577,
        name: 'Smallbetter 1',
        price: 200,
        quantity: 10,
        totalprice: 2000,
        isediting: false,
        buy: true
      }
    ]

    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.ADDBUY,
      payload: {
        id: 1
      }
    })
    expect(receiveState).toEqual(expectedState)
    expect(receiveState).not.toBe(expectedState)
  })

  it('TYPE.BOOK.ADDBUY 2', () => {
    const currentState = books
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.ADDBUY,
      payload: {
        id: 0
      }
    })
    expect(receiveState).toEqual(currentState)
    expect(receiveState).toBe(currentState)
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
  })

  it('TYPE.BOOK.BUY 2', () => {
    const currentState = []
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.BUY,
      payload: {
        id: 0,
        quantity: 0
      }
    })
    expect(receiveState).toEqual(currentState)
    expect(receiveState).toBe(currentState)
  })

  it('initial', () => {
    const receiveState = booksReducer(undefined, {})

    expect(receiveState).toEqual(initialStore.books)
    expect(receiveState).toBe(initialStore.books)
  })
})