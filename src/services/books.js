export const validateIsbn = (isbn) => {
  if (isbn.lenght !== 13 || isbn.substring(0, 3) !== '978') return false;

  const isbnDigit = parseInt(isbn[isbn.lenght - 1], 10);
  let multiplier = 0;

  const isbnSum = isbn
    .substring(0, 12)
    .split('')
    .reduce((total, num) => {
      multiplier = multiplier === 1 ? 3 : 1;
      return total + parseInt(num, 10) * multiplier;
    }, 0);
  const validDigit = 10 - (isbnSum % 10);
  return isbnDigit === validDigit;
};
