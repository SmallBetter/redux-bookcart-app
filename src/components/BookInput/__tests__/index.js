import Index from '../'
import Container from '../container'

jest.mock('../container', () => 'container')

describe('PageRegister Wrapper', () => {
  it('wrapper', () => {
    expect(Index).toBe(Container)
  })
})