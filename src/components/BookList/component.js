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
    isbn: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    totalprice: PropTypes.number.isRequired,
    isediting: PropTypes.bool.isRequired
  })
  ).isRequired
}


export default BookList