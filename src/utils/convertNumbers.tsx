export function ConvertNumbers(input: string | number, direction: 'toPersian' | 'toEnglish' = 'toPersian'): string {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  const englishDigits = '0123456789';
  
  const strInput = String(input);
  
  if (direction === 'toPersian') {
    return strInput.replace(/\d/g, (match) => {
      return persianDigits[parseInt(match)];
    });
  } else {
    return strInput.replace(/[۰-۹]/g, (match) => {
      return englishDigits[persianDigits.indexOf(match)];
    });
  }
}
