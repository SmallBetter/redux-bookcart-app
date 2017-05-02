import React from 'react'
import BookInput from '../BookInput'
import BookList from '../BookList'
import logo from './assets/logo.svg'
import GrandTotalBook from '../GrandTotalBook'
import './assets/style.css'
import Page from '../Page'
import Login from '../Login'

const App = ({ pages }) => {
  const renderHome = () => {
    if (pages.home) {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Login />
            <Page />
          </div>
          <div className="App-intro">
            <br />
            <BookList />
            <GrandTotalBook />
          </div>
        </div>
      )
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Login />
          <Page />
        </div>
        <div className="App-intro">
          <br />
          <BookInput />
        </div>
      </div>
    )
  }

  return renderHome()
}

export default App