//01 Find if a string has unique characters
function uniqueString(string) {
  let object = {};
  string.forEach((el, i) => {
    if (object[el]) {
      return false
    } else {
      object[el] = i
    }
  })
  return true
}

//01 same but without additional data structures
function uniquePain(string) {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length -1; j++) {
      if (string[i] == string[j]) {
        return false
      }
    }
  }
  return true 
}
