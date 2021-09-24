import moment from 'moment';

/**
 * @param {int} The month number, 0 based
 * @param {int} The year, not zero based, required to account for leap years
 * @return {Date[]} List with date objects for each day of the month
 */
export function getDaysInMonth(month: any, year: any): Date[] {
  let date = new Date(year, month, 1);
  let days: Date[] = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

/**
 * @Format hh:mm
 * e.g : 10:12
 * 24 hours format
 */
export function timeFormat(value: Date): string {
  return moment(value).format('HH:mm');
}

/**
 * @Format dddd, D MMM YYYY
 * e.g : Sunday, 12 Sep 2020
 */
export function dateWithDayFormat(value: Date): string {
  return moment(value).format('dddd, D MMM YYYY');
}

/**
 * @Format D MMMM YYYY
 * e.g : 12 April 2020
 */
export function dateFormat(value: Date): string {
  return moment(value).format('D MMMM YYYY');
}

/**
 * Get day only from Date
 * @Format dddd
 * e.g : Monday
 */
export function getDay(value: Date): string {
  return moment(value).format('dddd');
}

/**
 * Get date and month
 * @Format D MMM
 * e.g : 22 Apr
 */
export function getDateAndMonth(value: Date): string {
  return moment(value).format('D MMM');
}

/**
 * Get month and year
 * @Format MMMM YYYY
 * e.g : April 2020
 */
export function getMonthAndYear(value: Date): string {
  return moment(value).format('MMMM YYYY');
}

/**
 * Get month and date
 * @Format MMM D
 * e.g : Apr 23
 */
export function getMonthAndDate(value: Date): string {
  return moment(value).format('MMM D');
}

/**
 * Get date
 * @Format MMM
 * e.g : Apr
 */
export function getMonth(value: Date): string {
  return moment(value).format('MMM');
}

/**
 * To compare two dates
 * it will return Boolean
 */
export function isDateEqual(value: Date, valueEqual: Date): boolean {
  return moment(value).isSame(valueEqual, 'month');
}
