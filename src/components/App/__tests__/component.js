import React from 'react'
import { shallow } from 'enzyme'
import App from '../component'

jest.mock('../../BookInput', () => jest.fn())
jest.mock('../../BookList', () => jest.fn())
jest.mock('../../GrandTotalBook', () => jest.fn())

describe('App', () => {
  const defaultState = {}

  const setup = props => {
    const component = shallow(<App {...defaultState} />)
    component.setProps(props)
    return component
  }

  it('default', () => {
    const component = setup()

    expect(component.find('div')).toHaveLength(3)
    expect(component.find('div[className="App-header"]')).toHaveLength(1)
    expect(component.find('div[className="App-intro"]')).toHaveLength(1)
  })
})