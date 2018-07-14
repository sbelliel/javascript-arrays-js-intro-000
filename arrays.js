chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var  newarray = [element, ...array];
  return newarray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
}

function addElementToEndOfArray(array, element) {
  array = [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
}
