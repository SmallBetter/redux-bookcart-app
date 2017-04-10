import React from 'react'
import './assets/style.css'

const BookItem = ({ isbn, name, price, quantity, totalprice, removeBook }) => {
  return (
    <tr>
      <td>{isbn}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{totalprice}</td>
      <td>
        <button>Edit</button>
        <button onClick={() => removeBook(isbn)}>Delete</button>
      </td>
    </tr>
  )
}

export default BookItem