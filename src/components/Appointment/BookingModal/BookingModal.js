import React, { useRef } from 'react'
import { format } from 'date-fns'

const BookingModal = ({ booking, date }) => {
  const selectedDate = useRef(null)
  const selectedTime = useRef(null)
  const formHandler = (e) => {
    e.preventDefault()
    const valueDate = selectedDate.current.value
    const valuetime = selectedTime.current.value
    console.log(valueDate, valuetime)
  }
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
                <option value={'10.00 am - 11:00 am'}>
                  10:00 am - 11:00 am
                </option>
                <option value={'11.00 am - 12:00 pm'}>
                  11:00 am - 12:00 pm
                </option>
                <option value={'12.00 pm - 1:00 pm'}>12:00 am - 1:00 am</option>
              </select>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Type here"
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
