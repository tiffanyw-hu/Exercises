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
