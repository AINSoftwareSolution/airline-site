import React from "react";
import Image from "next/image";
import LandingImage from "../utils/images/landing/header.jpg";
import { LandingImg } from "../utils/images";

const Offers = () => {
    return (
        <div className='offers'>
            {/*--------- banner start---------- */}
            <div className='offers-banner section__container d-flex justify-content-center align-items-center'>
                <div className="text-center">
                    <h1 className="section__header">Find And Book<br />A Great Experience</h1>
                    <Image src={LandingImage} alt="header" className='img-fluid' />
                </div>
            </div>
            {/*--------- banners end ----------*/}

              {/*----why chioose us ---------- */}
            <section className="section__container my-5">
                <p className="h5 text-primary text-center fw-bold">Why Choose Us</p>
                <h2 className="section__header">
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


            {/*-------- steps ------------  */}
            <section className="memories">
                <div className="section__container my-5">
                    <div className="memories__header">
                        <h2>
                            Travel to make memories all around the world
                        </h2>
                    </div>
                    <div className="row g-5 mt-4">
                        <div className="col-md-4">
                            <div className="card-custom">
                                <span className="icon-circle" style={{ backgroundColor: '#3d5cb8' }}>
                                    <i className="bi bi-calendar2-check"></i>
                                </span>
                                <h4>Book & relax</h4>
                                <p className='lh-base text-muted'>
                                    With &quot;Book and Relax,&quot; you can sit back, unwind, and enjoy the journey while
                                    we take care of everything else.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-custom">
                                <span className="icon-circle bg-warning">
                                    <i className="bi bi-shield-check"></i>
                                </span>
                                <h4>Smart Checklist</h4>
                                <p className='lh-base text-muted'>Introducing Smart Checklist with us,
                                    the innovative solution revolutionizing the way you travel with our airline.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-custom">
                                <span className="icon-circle bg-success">
                                    <i className="bi bi-tag"></i>
                                </span>
                                <h4>Save More</h4>
                                <p className='lh-base text-muted'>From discounted ticket prices to exclusive promotions and deals, we prioritize affordability without compromising on quality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Offers;
