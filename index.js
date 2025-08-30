// Initialize the cats array
let cats = ["Milo", "Otis", "Garfield"];  // Ensure the array is initialized here

// Destructive functions (modify the original array)
function destructivelyAppendCat(name) {
  cats.push(name);  // Adds a cat to the end of the array
}

function destructivelyPrependCat(name) {
  cats.unshift(name);  // Adds a cat to the beginning of the array
}

function destructivelyRemoveLastCat() {
  cats.pop();  // Removes the last cat from the array
}

function destructivelyRemoveFirstCat() {
  cats.shift();  // Removes the first cat from the array
}

// Non-destructive functions (returns a new array)
function appendCat(name) {
  return [...cats, name];  // Adds a cat to the end and returns a new array
}

function prependCat(name) {
  return [name, ...cats];  // Adds a cat to the beginning and returns a new array
}

function removeLastCat() {
  return cats.slice(0, -1);  // Returns a new array without the last cat
}

function removeFirstCat() {
  return cats.slice(1);  // Returns a new array without the first cat
}

// Export the functions so they can be used in the tests
module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};
