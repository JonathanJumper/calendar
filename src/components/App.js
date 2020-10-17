import React, { useState } from 'react'

import Disclaimer from './Disclaimer'
import Calendar from './Calendar'
import Form from './Form'
import Warning from './Warning'

import { getMonthData } from '../utils'

function App () {
  const [month, setMonth] = useState(getMonthData(2020, 10))
  // this could be improved to avoid re renders, I run out of time
  const [selectedDayIndex, setSelectedDayIndex] = useState(-1)
  const [initialFormValue, setInitialFormValue] = useState('')

  const isFormVisible = selectedDayIndex !== -1 && !month[selectedDayIndex].appointment
  const isWarningVisible = selectedDayIndex !== -1 && month[selectedDayIndex].appointment

  const createAppointment = (appointment) => {
    setMonth(month.map((date) =>
      date.index === selectedDayIndex ? { ...date, appointment } : date
    ))
    setSelectedDayIndex(-1)
    setInitialFormValue('')
  }

  const editAppointment = () => {
    const previousValue = month[selectedDayIndex].appointment
    setMonth(month.map((date) =>
      date.index === selectedDayIndex ? { ...date, appointment: '' } : date
    ))
    // this "should" work, but it is not lel, run out of time
    setInitialFormValue(previousValue)
  }

  const deleteAppointment = () => {
    setMonth(month.map((date) =>
      date.index === selectedDayIndex ? { ...date, appointment: '' } : date
    ))
    setSelectedDayIndex(-1)
  }

  return (
    <div>
      <Disclaimer />

      <Calendar
        month={month}
        setSelectedDayIndex={setSelectedDayIndex}
      />

      <Form
        visible={isFormVisible}
        date={month[selectedDayIndex]}
        initialValue={initialFormValue}
        onSubmit={createAppointment}
      />

      <Warning
        visible={isWarningVisible}
        date={month[selectedDayIndex]}
        onEdit={editAppointment}
        onDelete={deleteAppointment}
      />
    </div>
  )
}

export default App
