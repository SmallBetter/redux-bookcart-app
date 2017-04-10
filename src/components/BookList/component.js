import React from 'react'
import './assets/style.css'
import BookItem from '../BookItem'


const BookList = ({ books }) => {
  return (
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
        {books.map(book => <BookItem key={book.isbn} {...book} />)}
      </tbody>
    </table>
  )
}

export default BookList