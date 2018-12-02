function isPalindrome(string) {
  let stringArr = string.split("")
  let mid = stringArr.length / 2
  for (let i = 0; i < mid; i++) {
    let j = stringArr.length - 1 - i
    if (stringArr[i] !== stringArr[j]) {
      return false
    }
  }
  return true
}

rawr("racecar")
