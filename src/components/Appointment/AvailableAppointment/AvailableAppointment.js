import React from 'react'
import { format } from 'date-fns'
const AvailableAppointment = ({ services, date }) => {
  const results = []
  for (const service in services) {
    results.push(services[service])
  }

  return (
    <div className="pb-16">
      <div className="pb-16">
        <p style={{ color: '#19D3AE' }}>
          Available Appointment on {format(date, 'PP')}
        </p>
        <p style={{ color: 'gray' }}>Please select a service</p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 place-items-center">
        {results.map((result, key) => (
          <div key={key} class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
              <h2
                style={{ color: '#19D3AE' }}
                className="card-title text-center mx-auto"
              >
                {result}
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AvailableAppointment
