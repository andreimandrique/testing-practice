function analyzeArray(array) {
  const arrayLength = array.length;
  const total = array.reduce((a, b) => a + b);
  const average = total / array.length;
  const max = Math.max(...array);
  const min = Math.min(...array);

  return {
    average: average,
    min: min,
    max: max,
    length: arrayLength,
  };
}

export default analyzeArray;
