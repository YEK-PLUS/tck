import * as Middlewares from '../../src/middlewares'

describe('Middlewares exports testing', () => {
  test('CheckRequestBodyBuilder', () =>
    expect(Middlewares.CheckRequestBodyBuilder).toBeTruthy())
})
