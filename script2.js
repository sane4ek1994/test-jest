const getPeoplePromise = fetch => {
  return fetch('https://swapi.py4e.com/api/people/')
    .then(res => res.json())
    .then(data => {
      return {
        count: data.count,
        results: data.results
      }
    })
    .catch(err => console.log(err))
}

const getPeople = async fetch => {
  const getRequest = await fetch('https://swapi.py4e.com/api/people')
  const data = await getRequest.json()
  return {
    count: data.count,
    results: data.results
  }
}

module.exports = {
  getPeople,
  getPeoplePromise
}
