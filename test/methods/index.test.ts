import Methods from '../../src/methods'
describe('Methods', () => {
  const methods = new Methods()

  describe('Check', () => {
    test('is exits', () => {
      expect(methods).toHaveProperty('Check')
      expect(typeof methods.Check).toBe('function')
    })
    test('is working', async () => {
      const response = await methods.Check({
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
})
