import { initialStore } from '../store'


export default (books = initialStore.books, action) => {
  switch (action.type) {
    default: {
      return books
    }
  }
}