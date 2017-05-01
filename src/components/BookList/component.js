import React, { PropTypes } from 'react'
import './assets/style.css'
import BookItem from '../BookItem'
import SearchBook from '../SearchBook'


const BookList = ({ books, searchs }) => (
  <div>
    <div className="Search">
      <SearchBook />
    </div>
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
        {books
          .filter(book => book.name.includes(searchs.text))
          .map(book => <BookItem key={book.id} {...book} />)}
      </tbody>
    </table>
  </div>
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
  ).isRequired,
  searchs: PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired
}


export default BookList