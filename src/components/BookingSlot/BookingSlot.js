import React, { useState } from 'react'
// import DatePicker from 'react-multi-date-picker'
// import TimePicker from 'react-multi-date-picker/plugins/time_picker'
import TimeKeeper from 'react-timekeeper'
import { toast } from 'react-toastify'

const BookingSlot = () => {
  const [time, setTime] = useState('00:00pm')
  const [time1, setTime1] = useState('00:00pm')

  const onsubmitTimeHandler = (e) => {
    e.preventDefault()

    fetch('http://localhost:5000/createSlot', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ slot: time + '-' + time1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast('New Time Slot added')
      })
      .catch((error) => {
        toast('New Time slot not added!')
      })
  }

  return (
    <div className="mt-6">
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={onsubmitTimeHandler}
      >
        <div className="flex flex-row space-x-10 pb-6">
          <div>
            <TimeKeeper
              time={time}
              onChange={(data) => setTime(data.formatted12)}
            />

            <div className="mt-5">
              {' '}
              <span className="text-purple-600">Start time is:</span>
              <span className="text-pink-600"> {time}</span>
            </div>
          </div>
          <div>
            <TimeKeeper
              time={time1}
              onChange={(data) => setTime1(data.formatted12)}
            />

            <div className="mt-5">
              {' '}
              <span className="text-purple-600">End time is:</span>
              <span className="text-pink-600"> {time1}</span>
            </div>
          </div>
        </div>
        <button className=" btn btn-wide" value="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default BookingSlot
