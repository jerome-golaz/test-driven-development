export function isValid(isbn13: string): boolean {
  const isbn = isbn13.replace(/-/g, "");
  if (isbn.length !== 13) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 12; i++) {
    const digit = parseInt(isbn[i]);
    if (isNaN(digit)) {
      return false;
    }
    sum += (i % 2 === 0 ? digit : digit * 3);
  }

  const checkDigit = (10 - (sum % 10)) % 10;
  return checkDigit === parseInt(isbn[12]);
}
