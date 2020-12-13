
const callNbp = async (url, callback) => {
  try {
    await fetch(url)
      .then(response => response.json())
      .then(data => callback(data[0]))
  } catch (e) {
    return null
  }
}
const getCurrencyDetalis = async (url, callback) => {
  try {
    await fetch(url)
      .then(response => response.json())
      .then(data => callback(data))
  } catch (e) {
    return null
  }
}

export { callNbp, getCurrencyDetalis }