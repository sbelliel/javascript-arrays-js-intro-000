chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var  newarray = [element, ...array];
  return newarray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  var newarray = [...array, element];
  return newarray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array, index) {
  array.shift(index);
  return array;
}

function removeElementFromBeginningOfArray(array) {
  var newarray = array.slice(1);
  return newarray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
 array.pop()
return array;
}

function removeElementFromEndOfArray(array) {
  var newarray = array.slice(0, array.length - 1)
  return newarray;
}
