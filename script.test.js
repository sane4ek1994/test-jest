const googleSearch = require('./script')

dbMock = ['dog.com', 'dog-pictures.com', 'soup.com', 'habr.ru', 'hh.ru']

it('is a silly test', () => {
  expect('hello').toBe('hello')
  googleSearch('testTest', dbMock)
})

it('is searching google', () => {
  expect(googleSearch('testTest', dbMock)).toEqual([])
  expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dog-pictures.com'])
})
