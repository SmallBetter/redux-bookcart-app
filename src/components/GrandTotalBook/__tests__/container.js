import { mapStateToProps } from '../container'

jest.mock('../component', () => jest.fn())
jest.mock('../../../actions/book', () => 'actions')

describe('BookItem Container', () => {
  it('mapStateToProps', () => {
    const state = { books: 1 }
    const expectProps = mapStateToProps(state)
    expect(expectProps).not.toBe(state)
    expect(expectProps).toEqual(state)
  })
})