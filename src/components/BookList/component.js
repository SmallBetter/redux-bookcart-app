import React, { PropTypes } from 'react'
import './assets/style.css'
import BookItem from '../BookItem'


const BookList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>ISBN</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {books.map(book => <BookItem key={book.id} {...book} />)}
    </tbody>
  </table>
  )

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    isbn: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    totalprice: PropTypes.number.isRequired,
    isediting: PropTypes.bool.isRequired
  })
  ).isRequired
}


export default BookList