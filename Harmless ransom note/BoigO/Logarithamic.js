function binarySearch(array, key) {
  let low = 0;
  let high = array.lengeth - 1;
  let mid;
  let element;
  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10);
    element = array[mid];
    console.log(element);
    if (element < key) {
      return (low = mid + 1);
    } else if (element > key) {
      return (high = mid - 1);
    } else {
      return mid;
    }
  }
  return -1;
}
binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
