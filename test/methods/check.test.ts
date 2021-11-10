import Check from '../../src/methods/check'
import Methods from '../../src/methods'
describe('Check', () => {
  test('type check', () => expect(typeof Check).toBe('function'))
  test('false response check', async () => {
    const response = await Check.call(new Methods(), {
      tckn: 1234567890123,
      ad: 'John',
      soyad: 'Doe',
      dogumYili: 1234,
    })
    expect(response).toEqual({
      status: true,
      data: {
        isValid: false,
      },
    })
  })
})
