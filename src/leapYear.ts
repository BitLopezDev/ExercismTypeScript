export function leapYear(year: number) {
    if (
      (year % 4 === 0 && year % 100 !== 0) ||
      (year % 100 === 0 && year % 400 === 0)
    ) {
      return true;
    } else {
      return false;
    }
  }