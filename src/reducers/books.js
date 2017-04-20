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
        isbn: +action.payload.isbn,
        name: action.payload.name,
        price: +action.payload.price,
        quantity: +action.payload.quantity,
        totalprice: action.payload.price * action.payload.quantity,
        isediting: false,
        buy: false
      }]
    }

    case TYPE.BOOK.TOGGLE: {
      return books.map(book =>
        book.id === action.payload.id ? { ...book, isediting: !book.isediting } : book)
    }

    case TYPE.BOOK.ADDBUY: {
      return books.map(book =>
        book.id === action.payload.id ? { ...book, buy: !book.buy } : book)
    }

    case TYPE.BOOK.EDIT: {
      return books.map(book => book.id === action.payload.id ?
      {
        ...book,
        id: action.payload.id,
        isbn: action.payload.isbn,
        name: action.payload.name,
        price: +action.payload.price,
        quantity: +action.payload.quantity,
        totalprice: action.payload.price * action.payload.quantity,
        isediting: false,
        buy: false
      } : book)
    }

    case TYPE.BOOK.BUY: {
      return books.map(book => book.id === action.payload.id ?
      {
        ...book,
        price: +action.payload.price,
        quantity: (book.quantity - action.payload.quantity),
        totalprice: action.payload.price * (book.quantity - action.payload.quantity),
        isediting: false,
        buy: false
      } : book)
    }

    default: {
      return books
    }
  }
}