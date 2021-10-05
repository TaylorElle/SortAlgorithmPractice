const sort = require("./sort");

/**
 * Sort the array of customers by first and last name
 * @param {array} customers
 */

function compare(left, right) {
  if (left === right) return 0;
  if (left > right) return 1;
  if (left < right) return -1;
}

function sortByName(customers) {
  let sortedArr = [];
  let fullName = customers.map((customer) => {
    return customer.lastName + customer.firstName;
  });

  const sortByLast = sort(compare, fullName);

  sortByLast.forEach((name) => {
    let lastName = name.slice(0, 1);
    let firstName = name.slice(1);

    let finalName = { firstName, lastName };
    sortedArr.push(finalName);
  });

  return sortedArr;
}

module.exports = sortByName;
