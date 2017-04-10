import React from 'react'
import './assets/style.css'

const BookItem = ({ isbn, name, price, quantity }) => (
  <tr>
    <td>{isbn}</td>
    <td>{name}</td>
    <td>{price}</td>
    <td>{quantity}</td>
    <td />
    <td>
      <button>Edit</button>
      <button>Delete</button>
    </td>
  </tr>
)

export default BookItem