import { initialStore } from '../store'


export default (book = initialStore.book, action) => {
  switch (action.type) {
    default: {
      return book
    }
  }
}