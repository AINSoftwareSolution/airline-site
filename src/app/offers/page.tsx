import React from 'react'
import Image from "next/image"
import { AboutImage,FlightImg, HotelImg, TravelGuideImg, TripIMg } from '../utils/images'

const Offers = () => {
  return (
    
<div>

    {/* About Sec Start */}
    
<section className="pt-5 pt-lg-5 step-container bg-light">
<div className="pb-md-4 mt-4 container">
  <div className="d-flex flex-column flex-md-row mb-0 w-100 mx-auto container-xl gap-4">
    <div className="w-100 w-md-50 max-h-330 p-0 rounded overflow-hidden">
      <Image
        src={AboutImage}
        alt="about image"
        title="About"
        layout="responsive"
        width={200}
        height={130}
        className="h-100 w-100 object-cover"
      />
    </div>
    <div className="p-3 d-flex align-items-end align-items-xl-center flex-column w-100 w-md-50 justify-content-center">
      <div>
        <div className="row">
          <div className="col-12 mb-3">
            <h4 className="fs-2 fw-bold theme-text-secondary mb-0">
             Time To Travel 
            </h4>
          </div>
        </div>
        <p className="theme-text-accent-one p-0 font-normal text-base max-w-440 text-center text-md-start">
         Reservationkart.com offers affordable airline tickets with exceptional customer service. 
         We ensure a seamless booking experience, prioritizing your travel needs and satisfaction every 
         step of the way. Book with us today!
         <br></br> 
         <br></br>
         We offer a complete traveler agency experience with services that include cab bookings and hotel 
         reservations. Plan your entire journey in one place, saving you time and money.
        </p>
      </div>
    </div>
  </div>
</div>
</section>

{ /* Benefit section */ }
<section id="service" className="py-5 ">
    <div className="container">
    <div className="text-center mb-5">
            <h4 className="fs-2 fw-bold theme-text-secondary">
             Explore The World
            </h4>
            <h6>Your Journey to unforgettable Adventures.</h6>
          </div>
        <div className="row text-start mb-5">
            <div className="col-lg-3 col-md-6">
              
                    <Image className="h-35 w-35 mb-3"
                     src={FlightImg} 
                    
                    alt="Flight Tickets" />
                    <div className="body">
                        <h5 className="title mt-1 ">Flight Tickets </h5>
                        <p className="text">Lorem ipsum dolor sit amet eiusmod adipis cing consec teture elit sed dolor tempor dolor sit amet.</p>
                    </div>
                  
                
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
                {/* <div className="card h-100 text-center"> */}
                    <Image className="h-35 w-35 mb-3" src={HotelImg} alt="Hotel Reservation" />
                    <div className="body">
                        <h5 className="title mt-1">Hotel Reservation</h5>
                        <p className="text">Lorem ipsum dolor sit amet eiusmod adipis cing consec teture elit sed dolor tempor dolor sit amet.</p>
                    
                   
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
                {/* <div className="card h-100 text-center"> */}
                    <Image className="h-35 w-35 mb-3" src={TravelGuideImg} alt="Travel Guide" />
                    <div className="body">
                        <h5 className="title mt-1">Travel Guide</h5>
                        <p className="text">Lorem ipsum dolor sit amet eiusmod adipis cing consec teture elit sed dolor tempor dolor sit amet.</p>
                    </div>
                  
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
                {/* <div className="card h-100 text-center"> */}
                    <Image className="h-35 w-35 mb-3" src={TripIMg} alt="Trip Activities" />
                    <div className="body">
                        <h5 className="title mt-1">Trip Activities</h5>
                        <p className="text">Lorem ipsum dolor sit amet eiusmod adipis cing consec teture elit sed dolor tempor dolor sit amet.</p>
                    </div>
                    
            </div>
        </div>
    </div>
</section>
</div>




  )
}

export default Offers


