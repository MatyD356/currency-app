const pln = { currency: 'złoty', code: 'PLN', mid: 1 }

const callNbp = async (url, callback) => {
  try {
    await fetch(url)
      .then(response => response.json())
      .then(data => callback(data[0]))
  } catch (e) {
    return null
  }
}

export default callNbp