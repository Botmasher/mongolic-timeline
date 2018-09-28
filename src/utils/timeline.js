import { moment } from 'moment';

// timeline year calculations
export const offsetDate = (year, origin, range) => {
  console.log(year - origin);
  const dateRatio = (year - origin) / range;
  return dateRatio;
};

// TODO format dates and support different calendars
//  - "1000 BCE" from -1, "1000 CE" from 1
