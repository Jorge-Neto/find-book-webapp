import api from './api';

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

export const getBook = async (isbn) => {
  const response = await api.get(`/books/${isbn}`);
  return response.data;
};

export const calculateScore = (score) => {
  let result = {};
  if (score > 4.5) {
    result = { color: '#2ECC71', label: 'Excelente', recommended: true };
  } else if (score > 3.5) {
    result = { color: '#F1C40F', label: 'Bom', recommended: false };
  } else if (score > 2.5) {
    result = { color: '#E67E22', label: 'Razoável', recommended: false };
  } else if (score > 1) {
    result = { color: '#D35400', label: 'Ruim', recommended: false };
  } else if (score > 0) {
    result = { color: '#C0392B', label: 'Péssimo', recommended: false };
  } else {
    result = { color: '#a5a5a5', label: 'Carregando...', recommended: false };
  }
  return result;
};
