import React from 'react'
import { shallow } from 'enzyme'
import BookInput from '../component'

describe('BookInput', () => {
  const defaultProps = {
    addBook: () => true
  }

  const setup = props => {
    const component = shallow(<BookInput {...defaultProps} />)
    component.setProps(props)
    return component
  }

  it('default', () => {
    const component = setup()

    expect(component.find('div')).toHaveLength(6)
    expect(component.find('input[id="ISBN"]')).toHaveLength(1)
    expect(component.find('input[id="Name"]')).toHaveLength(1)
    expect(component.find('input[id="Price"]')).toHaveLength(1)
    expect(component.find('input[id="Quantity"]')).toHaveLength(1)
    expect(component.find('button[children="Add to list"]')).toHaveLength(1)
  })

  it('handleisbn', () => {
    const component = setup()

    component.find('input[id="ISBN"]').simulate('change', { target: { value: 'small' } })
    expect(component.state('isbn')).toBe('')

    component.find('input[id="ISBN"]').simulate('change', { target: { value: '12345678' } })
    expect(component.state('isbn')).toBe('12345678')

    component.find('input[id="ISBN"]').simulate('change', { target: { value: '123456789' } })
    expect(component.state('isbn')).toBe('12345678')
  })

  it('handlename', () => {
    const component = setup()

    component.find('input[id="Name"]').simulate('change', { target: { value: 'small' } })
    expect(component.state('name')).toBe('small')
  })

  it('handleprice', () => {
    const component = setup()

    component.find('input[id="Price"]').simulate('change', { target: { value: 'small' } })
    expect(component.state('price')).toBe('')

    component.find('input[id="Price"]').simulate('change', { target: { value: '1234567890' } })
    expect(component.state('price')).toBe('1234567890')
  })

  it('handlequantity', () => {
    const component = setup()

    component.find('input[id="Quantity"]').simulate('change', { target: { value: 'small' } })
    expect(component.state('quantity')).toBe('')

    component.find('input[id="Quantity"]').simulate('change', { target: { value: '1234567890' } })
    expect(component.state('quantity')).toBe('1234567890')
  })

  it('handleClick', () => {
    const addBook = jest.fn()
    const component = setup({ addBook })

    component.setState({ isbn: '12348', name: 'small', price: '100', quantity: '10' })
    component.find('button[children="Add to list"]').simulate('click')
    expect(addBook).toHaveBeenCalledTimes(0)

    addBook.mockReset()
    component.setState({ isbn: '12345678', name: 'small', price: '100', quantity: '10' })
    component.find('button[children="Add to list"]').simulate('click')
    expect(addBook).toHaveBeenCalledTimes(1)
  })
})