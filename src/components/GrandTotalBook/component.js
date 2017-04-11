import React from 'react'
import './assets/style.css'

const GrandTotalBook = ({ books }) => (
  <div>
    <p className="p">Grand Total: {books.map(book => book.totalprice).reduce((p, i) => i > 0 ? p + i : p, 0)}</p>
  </div>
  )

export default GrandTotalBook