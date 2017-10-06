function isEven(n) {
  let e = n % 2
  if (Number.isNaN(e)) throw Error('Not a number!')
  return !e
}

module.exports = {
  isEven
}
