import React from 'react'

const AvailableSlot = (props) => {
  const { bookingModal, setBooking } = props
  return (
    <div className="pb-16">
      <div style={{ color: '#19D3AE' }} className="text-2xl">
        Available slot for
      </div>
      <div className=" flex flex-row mt-16">
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title mx-auto text-center">Teeth Orthodontrics</h2>
            <p>Time: 5:00 pm - 6:00 pm</p>
            <div class="card-actions justify-center">
              <label
                onClick={() =>
                  setBooking(['booking-modal', 'Teeth Orthodontrics'])
                }
                for="booking-modal"
                class="btn modal-button"
              >
                Booking Seat
              </label>
            </div>
          </div>
        </div>
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title mx-auto text-center">Cosmetic Dentistry</h2>
            <p>Time: 5:00 pm - 6:00 pm</p>
            <div class="card-actions justify-center">
              <label
                onClick={() =>
                  setBooking(['booking-modal', 'Cosmetic Dentistry'])
                }
                for="booking-modal"
                class="btn modal-button"
              >
                Booking Seat
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">
            Congratulations random Interner user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
      </div> */}
    </div>
  )
}

export default AvailableSlot
