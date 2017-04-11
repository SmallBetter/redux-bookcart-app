import React, { Component } from 'react'
import './assets/style.css'

class BookInput extends Component {

  state = {
    isbn: '',
    name: '',
    price: '',
    quantity: ''
  }

  handleisbn = event => {
    this.setState({
      isbn: event.target.value
    })
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
    if (this.state.isbn.length >= 7) {
      this.props.addBook({ ...this.state })
    }
    this.setState({
      isbn: '',
      name: '',
      price: '',
      quantity: ''
    })
  }


  render() {
    return (
      <div className="div">
        <div>
          <label htmlFor="ISBN">ISBN :</label>
          <input type="text" id="ISBN" value={this.state.isbn}onChange={this.handleisbn} />
        </div>
        <div>
          <label htmlFor="Name">Name :</label>
          <input type="text" id="Name" value={this.state.name} onChange={this.handlename} />
        </div>
        <div>
          <label htmlFor="Price">Price :</label>
          <input type="text" id="Price" value={this.state.price} onChange={this.handleprice} />
        </div>
        <div>
          <label htmlFor="Quantity">Quantity :</label>
          <input type="text" id="Quantity" value={this.state.quantity} onChange={this.handlequantity} />
        </div>
        <div>
          <button onClick={this.handleClick}>Add to list</button>
        </div>
      </div>
    )
  }
}

export default BookInput

