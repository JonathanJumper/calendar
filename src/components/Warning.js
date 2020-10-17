import React from 'react'

const Warning = ({ visible, date, onEdit, onDelete }) => {
  return (
    <div className={visible ? "warning" : "warning hidden"}>
      You already have an appointment set to this date:
      <br />
      {date?.appointment}
      <br />
      <button onClick={onEdit}>
        Edit Appointment
      </button>
      <button onClick={onDelete}>
        Delete Appointment
      </button>
    </div>
  )
}

export default Warning