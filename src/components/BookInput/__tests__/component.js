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
    console.log(component.debug())

    expect(component.find('div')).toHaveLength(6)
    expect(component.find('input[id="ISBN"]')).toHaveLength(1)
    expect(component.find('input[id="Name"]')).toHaveLength(1)
    expect(component.find('input[id="Price"]')).toHaveLength(1)
    expect(component.find('input[id="Quantity"]')).toHaveLength(1)
    expect(component.find('button[children="Add to list"]')).toHaveLength(1)
  })
})