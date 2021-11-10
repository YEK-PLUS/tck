import Tck from '../src'
import Methods from '../src/methods'
import Connector from '../src/connector'
describe('Tck', () => {
  const tck = new Tck()

  test('Methods is exits', () => {
    expect(tck.methods).toBeInstanceOf(Methods)
  })
  test('Connector is exits', () => {
    expect(tck.connector).toBeInstanceOf(Connector)
  })
})
