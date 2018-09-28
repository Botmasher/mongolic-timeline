import { moment } from 'moment';

// timeline year formatting
export const yearFormatCE = year => `${year} ${year > -1 ? 'CE' : 'BCE'}`;
export const yearFormatBC = year => `${year} ${year > -1 ? 'AD' : 'BC'}`;

// timeline year calculations
export const yearOffset = (year, origin, range) => ((year - origin) / range);
export const yearsBefore = (yearA, yearB) => yearA - yearB;
export const yearsAfter = (yearA, yearB) => yearB - yearA;
export const yearsAgo = year => moment(`${year}`, 'YYYY').fromNow();

// TODO support exact dates

// Gregorian to/from AH after Hodgson Venture of Islam vol 1 p. 21
export const yearGtoAH = year => year - 622 + ((year - 622) / 32);
export const yearAHtoG = year => year - (year/33) + 622;
