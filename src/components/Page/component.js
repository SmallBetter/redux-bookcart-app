import React from 'react'
import './assets/style.css'

const Page = ({ showItem }) => (
  <div className="divbutton">
    <button className="but" onClick={() => showItem(true, true, true)}>Home</button>
    <button className="but" onClick={() => showItem(false, false, false)}>Sell</button>
    <button className="but" onClick={() => showItem(false, true, true)}>Book</button>
    <button className="but" onClick={() => showItem(true, false, true)}>It</button>
  </div>
  )

export default Page