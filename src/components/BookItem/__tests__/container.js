import { removeBook, toggleBook, editBook } from '../../../actions/book'
import { mapStateToProps, mapDispatchToProps } from '../container'

jest.mock('../component', () => jest.fn())
jest.mock('../../../actions/book', () => 'actions')

describe('BookItem Container', () => {
  it('mapStateToProps', () => {
    const state = {}
    const props = { a: 1 }
    const expectProps = mapStateToProps(state, props)
    expect(expectProps).toBe(props)
    expect(expectProps).toEqual(props)
  })

  it('mapDispatchToProps', () => {
    expect(Object.keys(mapDispatchToProps)).toHaveLength(5)
    expect(mapDispatchToProps.removeBook).toBe(removeBook)
    expect(mapDispatchToProps.toggleBook).toBe(toggleBook)
    expect(mapDispatchToProps.editBook).toBe(editBook)
    expect(mapDispatchToProps.addBuyBook).toBe(editBook)
    expect(mapDispatchToProps.buyBook).toBe(editBook)
  })
})