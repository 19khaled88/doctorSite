import React from 'react'

const AvailableSlot = (props) => {
  const { bookingModal, setBooking, service } = props
  return (
    <div className="pb-16">
      <div style={{ color: '#19D3AE' }} className="text-2xl">
        Available slot for Today
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 mt-16">
        {service.map((result, index) => (
          <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title mx-auto text-center">{result.name}</h2>
              <p>Time: 5:00 pm - 6:00 pm</p>
              <div class="card-actions justify-center">
                <label
                  onClick={() => setBooking(['booking-modal', result.name])}
                  for="booking-modal"
                  class="btn modal-button"
                >
                  Booking Seat
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AvailableSlot
