import React from 'react'
import './assets/style.css'

const BookInput = () => (
  <form>
    <div>
      <label htmlFor="ISBN">ISBN :</label>
      <input type="text" id="ISBN" />
    </div>
    <div>
      <label htmlFor="Name">Name :</label>
      <input type="text" id="Name" />
    </div>
    <div>
      <label htmlFor="Price">Price :</label>
      <input type="text" id="Price" />
    </div>
    <div>
      <label htmlFor="Quantity">Quantity :</label>
      <input type="text" id="Quantity" />
    </div>
    <div>
      <button>Add to list</button>
    </div>
  </form>
)

export default BookInput