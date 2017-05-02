import React, { Component } from 'react'
import './assets/style.css'

class Login extends Component {

  state = {
    Username: '',
    password: ''
  }

  handleUser = event => {
    this.setState({
      Username: event.target.value
    })
  }

  handlepass = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleClick = () => {
    const State = this.state
    if (State.Username.length >= 6 &&
      State.password.length >= 6) {
      this.setState({
        Username: '',
        password: ''
      })
    }
  }

  render() {
    return (
      <div className="formLogin">
        <label htmlFor="Username" > Username</label>
        <input type="text" id="Username" value={this.state.Username} onChange={this.handleUser} />
        <label htmlFor="password"> password</label>
        <input type="text" id="password" value={this.state.password} onChange={this.handlepass} />
        <input type="button" value="Longin" onClick={this.handleClick} />
      </div>
    )
  }
}


export default Login