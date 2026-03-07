// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  let newNow;
  if (now)
    newNow = new Date(now);
  else
    newNow = new Date();
    
  // now = now ?? newNow;
  newNow.setDate(newNow.getDate() + days);
  return newNow;
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  const time = new Date(timestamp);
  
  return { year: time.getFullYear(), month: time.getMonth(), date: time.getDate(), hour: time.getHours(), minute: time.getMinutes() };
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  console.log(options);
  const time = new Date(timestamp);
  for (let key in options) {
    switch (key) {
      case 'year':
        time.setFullYear(options[key]);
        break;
      case 'month':
        time.setMonth(options[key]);
        break;
      case 'date':
        time.setDate(options[key]);
        break;
      case 'hour':
        time.setHours(options[key]);
        break;
      case 'minute':
        time.setMinutes(options[key]);
        break;
      case 'second':
        time.setSeconds(options[key]);
        break;
    }
  }
  console.log(getAppointmentDetails(time))

  return getAppointmentDetails(time);
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  const timeA = new Date(timestampA);
  const timeB = new Date(timestampB);
  return Math.ceil(Math.abs((timeA - timeB) / 1000));
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  const appointmentTime = new Date(appointmentTimestamp);
  const currentTime = new Date(currentTimestamp);

  return currentTime < appointmentTime;
}
