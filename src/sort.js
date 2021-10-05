/**
 * A sort algorithm that implements a stable sort
 * @param {function} compare The comparator function used in sorting
 * @param {array} elements The array to be sorted
 */
function sort(compare, elements) {
  if (Array.isArray(elements)) {
    if (elements.length <= 1) {
      return elements;
    }
    const middle = Math.floor(elements.length / 2);
    const leftElements = elements.slice(0, middle);
    const rightElements = elements.slice(middle);

    let leftElementsSorted = sort(compare, leftElements);
    let rightElementsSorted = sort(compare, rightElements);
    return merge(compare, leftElementsSorted, rightElementsSorted);
  }
  return elements;
}

function merge(compare, leftElements, rightElements) {
  let sortedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftElements.length && rightIndex < rightElements.length) {
    let comparison = compare(
      leftElements[leftIndex],
      rightElements[rightIndex]
    );
    // if (comparison === 0) {
    //   compare(
    //     leftElements.lastName[leftIndex],
    //     rightElements.lastName[rightIndex]
    //   );
    // }
    if (comparison <= 0) {
      sortedArr.push(leftElements[leftIndex]);
      leftIndex++;
    } else {
      sortedArr.push(rightElements[rightIndex]);
      rightIndex++;
    }
  }
  return sortedArr.concat(
    leftIndex < leftElements.length
      ? leftElements.slice(leftIndex)
      : rightElements.slice(rightIndex)
  );
}

module.exports = sort;
