import { initialStore } from '../store'


export default (buyitem = initialStore.buyitem, action) => {
  switch (action.type) {
    default: {
      return buyitem
    }
  }
}