import React, { Component, PropTypes } from 'react'
import './assets/style.css'

class BookInput extends Component {

  state = {
    isbn: '',
    name: '',
    price: '',
    quantity: '',
    item: ''
  }

  handleisbn = event => {
    if (!isNaN(event.target.value) && event.target.value.length < 9) {
      this.setState({
        isbn: event.target.value
      })
    }
  }

  handlename = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleprice = event => {
    if (!isNaN(event.target.value)) {
      this.setState({
        price: event.target.value
      })
    }
  }

  handlequantity = event => {
    if (!isNaN(event.target.value)) {
      this.setState({
        quantity: event.target.value
      })
    }
  }

  Change = event => {
    this.setState({
      item: event.target.value
    })
  }

  handleClick = () => {
    const State = this.state
    if (State.isbn.length >= 8 && State.name.length > 0 &&
      State.price > 0 && State.quantity > 0 &&
      State.item !== 'Select an Option') { this.props.addBook({ ...this.state }) }
    this.setState({
      isbn: '',
      name: '',
      price: '',
      quantity: '',
      item: ''
    })
  }


  render() {
    return (
      <div className="div">
        <div>
          <label htmlFor="ISBN">ISBN :</label>
          <input type="text" id="ISBN" value={this.state.isbn} onChange={this.handleisbn} />
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
        <div className="form-group">
          <label htmlFor="select1" >Item</label>
          <select value={this.state.item} onChange={this.Change} className="form-control">
            <option value="select">Select an Option</option>
            <option value="Book">Book</option>
            <option value="It">It</option>
          </select>
        </div>
        <div>
          <button onClick={this.handleClick}>Add to list</button>
        </div>
      </div>
    )
  }
}

BookInput.propTypes = {
  addBook: PropTypes.func.isRequired
}

export default BookInput

