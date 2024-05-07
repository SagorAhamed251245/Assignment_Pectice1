/* Problem 2:
Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.

// Sample Input:
findLargestNumber([10, 5, 8, 20, 3])

// Sample Output:
20 */
{
  //
  const findLargestNumber = (array: number[]): number => {
    let num: number = 0;
    for (const iterator of array) {
      if (iterator > num) {
        num = iterator;
      }
    }
    return num;
  };

  const result = findLargestNumber([1111, 2, 3, 44]);
  console.log(result);
  //
}
