const chooseRandom = (array = [], numItems) => {
  // TODO check that array length is greater than 1
  if (array === undefined || array.length <= 1 || numItems < 1) {
    return array
  } else if (
    numItems === undefined ||
    numItems <= 0 ||
    numItems > array.length
  ) {
    numItems = Math.floor(Math.random() * array.length)
  }

  // array.filter(a = item, pos, self => self.indexOf(item) == pos) // Filter out unique values indecies

  const randomIndices = Array(numItems) // TODO ensure numItems is within the range 1 to the length of the array
    .fill() // Don't change this line. Just fills the array we're about to reduce.
    .reduce(res => {
      let randomIndex = Math.floor(Math.random() * array.length)

      while (res.indexOf(randomIndex) !== -1) {
        randomIndex = Math.floor(Math.random() * array.length)
      }

      return res.concat(randomIndex)
    }, [])

  return randomIndices.map(individual => array[individual])

  // reduce the array to contain numItems # of unique index values

  // TODO return a new array filtering the passed in array for only the
  // indices contained in the randomIndices array
}

export { chooseRandom }
