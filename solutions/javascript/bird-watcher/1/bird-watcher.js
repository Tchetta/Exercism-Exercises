// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let accum = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    accum += birdsPerDay[i];
  }
  return accum;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  console.log(birdsPerDay);
  const startIndex = 7 * (week - 1);
  const thisWeek = []
  for (let i = startIndex; i < startIndex + 7; i++) {  thisWeek.push(birdsPerDay[i]);
  }
  console.log('week =', week, thisWeek);
  let accum = 0;
  for (let i = 0; i < thisWeek.length; i++) {
    accum += thisWeek[i];
  }
  return accum;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i]++;
    }
  }
}
