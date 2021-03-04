import { greet } from '.'

test('greet should return correct string', () => {
  expect(greet('Bob')).toEqual('Hello, Bob')
})
