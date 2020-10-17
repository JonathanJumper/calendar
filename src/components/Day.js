import React from 'react'

const Day = ({ date, onClick }) => {
  return date.enabled ? (
    <div
      className={date.appointment ? 'day appointment' : 'day'}
      onClick={onClick}
    >
      {date.label}
    </div>
  ) : (
    <span />
  )
}

export default Day
