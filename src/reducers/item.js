import { initialStore } from '../store'
import TYPE from '../actions/types'

export default (item = initialStore.item, action) => {
  switch (action.type) {
    case TYPE.SHOW.ITEM: {
      return {
        It: action.payload.It,
        Book: action.payload.Book,
        home: action.payload.home
      }
    }
    default: {
      return item
    }
  }
}