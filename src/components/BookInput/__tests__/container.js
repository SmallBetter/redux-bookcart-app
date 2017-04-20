import { addBook } from '../../../actions/book'
import { mapDispatchToProps } from '../container'

jest.mock('../component', () => jest.fn())
jest.mock('../../../actions/book', () => 'actions')

describe('BookInput Container', () => {
  it('mapDispatchToProps', () => {
    expect(Object.keys(mapDispatchToProps)).toHaveLength(1)
    expect(mapDispatchToProps.removeBook).toBe(addBook)
  })
})