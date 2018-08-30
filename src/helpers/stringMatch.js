export const stringFuzzyMatch = (str, predicate) => {
  if (str == null || predicate == null) return false

  const parsedStr = str.toLowerCase()
  const parsedPredicate = predicate.toLowerCase().replace(/_/g, " ")

  return fuzzyMatch(parsedStr, parsedPredicate)
}

export const stringMatch = (str, predicate) => {
  if (str == null || predicate == null) return false

  const parsedStr = str.toLowerCase()
  const parsedPredicate = predicate.toLowerCase().replace(/_/g, " ")

  return parsedStr.includes(parsedPredicate)
}

const fuzzyMatch = (str, pattern) => {
  pattern = pattern.split("").reduce((a, b) => a + "[^" + b + "]*" + b)
  return new RegExp(pattern).test(str)
}
