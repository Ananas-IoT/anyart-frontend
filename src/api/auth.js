
export function getUserByToken(token, refresh) {
  if (token === '1') {
    return {
      first_name: "Daniil",
      last_name: "Lohvinov",
      role: "basic"
    }
  }
  if (token === '2') {
    return {
      first_name: "Artist",
      last_name: "Artist",
      role: "artist"
    }
  }
  if (token === '3') {
    return {
      first_name: "Vasyl",
      last_name: "Vasyl",
      role: "government"
    }
  }
}
