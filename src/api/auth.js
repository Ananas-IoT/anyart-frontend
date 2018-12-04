
export function getUserByToken(token) {
  if (token === '1') {
    return {
      surname: "Daniil Lohvinov",
      role: "basic"
    }
  }
  if (token === '2') {
    return {
      surname: "Artist Common",
      role: "artist"
    }
  }
  if (token === '3') {
    return {
      surname: "Vasyl Vasyl",
      role: "government"
    }
  }
}
