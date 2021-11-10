import Connector from '../src/connector'
import { Response } from 'node-fetch'
describe('Connector', () => {
  const connector = new Connector()

  describe('fetcher', () => {
    test('defines a function', () => {
      expect(typeof connector.fetcher).toBe('function')
    })
  })
  describe('fetch', () => {
    test('defines a function', () => {
      expect(typeof connector.fetch).toBe('function')
    })
    test('function is return valid type', async () => {
      expect(
        await connector.fetch('http://google.com', { body: 'test' })
      ).toBeInstanceOf(Response)
    })
  })
})
