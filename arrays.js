chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var  array = [element, ...array];
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
