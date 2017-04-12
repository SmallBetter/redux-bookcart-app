import React, { PropTypes } from 'react'
import './assets/style.css'

const GrandTotalBook = ({ books }) => (
  <div>
    <p className="p">Grand Total: {books.map(book => book.totalprice).reduce((p, i) => i > 0 ? p + i : p, 0)}</p>
  </div>
  )

GrandTotalBook.propTypes = {
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

export default GrandTotalBook