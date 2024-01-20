import dayjs from 'dayjs';

export function formatDate(date: Date | undefined) {
  return date && dayjs(date).format('MMMM D, YYYY');
}

export function formatBirthday(date: Date | undefined) {
  return date && dayjs(date).format('MMMM D');
}
