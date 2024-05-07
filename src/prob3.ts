/* Problem 3:
Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.

// Sample Input:
filterEvenNumbers([1, 2, 3, 4, 5, 6])

// Sample Output:
[2, 4, 6] */
{
  //
  const filterEvenNumbers = (array: number[]): number[] => {
    const result: number[] = array.filter((arr: number) => arr % 2 === 0);
    return result;
  };

  const result = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
  console.log(result);
  //
}
