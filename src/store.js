export const initialStore = {
  pages: {
    home: true
  },

  item: {
    It: true,
    Book: false
  },

  searchs: {
    text: ''
  },

  books: [
    {
      id: 1,
      isbn: 51242577,
      name: 'Computer',
      price: 200,
      quantity: 10,
      totalprice: 2000,
      isediting: false,
      buy: false,
      It: true
    },
    {
      id: 2,
      isbn: 51242578,
      name: 'Smallbetter 2',
      price: 200,
      quantity: 10,
      totalprice: 2000,
      isediting: false,
      buy: false,
      Book: true
    }
  ]
}