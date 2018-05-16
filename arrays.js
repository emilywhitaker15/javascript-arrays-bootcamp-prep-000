var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = array.unshift(element)
  return array
}

function adElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = array.push(element)
  return array
}

function accessElementInArray(element, array) {
  return array[element]
}
