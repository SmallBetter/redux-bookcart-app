export const initialStore = {
  item: {
    It: true,
    Book: false,
    home: true
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