function foo() {
  const escapedSingleQuotes = inputString.replace(/'/g, "\\'")

  return escapedSingleQuotes.replace(/"/g, '\\"')
}
