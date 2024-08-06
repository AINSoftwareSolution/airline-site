import React from 'react'
import Image from 'next/image'
import LandingImage from '../utils/images/landing/header.jpg'

const Offers = () => {
    return (
        <div className='offers d-flex justify-content-center align-items-center'>
            <div className="text-center">
                <h1 className="fw-bold">Find And Book<br />A Great Experience</h1>
                <Image src={LandingImage} alt="header"  />
            </div>
        </div>
    )
}

export default Offers