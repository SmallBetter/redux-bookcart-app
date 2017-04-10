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
        totalprice: action.payload.price * action.payload.quantity
      }]
    }
    default: {
      return books
    }
  }
}