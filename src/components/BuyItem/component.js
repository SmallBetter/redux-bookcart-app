import React from 'react'
import './assets/style.css'

const BuyItem = ({ id, name, quantity, price, totalprice }) => (
  <tr>
    <td className="weight">{name}</td>
    <td className="weight">{price}</td>
    <td className="weight">{quantity}</td>
    <td className="weight">{totalprice}</td>
    <td>
      <button>Edit</button>
      <button>X</button>
    </td>
  </tr>
)


export default BuyItem