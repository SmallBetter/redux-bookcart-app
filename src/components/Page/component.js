import React from 'react'
import './assets/style.css'

const Page = ({ toggerHome }) => {
  console.log(toggerHome)
  return (
    <div className="divbutton">
      <button className="but" onClick={() => toggerHome(true)}>Home</button>
      <button className="but" onClick={() => toggerHome(false)}>Sell</button>
    </div>
  )
}

export default Page