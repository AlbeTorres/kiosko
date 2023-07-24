// import { Time, WeekDay } from '~types/time'

// export const WEEK_DAYS: WeekDay[] = [
//   'monday',
//   'tuesday',
//   'wednesday',
//   'thursday',
//   'friday',
//   'saturday',
//   'sunday',
// ]

// export const timeToString = (time: Time): string =>
//   `${
//     time.meridian === 'AM'
//       ? time.hours === 12
//         ? 0
//         : time.hours
//       : time.hours < 12
//       ? time.hours + 12
//       : 12
//   }:${time.minutes}:${time.seconds}`

// export const stringToTime = (str: string): Time => {
//   const [hours, minutes, seconds] = str.split(':').map(p => parseInt(p))

//   return {
//     hours: hours % 12 === 0 ? 12 : hours % 12,
//     minutes,
//     seconds,
//     meridian: hours < 12 ? 'AM' : 'PM',
//   }
// }

// export const getElapsedTime = (date: Date): { amount: number; unit: string } => {
//   const now = new Date()

//   const [years, months, days, hours, minutes, seconds] = [
//     now.getFullYear() - date.getFullYear(),
//     now.getMonth() - date.getMonth(),
//     now.getDate() - date.getDate(),
//     now.getHours() - date.getHours(),
//     now.getMinutes() - date.getMinutes(),
//     now.getSeconds() - date.getSeconds(),
//   ]

//   return years
//     ? { amount: years, unit: 'year' }
//     : months
//     ? { amount: months, unit: 'month' }
//     : days
//     ? { amount: days, unit: 'day' }
//     : hours
//     ? { amount: hours, unit: 'hour' }
//     : minutes
//     ? { amount: minutes, unit: 'minute' }
//     : { amount: seconds, unit: 'second' }
// }
