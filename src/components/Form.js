import React, { useState } from 'react'

const Form = ({ visible, date, initialValue, onSubmit }) => {
  const [appointment, setAppointment] = useState(initialValue)

  const handleSubmit = (e) => {
    console.log('SUBMIT')
    e.preventDefault()
    onSubmit(appointment)
    setAppointment("")
  }

  return (
    <form className={visible ? "form" : "form hidden"} onSubmit={handleSubmit}>
      <label>
        Appointment for the {date?.label}:
        <input
          autoFocus
          type='text'
          value={appointment}
          onChange={(e) => setAppointment(e.target.value)}
        />
      </label>
      <input type='submit' value='Submit' />
    </form>
  )
}

export default Form