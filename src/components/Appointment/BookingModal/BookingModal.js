import React, { useEffect, useRef, useState } from 'react'
import { format } from 'date-fns'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../Auth/firebase.init'
import { toast } from 'react-toastify'
const BookingModal = ({ booking, date }) => {
  const [slots, setSlots] = useState([])
  const selectedDate = useRef(null)
  const selectedTime = useRef(null)
  const patientName = useRef(null)
  const patientEmail = useRef(null)
  const patientPhone = useRef(null)

  const [user] = useAuthState(auth)

  const formHandler = (e) => {
    e.preventDefault()
    const valueDate = selectedDate.current.value
    const valueTime = selectedTime.current.value
    const valueName = patientName.current.value
    const valueEmail = patientEmail.current.value
    const valuePhone = patientPhone.current.value
    const value = {
      date: valueDate,
      time: valueTime,
      name: valueName,
      email: valueEmail,
      phone: valuePhone,
      service: booking[1],
    }
    if (valuePhone !== '') {
      fetch('http://localhost:5000/bookingAppointment', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(value),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success('Appointment booked successfully')
            e.target.reset()
          } else {
            toast.error(
              `already have appointment on ${data.booking?.date} for ${data.booking?.service}`,
            )
          }
        })
        .catch((error) => toast(error))
    } else {
      toast('Phone must no be empty')
    }
  }
  useEffect(() => {
    fetch('http://localhost:5000/getTimeSlot')
      .then((res) => res.json())
      .then((data) => setSlots(data))
  }, [])
  return (
    <div>
      {' '}
      <input type="checkbox" id={booking[0]} class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for={booking[0]}
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">Booking for {booking[1]}</h3>
          <p class="py-4">
            <form
              onSubmit={formHandler}
              className=" grid grid-cols-1 gap-3 justify-items-center"
            >
              <input
                ref={selectedDate}
                disabled
                type="text"
                value={format(date, 'PP')}
                class="input input-bordered w-full max-w-xs"
              />
              <select
                ref={selectedTime}
                class="select select-bordered w-full max-w-xs"
              >
                {slots.map((slot) => (
                  <option key={slot._id} value={slot.slot}>
                    {slot.slot}
                  </option>
                ))}
              </select>
              <input
                type="text"
                disabled
                ref={patientName}
                placeholder="Full Name"
                value={user ? user?.displayName : ''}
                class="input input-bordered w-full max-w-xs"
              />

              <input
                type="text"
                ref={patientEmail}
                disabled
                placeholder="Email"
                value={user ? user?.email : ''}
                class="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                ref={patientPhone}
                placeholder="Phone"
                class="input input-bordered w-full max-w-xs"
              />
              <button class="btn btn-success w-full max-w-xs">Submit</button>
            </form>
          </p>
        </div>
      </div>
    </div>
  )
}

export default BookingModal
