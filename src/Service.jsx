import React from 'react';

export default function Service({service}) {
  return (
    <div className="serviceItem">
        <img src={service.img} alt="" className="service-image" />
        <div className="serviceDesc">
            {service.title}
        </div>
    </div>
  )
}
