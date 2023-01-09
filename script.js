const googleDatabase = ['cats.com', 'vk.com', 'animals.com', 't.me', 'me-favorite-cats.com']

const googleSearch = searchInput => {
  const matches = googleDatabase.filter(website => website.includes(searchInput))
  return matches.length > 3 ? matches.slice(0, 3) : matches
}

console.log(googleSearch('t'))
