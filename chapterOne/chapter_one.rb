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
