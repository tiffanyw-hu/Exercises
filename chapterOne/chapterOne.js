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

//05 check if two strings are one or zero edits away
//check
function oneAway(str1, str2) {
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
  //im not sure
  //whoa like check which one you wanted maybe refactor some of this code y'all
}

function substrIndex(str1, str2) {
  let arr = str2.split(" ")
  counter = 0
  if (!arr.includes(str1)) {
    return -1
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== str1) {
        counter += arr[i].length + 1
      } else {
        return counter + 1
      }
    }
  }
}

function capitalize(str) {
  let strArr = str.split("")
  strArr[0] = strArr[0].toUpperCase()
  for (let i = 1; i < strArr.length; i++) {
    if (strArr[i] === " ") {
      strArr[i+1] = strArr[i+1].toUpperCase()
    }
  }
  return strArr.join("")
}

function endsWith(str1) {
  let strArr = str1.split(",")
  let subArr = strArr[0].split(" ")
  console.log(strArr)
  if (subArr[subArr.length - 1] === strArr[1]) {
    return true
  }
  return false
}

//substrIndex("Francisco", "San Francisco")
//pairboarding problems should go here look at ctci for once guys

//no one knows what they're doing you don't know what you're doing
//stfu i hate you 
