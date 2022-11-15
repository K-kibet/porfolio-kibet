import React from 'react'
import Service from './Service';
import { services } from './data';

export default function Services() {
  return (
    <div className='services background' id='services'>
        <h1>Services</h1>
        <div>
          {
            services.map(service => {
              return <Service key={service.id} service={service}/>
            })
          }
        </div>
    </div>
  )
}
