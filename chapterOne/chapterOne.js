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

//03 Replace all spaces in the string with %20
function replaceSpaces(string, length) {
  let array = string.split("")
  let replacedArray = []

  let i = 0
  while (i < length) {
    if (array[i] !== " ") {
      replacedArray.push(array[i])
    } else if (array[i] == " ") {
      replacedArray.push("%20")
    }
  }

  return replacedArray.join("")
}
