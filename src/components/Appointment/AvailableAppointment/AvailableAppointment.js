import React from 'react'
import { format } from 'date-fns'
const AvailableAppointment = ({ services, date, service }) => {
  // const results = []
  // for (const service in services) {
  //   results.push(services[service])
  // }

  return (
    <div className="pb-16">
      <div className="pb-16">
        <p style={{ color: '#19D3AE' }}>
          Available care services on {format(date, 'PP')}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-5 container mx-auto">
        {service.map((result, key) => (
          <div key={key} class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
              <h2
                style={{ color: '#19D3AE' }}
                className="card-title text-center mx-auto"
              >
                {result.name}
              </h2>
              <p className="text-justify">
                {result.desc.length > 148
                  ? result.desc.slice(0, 147) + '....'
                  : result.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AvailableAppointment
