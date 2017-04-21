import React from 'react'
import BookInput from '../BookInput'
import BookList from '../BookList'
import logo from './assets/logo.svg'
import './assets/style.css'
import GrandTotalBook from '../GrandTotalBook'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <div className="App-intro">
      Add New Book<br /><br />
      <BookInput />
      <BookList />
      <GrandTotalBook />
    </div>
  </div>
)

export default App