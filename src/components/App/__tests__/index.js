import Index from '../'
import Conponent from '../component'

jest.mock('../component', () => 'component')

describe('PageRegister Wrapper', () => {
  it('wrapper', () => {
    expect(Index).toBe(Conponent)
  })
})