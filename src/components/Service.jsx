import React from 'react';
import Image from '../assets/services/android.png';

export default function Service({service}) {
  return (
    <div className="serviceItem">
        <img src={Image} alt="" className="service-image" />
        <div className="serviceDesc">
            {service.title}
        </div>
    </div>
  )
}
