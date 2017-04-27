import { initialStore } from '../store'
import TYPE from '../actions/types'


export default (books = initialStore.books, action) => {
  switch (action.type) {
    case TYPE.BOOK.REMOVE: {
      if (books.some(book => book.id === action.payload.id)) {
        return books.filter(book => book.id !== action.payload.id)
      }
      return books
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
      if (books.some(book => book.id === action.payload.id)) {
        return books.map(book =>
        book.id === action.payload.id ? { ...book, isediting: !book.isediting } : book)
      }
      return books
    }

    case TYPE.BOOK.ADDBUY: {
      if (books.some(book => book.id === action.payload.id)) {
        return books.map(book =>
          book.id === action.payload.id ? { ...book, buy: !book.buy } : book)
      }
      return books
    }

    case TYPE.BOOK.EDIT: {
      if (books.some(book => book.id === action.payload.id)) {
        return books.map(book => book.id === action.payload.id ?
        {
          ...book,
          name: action.payload.name,
          price: +action.payload.price,
          quantity: +action.payload.quantity,
          totalprice: action.payload.price * action.payload.quantity,
          isediting: false,
          buy: false
        } : book)
      }
      return books
    }

    case TYPE.BOOK.BUY: {
      if (books.some(book => book.id === action.payload.id)) {
        return books.map(book => book.id === action.payload.id ?
        {
          ...book,
          price: book.price,
          quantity: (book.quantity - action.payload.quantity),
          totalprice: book.price * (book.quantity - action.payload.quantity),
          isediting: false,
          buy: false
        } : book)
      }
      return books
    }

    default: {
      return books
    }
  }
}