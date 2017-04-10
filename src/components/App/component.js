import React from 'react'
import Example from '../BookInput'
import BookList from '../BookList'
import logo from './assets/logo.svg'
import './assets/style.css'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <div className="App-intro">
      Add New Book<br /><br />
      <Example />
      <BookList />
    </div>
  </div>
)

export default App