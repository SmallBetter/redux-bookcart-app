import { initialStore } from '../store'
import TYPE from '../actions/types'

export default (pages = initialStore.pages, action) => {
  switch (action.type) {
    case TYPE.PAGES.HOME: {
      return {
        home: action.payload.home
      }
    }
    default: {
      return pages
    }
  }
}