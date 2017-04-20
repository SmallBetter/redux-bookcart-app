export const initialStore = {
  buyitem: [{
    id: 1,
    name: 'Smallbetter 1',
    price: 200,
    quantity: 4,
    totalprice: 800
  }],
  books: [
    {
      id: 1,
      isbn: 51242577,
      name: 'Smallbetter 1',
      price: 200,
      quantity: 10,
      totalprice: 2000,
      isediting: false,
      buy: false
    },
    {
      id: 2,
      isbn: 51242550,
      name: 'Smallbetter 2',
      price: 100,
      quantity: 2,
      totalprice: 200,
      isediting: false,
      buy: true
    },
    {
      id: 3,
      isbn: 51242547,
      name: 'Smallbetter 3',
      price: 100,
      quantity: 5,
      totalprice: 500,
      isediting: true,
      buy: false
    }
  ]
}