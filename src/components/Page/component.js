import React from 'react'
import './assets/style.css'

const Page = ({ toggerHome, showItem }) => (
  <div className="divbutton">
    <button className="but" onClick={() => toggerHome(true)}>Buy</button>
    <button className="but" onClick={() => toggerHome(false)}>Sell</button>
    <button className="but" onClick={() => showItem(true, true)}>All</button>
    <button className="but" onClick={() => showItem(false, true)}>Book</button>
    <button className="but" onClick={() => showItem(true, false)}>It</button>
  </div>
  )

export default Page