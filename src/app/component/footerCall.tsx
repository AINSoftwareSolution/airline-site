import React from 'react'
import Image from 'next/image'
import { Caller } from '../utils/images'

const footerCall = () => {
    return (
        <div id="back-top" className="back-to-top">
            <a href="tel:1888 5087143">
                <span className="d-flex align-items-center">
                    <figure className="flex-shrink-0 mb-0">
                        <Image alt="call support" src={Caller} className="img-fluid" 
                        width="48" height="48" />
                    </figure>
                    <p className="flex-grow-1 ms-3 small mb-0 p-0 text-dark">For New Booking, Changes, Cancellation &amp; Last
                        minute deals Call us now save extra 25% off
                        <span className="theme-text-primary"> 1888 5087143</span>
                    </p>
                </span>
            </a>
        </div>
    )
}

export default footerCall