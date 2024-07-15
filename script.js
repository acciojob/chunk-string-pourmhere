function stringChop(str, size) {
  // your code here
	if (str === null) return []; // If input string is null, return an empty array
  const result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size)); // Push each chunk into the result array
  }
  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
