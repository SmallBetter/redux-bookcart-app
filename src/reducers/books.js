import { initialStore } from '../store'
import TYPE from '../actions/types'


export default (books = initialStore.books, action) => {
  switch (action.type) {
    case TYPE.BOOK.REMOVE: {
      return books.filter(book => book.isbn ? book.isbn !== action.payload.isbn : book)
    }

    case TYPE.BOOK.ADD: {
      return [...books, {
        isbn: action.payload.isbn,
        name: action.payload.name,
        price: action.payload.price,
        quantity: action.payload.quantity,
        totalprice: action.payload.price * action.payload.quantity,
        isediting: true
      }]
    }

    case TYPE.BOOK.TOGGLE: {
      return books.map(book =>
        book.isbn === action.payload.isbn ? { ...book, isediting: !book.isediting } : book)
    }

    case TYPE.BOOK.EDIT: {
      return books.map(book => book.isbn === action.payload.isbn ?
      {
        ...book,
        isbn: action.payload.isbn,
        name: action.payload.name,
        price: action.payload.price,
        quantity: action.payload.quantity,
        totalprice: action.payload.price * action.payload.quantity,
        isediting: true
      } : book)
    }

    default: {
      return books
    }
  }
}