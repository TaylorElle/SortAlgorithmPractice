/**
 * Use a binary search to find the customer with given name
 * @param {string} firstName
 * @param {string} lastName
 * @param {array} customers
 */

function compare(a, b) {
  let result = a.lastName.localeCompare(b.lastName);
  if (result === 0) return a.firstName.localeCompare(b.firstName);
  else return result;
}

//declare the function
function searchByName(firstName, lastName, customers) {
  let lowerIndex = 0;
  //declare a lower index
  let upperIndex = customers.length - 1;
  //declare an upper index

  while (lowerIndex <= upperIndex) {
    //while the lower index is less than the upper index, do:
    const index = Math.floor((upperIndex + lowerIndex) / 2);
    // const comparison = compare(customers[index], index, customers);

    const comparison = compare({ firstName, lastName }, customers[index]); //compare the customers, lastname, and firstname
    if (comparison > 0) {
      // if positive
      lowerIndex = index + 1;
    }
    if (comparison === 0) {
      // if equal
      return index;
    }
    if (comparison < 0) {
      // if negative
      upperIndex = index - 1;
    }
  }
  return -1;
}

module.exports = searchByName;
