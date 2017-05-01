import React from 'react'
import BookInput from '../BookInput'
import BookList from '../BookList'
import logo from './assets/logo.svg'
import './assets/style.css'
import GrandTotalBook from '../GrandTotalBook'
import Page from '../Page'

const App = ({ pages }) => {
  const renderHome = () => {
    if (pages.home) {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
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
          <h2>Welcome to React</h2>
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