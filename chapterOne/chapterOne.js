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

//02 Find if two strings are permutations of the other
function permutationStrings(str1, str2) {
  if (str1.length !== str2.length) { return false }
  sortedFirst = str1.split("").sort().join("")
  sortedSecond = str2.split("").sort().join("")
  if (sortedFirst === sortedSecond) {
    return true
  } else {
    return false
  }
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

//04 Check if the string is a permutation of a palindrome
function palindromePermutation(string) {
  let hash = {}
  let array = str.split("")
  array.forEach((el) => {
    if (hash[el]) {
      hash[el] = hash[el] + 1
    } else if (el == " ") {
    } else {
      hash[el] = 1
    }
  })

  let oddCounter = 0
  let evenCounter = 0
  let values = Object.values(hash)
  values.forEach((el) => {
    if (el % 2 == 0) {
      evenCounter++
    } else {
      oddCounter++
    }
  })

  if (oddCounter > 2) {
    return false
  } else {
    return true
  }
}

function oneAway(str1, str2) {

}
