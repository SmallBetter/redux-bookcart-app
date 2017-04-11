import React, { Component } from 'react'
import './assets/style.css'

class BookItem extends Component {

  state = {
    isbn: this.props.isbn,
    name: this.props.name,
    price: this.props.price,
    quantity: this.props.quantity
  }

  handlename = event => {
    this.setState({
      name: event.target.value
    })
  }
  handleprice = event => {
    this.setState({
      price: event.target.value
    })
  }
  handlequantity = event => {
    this.setState({
      quantity: event.target.value
    })
  }

  handleClick = () => {
    this.props.editBook({ ...this.state })
    this.setState({
      isbn: this.props.isbn,
      name: this.props.name,
      price: this.props.price,
      quantity: this.props.quantity
    })
  }

  renderForm = () => {
    if (!this.props.isediting) {
      return (<tr>
        <td>{this.props.isbn}</td>
        <td><input type="text" value={this.state.name} onChange={this.handlename} /></td>
        <td><input type="text" value={this.state.price} onChange={this.handleprice} /></td>
        <td><input type="text" value={this.state.quantity} onChange={this.handlequantity} /></td>
        <td>{this.props.totalprice}</td>
        <td>
          <button onClick={this.handleClick}>Save</button>
          <button onClick={() => this.props.removeBook(this.props.isbn)}>Delete</button>
        </td>
      </tr>)
    }
    return (
      <tr>
        <td>{this.props.isbn}</td>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
        <td>{this.props.quantity}</td>
        <td>{this.props.totalprice}</td>
        <td>
          <button onClick={() => this.props.toggleBook(this.props.isbn)}>Edit</button>
          <button onClick={() => this.props.removeBook(this.props.isbn)}>Delete</button>
        </td>
      </tr>
    )
  }

  render() {
    return this.renderForm()
  }
  }

export default BookItem