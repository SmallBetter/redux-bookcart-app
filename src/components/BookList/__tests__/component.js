import React from 'react'
import { shallow } from 'enzyme'
import BookList from '../component'

jest.mock('../../BookItem', () => jest.fn())

describe('BookList', () => {
  const defaultState = {
    books: [
      {
        id: 1,
        isbn: 1234567,
        name: 'book1',
        price: 100,
        quantity: 10,
        totalprice: 1000,
        isediting: false,
        buy: false
      }
    ]
  }

  const setup = props => {
    const component = shallow(<BookList {...defaultState} />)
    component.setProps(props)
    return component
  }

  it('default', () => {
    const component = setup()

    expect(component.find('th')).toHaveLength(6)
    expect(component.find('th[children="ISBN"]')).toHaveLength(1)
    expect(component.find('th[children="Name"]')).toHaveLength(1)
    expect(component.find('th[children="Price"]')).toHaveLength(1)
    expect(component.find('th[children="Quantity"]')).toHaveLength(1)
    expect(component.find('th[children="Total Price"]')).toHaveLength(1)
    expect(component.find('th[children="Action"]')).toHaveLength(1)
  })
})