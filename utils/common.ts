/** 时间戳转日期
 * @returns {String} 返回字符串结果
 * */
export function timestampToDate(timestamp: any) {
  const d = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
  ]
  let ampm = 'AM'
  const date = new Date(timestamp * 1000)
  const year = date.getFullYear()
  const month = date.getMonth() // 月份从0开始，需要加1
  const day = date.getDate()
  let hours = date.getHours()
  const minutes = date.getMinutes()
  if (hours >= 12) {
    ampm = 'PM'
    hours = hours - 12
  }

  const current_date = new Date()
  const current_year = current_date.getFullYear()
  const current_month = current_date.getMonth()
  const current_day = current_date.getDate()

  if (current_year == year && current_month == month && current_day == day) {
    return `${hours > 9 ? hours : '0' + hours}:${
      minutes > 9 ? minutes : '0' + minutes
    } ${ampm}`
  } else {
    return `${year == current_year ? '' : year} ${d[month]} ${day} ${
      hours > 9 ? hours : '0' + hours
    }:${minutes > 9 ? minutes : '0' + minutes} ${ampm}`
  }
}

let hisTime: any = ''
export function getTimeDifference(timestamp: any) {
  if (hisTime == '') {
    hisTime = timestamp
    return timestamp
  } else {
    const difference = timestamp - hisTime
    if (difference > 1800) {
      hisTime = timestamp
      return difference
    } else {
      return ''
    }
  }
}


// 是否是移动端
export function isMobile() {
  if (!process.client) return false
  return /Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
}
