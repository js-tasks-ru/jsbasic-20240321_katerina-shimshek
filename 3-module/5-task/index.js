function getMinMax(str) {
  const numbers = str
    .split(' ')
    .filter(item => !isNaN(parseFloat(item)))
    .map(item => parseFloat(item));

  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return { min, max };
}