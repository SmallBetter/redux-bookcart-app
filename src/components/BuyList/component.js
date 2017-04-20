import React from 'react'
import './assets/style.css'
import BuyItem from '../BuyItem'

const BuyList = ({ buyitem }) => (
  <div className="buylist">
    BuyList
    <table className="magin">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {buyitem.map(buy => <BuyItem key={buy.id} {...buy} />)}
      </tbody>
    </table>
  </div>
)


export default BuyList