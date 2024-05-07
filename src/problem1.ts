{
  /*   //Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.

  // Sample Input:
  repeatString("Hello!", 3);

  // Sample Output:
  ("Hello!Hello!Hello!"); */

  const repeatString = (message: string, num: number): string => {
    let text: string = "";
    for (let index = 0; index < num; index++) {
      text += message;
    }
    return text;
  };

  const result = repeatString("Hello!", 6);
  console.log(result);
  //
}
