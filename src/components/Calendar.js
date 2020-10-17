import React from 'react'
import DayLabel from './DayLabel'
import Day from './Day'

import { DAYS } from '../utils'

const Calendar = ({ month, setSelectedDayIndex }) => {
  return (
    <div className='calendar'>
      {DAYS.map((label) => (
        <DayLabel label={label} />
      ))}
      {month.map((date) => (
        <Day
          date={date}
          onClick={() => setSelectedDayIndex(date.index)}
          key={date.index}
        />
      ))}
    </div>
  )
}

export default Calendar
