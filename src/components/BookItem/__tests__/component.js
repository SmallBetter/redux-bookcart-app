import React from 'react'
import { shallow } from 'enzyme'
import BookItem from '../component'

describe('BookItem', () => {
  const defaultProps = {
    id: 1,
    isbn: 1234567,
    name: 'book1',
    price: 100,
    quantity: 10,
    totalprice: 1000,
    isediting: false,
    buy: false,
    removeBook: () => true,
    toggleBook: () => true,
    editBook: () => true,
    addBuyBook: () => true,
    buyBook: () => true
  }

  const setup = props => {
    const component = shallow(<BookItem {...defaultProps} />)
    component.setProps(props)
    return component
  }

  it('default', () => {
    const component = setup()

    expect(component.find('td')).toHaveLength(6)
    expect(component.find(`td[children=${defaultProps.isbn}]`)).toHaveLength(1)
    expect(component.find(`td[children="${defaultProps.name}"]`)).toHaveLength(1)
    expect(component.find(`td[children=${defaultProps.price}]`)).toHaveLength(1)
    expect(component.find(`td[children=${defaultProps.quantity}]`)).toHaveLength(1)
    expect(component.find(`td[children=${defaultProps.totalprice}]`)).toHaveLength(1)
    expect(component.find('button[children="Edit"]')).toHaveLength(1)
    expect(component.find('button[children="Delete"]')).toHaveLength(1)
    expect(component.find('button[children="Add Buy"]')).toHaveLength(1)
  })

  it('buy', () => {
    const component = setup({ buy: true })

    expect(component.find('td')).toHaveLength(6)
    expect(component.find(`td[children=${defaultProps.isbn}]`)).toHaveLength(1)
    expect(component.find(`td[children="${defaultProps.name}"]`)).toHaveLength(1)
    expect(component.find(`td[children=${defaultProps.price}]`)).toHaveLength(1)
    expect(component.find(`td input[value=${defaultProps.quantity}]`)).toHaveLength(1)
    expect(component.find(`td[children=${defaultProps.totalprice}]`)).toHaveLength(1)
    expect(component.find('button[children="Buy"]')).toHaveLength(1)
  })

  it('isediting', () => {
    const component = setup({ isediting: true })

    expect(component.find('td')).toHaveLength(6)
    expect(component.find(`td[children=${defaultProps.isbn}]`)).toHaveLength(1)
    expect(component.find(`td input[value="${defaultProps.name}"]`)).toHaveLength(1)
    expect(component.find(`td input[value=${defaultProps.price}]`)).toHaveLength(1)
    expect(component.find(`td input[value=${defaultProps.quantity}]`)).toHaveLength(1)
    expect(component.find(`td[children=${defaultProps.totalprice}]`)).toHaveLength(1)
    expect(component.find('button[children="Save"]')).toHaveLength(1)
    expect(component.find('button[children="Delete"]')).toHaveLength(1)
  })

  it('props change', () => {
    const newProps = {
      isbn: 5789,
      name: 'book1',
      price: 200,
      quantity: 20,
      totalprice: 2000
    }
    const component = setup(newProps)

    expect(component.find('td')).toHaveLength(6)
    expect(component.find(`td[children=${newProps.isbn}]`)).toHaveLength(1)
    expect(component.find(`td[children="${newProps.name}"]`)).toHaveLength(1)
    expect(component.find(`td[children=${newProps.price}]`)).toHaveLength(1)
    expect(component.find(`td[children=${newProps.quantity}]`)).toHaveLength(1)
    expect(component.find(`td[children=${newProps.totalprice}]`)).toHaveLength(1)
    expect(component.find('button[children="Edit"]')).toHaveLength(1)
    expect(component.find('button[children="Delete"]')).toHaveLength(1)
  })

  it('handleprice', () => {
    const component = setup({ isediting: true })
    expect(component.state('price')).toBe(defaultProps.price)

    component.find(`td input[value=${defaultProps.price}]`).simulate('change', { target: { value: 'book' } })
    expect(component.state('price')).toBe(defaultProps.price)

    component.find(`td input[value=${defaultProps.price}]`).simulate('change', { target: { value: 5000 } })
    expect(component.state('price')).toBe(5000)
  })

  it('handlequantity', () => {
    const component = setup({ isediting: true })
    expect(component.state('quantity')).toBe(defaultProps.quantity)

    component.find(`td input[value=${defaultProps.quantity}]`).simulate('change', { target: { value: 'small' } })
    expect(component.state('quantity')).toBe(defaultProps.quantity)

    component.find(`td input[value=${defaultProps.quantity}]`).simulate('change', { target: { value: 100 } })
    expect(component.state('quantity')).toBe(100)
  })

  it('handlename', () => {
    const component = setup({ isediting: true })
    expect(component.state('name')).toBe(defaultProps.name)

    component.find(`td input[value='${defaultProps.name}']`).simulate('change', { target: { value: 'small' } })
    expect(component.state('name')).toBe('small')
  })


  it('handleClick', () => {
    const editBook = jest.fn()
    const component = setup({ isediting: true, editBook })

    component.find('button[children="Save"]').simulate('click')
    expect(editBook).toHaveBeenCalledTimes(1)

    editBook.mockReset()
    component.setState({ name: '' })
    component.find('button[children="Save"]').simulate('click')
    expect(editBook).toHaveBeenCalledTimes(0)
  })

  it('buyClick', () => {
    const buyBook = jest.fn()
    const component = setup({ buy: true, buyBook })

    component.find('button[children="Buy"]').simulate('click')
    expect(buyBook).toHaveBeenCalledTimes(1)

    buyBook.mockReset()
    component.setState({ quantity: 11 })
    component.find('button[children="Buy"]').simulate('click')
    expect(buyBook).toHaveBeenCalledTimes(0)
  })

  it('remove', () => {
    const removeBook = jest.fn()
    const component = setup({ isediting: true, removeBook })

    component.find('button[children="Delete"]').simulate('click')
    expect(removeBook).toHaveBeenCalledTimes(1)
  })

  it('remove', () => {
    const removeBook = jest.fn()
    const component = setup({ removeBook })

    component.find('button[children="Delete"]').simulate('click')
    expect(removeBook).toHaveBeenCalledTimes(1)
  })

  it('addBuy', () => {
    const addBuyBook = jest.fn()
    const component = setup({ addBuyBook })

    component.find('button[children="Add Buy"]').simulate('click')
    expect(addBuyBook).toHaveBeenCalledTimes(1)
  })

  it('toggle', () => {
    const toggleBook = jest.fn()
    const component = setup({ toggleBook })

    component.find('button[children="Edit"]').simulate('click')
    expect(toggleBook).toHaveBeenCalledTimes(1)
  })
})