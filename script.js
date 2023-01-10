const googleDatabase = ['cats.com', 'vk.com', 'animals.com', 't.me', 'me-favorite-cats.com']

const googleSearch = (searchInput, db) => {
  const matches = db.filter(website => website.includes(searchInput))
  return matches.length > 3 ? matches.slice(0, 3) : matches
}

module.exports = googleSearch
