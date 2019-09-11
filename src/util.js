export const isUpcoming = game => {
  const timeNow = new Date()
  // Add two hours to game date for end time
  const date = new Date(game.data.date)

  return timeNow < date
}

export const isComplete = game => {
  const timeNow = new Date()
  const date = new Date(game.data.date)

  return timeNow > date
}

export const formatDate = isoDate => {
  const date = new Date(isoDate)

  const fullDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  })

  const utcHour = date.getUTCHours()

  let hour = null
  if (utcHour >= 12) {
    hour = utcHour - 12 + 'pm'
  } else {
    hour = utcHour + 'am'
  }

  return `${fullDate} at ${hour}`
}
