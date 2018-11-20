#1.1, 1.8, 1.9, 2.1, 3.1, 3.2, 3.3, 3.4, 3.6, 4.4, 4.1, 4.2, 4.5, 4.6, 4,10,
#5.1, 7.1, 7.2, 7.5, 7.7, 7.11, 7.12, 8.1, 8.2, 8.3, 8.4, 8.7, 8.8, 9.1, 9.2,
#9.3, 9.4, 10.3, 10.9, 10.10, 14.5, 15.1, 16.4, 16.17, 16.24, 17.22, 17.23

#01 Find if a string has unique characters
def unique_string(string)
  object = {}
  string.each_with_index do |el, i|
    if object[el]
      return false
    else
      object[el] = i
    end
  end
  true
end

#01 same but without additional data structures
def unique_pain(string)
  i = 0
  while i < string.length
    j = i + 1
    while j < string.length - 1
      if string[i] == string[j]
        return false
      end
      j += 1
    end
    i += 1
  end
  true
end


#02 Find if two strings are permutations of the other
def permutation_strings(str1, str2)
  return false if str1.length !==  str2.length
  sorted_first = str1.sort
  sorted_second = str2.sort
  return true if sorted_first == sorted_second
end

#03 Replace all spaces in the string with %20
def replace_spaces(string, length)
  replaced_string = ""
  array = string.split("")

  i = 0
  while i < length
    if array[i] != " "
      replaced_string << array[i]
    elsif array[i] == " "
      replaced_string << "%20"
    end
  i += 1
  end

  replaced_string
end

#04 Check if the string is a permutation of a palindrome
def palindrome_permutation(str)
  hash = {}
  array = str.split("")
  array.each do |el|
    if hash[el]
      hash[el] = hash[el] + 1
    elsif el == " "
    else
      hash[el] = 1
    end
  end

  odd_counter = 0
  even_counter = 0
  values = hash.values
  values.each do |el|
    if (el % 2 == 0)
      even_counter += 1
    else
      odd_counter += 1
    end
  end

  if (odd_counter > 2)
    return false
  end
  true
end

#05 check if two strings are one or zero edits away
def one_away(str1, str2)
  if str1.length > str2.length
    longer = str1.length
  else
    longer = str2.length
  end

  different_counter = 0
  i = 0
  while i < longer
    if !str1[i]
      str1[i] = " "
    end

    if !str2[i]
      str2[i] = " "
    end

    if str1[0] != str2[0]
      different_counter += 1
      if different_counter > 1
        return false
      end
    end
    i += 1
  end

  true
end

def compression(str)
  array = str.split("")
  result_array = [array.first]
  array << "/"

  counter = 1
  i = 1
  while i < array.length
    if (array[i-1] == array[i])
      counter += 1
    end

    if (array[i-1] != array[i])
      result_array << counter
      result_array << array[i]
      counter = 1
    end

  i += 1
  end

  result_array.pop

  result = result_array.join("")
  if result.length < str.length
    return str
  else
    return result
  end

end

#rotating matrix like why no
