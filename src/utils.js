export const DAYS = Object.freeze(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])

export const getMonthData = (year, month) => {
  const monthIndex = month - 1
  const date = new Date(year, monthIndex, 1)
  const monthArr = []
  const dayOffset = date.getDay()
  let index = 0
  for (; index < dayOffset; index++) monthArr.push({ index, enabled: false })
  while (date.getMonth() === monthIndex) {
    monthArr.push({ index, label: date.getDate(), enabled: true })
    index++
    date.setDate(date.getDate() + 1)
  }
  return monthArr
}
