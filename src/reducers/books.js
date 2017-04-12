import { initialStore } from '../store'
import TYPE from '../actions/types'


export default (books = initialStore.books, action) => {
  switch (action.type) {
    case TYPE.BOOK.REMOVE: {
      return books.filter(book => book.id ? book.id !== action.payload.id : book)
    }

    case TYPE.BOOK.ADD: {
      return [...books, {
        id: books.length ? books[books.length - 1].id + 1 : 1,
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
        book.id === action.payload.id ? { ...book, isediting: !book.isediting } : book)
    }

    case TYPE.BOOK.EDIT: {
      return books.map(book => book.id === action.payload.id ?
      {
        ...book,
        id: action.payload.id,
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