import CheckRequestBodyBuilder from '../../src/middlewares/check-request-body-builder'

describe('CheckRequestBodyBuilder', () => {
  const person = {
    tckn: 1234567890123,
    ad: 'John',
    soyad: 'Doe',
    dogumYili: 1234,
  }
  const body = CheckRequestBodyBuilder(person)
  test('type check', () => expect(typeof body).toBe('string'))
  test('match check', () => {
    const vals = Object.values(person)
    const regex = new RegExp(`(${vals.join('|')})`, 'i')
    expect(body).toMatch(regex)
  })
})
