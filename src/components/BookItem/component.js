import React, { Component, PropTypes } from 'react'
import './assets/style.css'

class BookItem extends Component {

  state = {
    id: this.props.id,
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

  handleClick = () => {
    const { name, price, quantity } = { ...this.state }
    if (name.length > 0 && price > 0 && quantity > 0) {
      this.props.editBook({ ...this.state })
    }
  }

  renderForm = () => {
    if (!this.props.isediting) {
      return (<tr>
        <td>{this.props.isbn}</td>
        <td><input type="text" className="item" value={this.state.name} onChange={this.handlename} /></td>
        <td><input type="text" className="item" value={this.state.price} onChange={this.handleprice} /></td>
        <td><input type="text" className="item" value={this.state.quantity} onChange={this.handlequantity} /></td>
        <td>{this.props.totalprice}</td>
        <td>
          <button onClick={this.handleClick}>Save</button>
          <button onClick={() => this.props.removeBook(this.props.id)}>Delete</button>
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
          <button onClick={() => this.props.toggleBook(this.props.id)}>Edit</button>
          <button onClick={() => this.props.removeBook(this.props.id)}>Delete</button>
        </td>
      </tr>
    )
  }

  render() {
    return this.renderForm()
  }
  }

BookItem.propTypes = {
  id: PropTypes.number.isRequired,
  isbn: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  totalprice: PropTypes.number.isRequired,
  isediting: PropTypes.bool.isRequired,
  removeBook: PropTypes.func.isRequired,
  toggleBook: PropTypes.func.isRequired,
  editBook: PropTypes.func.isRequired
}

export default BookItem