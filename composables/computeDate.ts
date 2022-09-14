export const useFormattedDate = unformattedDate => {
  const date = new Date(unformattedDate)
  const day = date.getDate() <= 9 ? '0' + date.getDate() : date.getDate()
  const month = +date.getMonth()

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const year = date.getFullYear()
  return `${months[month]} ${day}, ${year}`
}
