import React from "react";
import Image from "next/image";
import LandingImage from "../utils/images/landing/header.jpg";
import { LandingImg } from "../utils/images";

const Offers = () => {
  return (
    <div className="offers">
      <div className="d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h1 className="fw-bold">
            Find And Book
            <br />A Great Experience
          </h1>
          <Image src={LandingImage} alt="header" />
        </div>
      </div>

      {/* section */}
      <section className="container my-5">
        <p className="h5 text-primary text-center fw-bold">Why Choose Us</p>
        <h2 className="text-center display-5 mb-4 fw-bold">
          Plan your travel with confidence
        </h2>
        <p className="text-center lead mb-5">
          Find help with your bookings and travel plans, and see what to expect
          along your journey.
        </p>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-4">
              <span className="number number-blue">01</span>
              <h4>24/7 Customer Support</h4>
              <p>
                Our friendly agents are available around the clock to assist you
                with all your booking needs.
              </p>
            </div>
            <div className="mb-4">
              <span className="number number-orange">02</span>
              <h4>Last-Minute Flight Deals</h4>
              <p>
                Need to travel on short notice? We have you covered with
                unbeatable last-minute deals.
              </p>
            </div>
            <div>
              <span className="number number-light-orange">03</span>
              <h4>Group Booking</h4>
              <p>Special rates and arrangements for group travel.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-group">
              <Image
                src={LandingImg}
                className="img-fluid rounded-image mb-4"
                alt="Plan 1"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
