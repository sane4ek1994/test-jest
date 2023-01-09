const googleSearch = require('./script')

dbMock = ['dog.com', 'dog-pictures.com', 'soup.com', 'habr.ru', 'hh.ru']

it('is a silly test', () => {
  expect('hello').toBe('hello')
  googleSearch('testTest', dbMock)
})

describe('googleSearch', () => {
  it('is searching google', () => {
    expect(googleSearch('testTest', dbMock)).toEqual([])
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dog-pictures.com'])
  })

  it('work with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([])
    expect(googleSearch(null, dbMock)).toEqual([])
  })

  it('does not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3)
  })
})
