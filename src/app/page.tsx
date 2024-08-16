"use client";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import SearchEngine from "./container/searchEngine";
import { CallModal } from "./component";
import {
  bestflightData,
  featuredDeals,
  flightDestinations,
  reviewsData,
  steps,
} from "./utils/data";
import {
  experienceBg,
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery5,
  EasyImg,
  ExcImg,
  LowestImg,
  Support,
  RecomandationImage1,
  RecomandationImage2,
  RecomandationImage3,
  RecomandationImage4,
  RecomandationImage5,
  RecomandationImage6,
} from "./utils/images";

const Home = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <main>
      <div className="pagewrap" id="home">
        <div className="head-wrapper">
          <div className="search-engine">
            <video autoPlay loop muted>
              <source src="/flight_video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-12  text-center position-relative">
                  <h1 className="display-1 mb-2 theme-text-white theme-text-shadow">
                    Your dream travel just <br /> a phone call away!
                  </h1>
                  <p className="mb-0 theme-text-white">
                    Travel has always proven to be the ultimate cure. Even if
                    not pursued with fervor,
                    <br />
                    unfamiliar destinations consistently offer the tranquility
                    you have been seeking.
                  </p>
                </div>
              </div>
              <SearchEngine handleToggle={handleToggle} />
            </div>
          </div>
        </div>
      </div>

      {/* Amazing travel deals section start */}
      <section className="travel-deal py-5 border-top" id="travelDeals">
        <div className="container">
          <div className="row my-5 text-center" data-aos="fade-up">
            <div className="col-12">
              <h3 className="h3 theme-text-secondary fw-bold mb-3">
                Amazing travel deals &amp; More
              </h3>
              <p className="theme-text-accent-two mb-0">
                Explore the best of travel with our exclusive deals for
              </p>
            </div>
          </div>
          <div className="row" data-aos="fade-down">
            {bestflightData.map((flights) => (
              <div
                className="col-12 col-md-6 col-xl-4 mb-3"
                key={flights.arriving}
              >
                <div className="card h-100 border-0 shadow-lg theme-bg-white theme-border-radius card-hover">
                  <div className="card-body">
                    <h6 className="card-title fw-bold">
                      {flights.arriving}
                      <i className="bi bi-arrow-right mx-2"></i>
                      {flights.destination}
                    </h6>
                    <p className="card-text">{flights.date}</p>
                    <div className="text-start">
                      <span className="h5 fw-bold theme-text-primary">
                        <span className="small" style={{ color: "#0b97bf" }}>
                          From
                        </span>
                        <i className="bi bi-currency-dollar"></i>
                        <span style={{ color: "#0b97bf" }}>
                          {flights.price}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section Starts */}
      <section className="featured-deal border-top py-5" id="featuredFlights">
        <div className="container">
          {/* Section Header */}
          <div className="row my-5" data-aos="fade-up">
            <div className="col-12 text-center">
              <h4 className="h3 theme-text-secondary fw-bold mb-3">
                Featured Flights Deals
              </h4>
              <p className="theme-text-accent-two mb-0">
                Everything You Want &amp; More
              </p>
            </div>
          </div>
          {/* Featured Deals Grid */}
          <div className="row" data-aos="fade-down">
            {featuredDeals.map((deal) => (
              <div className="col-12 col-md-6 col-lg-3 mb-4" key={deal.price}>
                <div className="card border-0 theme-box-shadow theme-border-radius h-100">
                  <div className="picHeight overflow-hidden theme-border-radius-top">
                    <Image
                      src={deal.imageSrc}
                      className="card-img-top img-fluid"
                      alt={deal.imageAlt}
                      title={deal.imageTitle}
                    />
                  </div>
                  <div className="card-body theme-bg-white theme-border-radius-bottom">
                    <span className="d-block theme-text-accent-one mb-2">
                      {deal.destination}
                    </span>
                    <span className="d-flex font-small theme-text-accent-two mb-2">
                      {deal.tripType}
                      <span className="ms-1">{deal.class}</span>
                    </span>
                    <span className="h6 fw-bold theme-text-primary">
                      <span className="small" style={{ color: "#0b97bf" }}>
                        From
                      </span>
                      <i className="bi bi-currency-dollar"></i>
                      <span style={{ color: "#0b97bf" }}>{deal.price}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section id="whyBookWithUs">
        <div className="container my-4">
          <div className="text-center mb-4">
            <h4 className="fs-2 fw-bold theme-text-secondary">
              Why Book With Us?
            </h4>
          </div>
          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="card h-100">
                <div className="card-body text-center mb-2">
                  <Image
                    src={EasyImg}
                    className="w-50 mb-3"
                    alt="easy booking"
                  />
                  <h5 className="card-title">Easy Booking</h5>
                  <p className="card-text">
                    We offer easy and convenient flight bookings with attractive
                    offers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100">
                <div className="card-body text-center mb-4">
                  <Image
                    src={LowestImg}
                    className="w-50 mb-3"
                    alt="best price"
                  />
                  <h5 className="card-title">Lowest Price</h5>
                  <p className="card-test">
                    We ensure low rates on hotel reservation, holiday packages
                    and on flight tickets.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100">
                <div className="card-body text-center mb-4">
                  <Image
                    src={ExcImg}
                    className="w-50 mb-3"
                    alt="Existing Deal"
                  />
                  <h5 className="card-title">Exciting Deals</h5>
                  <p className="card-text">
                    Enjoy exciting deals on flights, hotels, buses, car rental
                    and tour packages.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100">
                <div className="card-body text-center mb-4">
                  <Image
                    src={Support}
                    className="w-50 mb-3"
                    alt="24/7 Support"
                  />
                  <h5 className="card-title">24/7 Support</h5>
                  <p className="card-text">
                    Get assistance 24/7 on any kind of travel related query. We
                    are happy to assist you.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Most destination place start */}
      <section
        className="flight-destination py-5 border-top"
        id="topDestination"
      >
        <div className="container">
          {/* <!-- Section Header --> */}
          <div className="row my-5" data-aos="fade-down">
            <div className="col-12 text-center">
              <h4 className="h3 fw-bold theme-text-secondary mb-3">
                Flights to top destinations
              </h4>
              <p className="theme-text-accent-two mb-0">
                Everything You Want &amp; More
              </p>
            </div>
          </div>
          {/* <!-- Destination Cards --> */}
          <div className="row" data-aos="fade-up">
            {/* <!-- Repeatable Card Item --> */}
            {flightDestinations.map((destination) => (
              <div
                className="col-12 col-md-6 col-lg-4 mb-4"
                key={destination.title}
              >
                <div className="card h-100 border-0 theme-box-shadow theme-border-radius overflow-hidden">
                  <div className="pictureHeight overflow-hidden theme-border-radius-top img-container">
                    <Image
                      src={destination.imageSrc}
                      className="card-img-top img-fluid"
                      alt={destination.imageAlt}
                      title={destination.imageTitle}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{destination.title}</h5>
                    <p className="card-text theme-text-accent-two">
                      {destination.description}
                    </p>
                    <Link href="#" className="text-link text-link-effect">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Work  start */}
      <section className="py-5 bg-white border-top" id="howWork">
        <div className="container">
          <div className="row overflow-hidden py-5">
            {/* <!-- First Step --> */}
            <div
              className="col-12 col-lg-3 d-flex flex-column align-items-center text-center aos-init aos-animate"
              data-aos="fade-right"
            >
              <p className="fw-bold text-accent-two">How it works?</p>
              <h3 className="h3 fw-bold theme-text-secondary mb-3">
                Amazing Deals Best Prices
              </h3>
              <p className="font-small fw-bold text-accent-one mb-0">
                Search &amp; Book in 3 Simple Steps
              </p>
            </div>

            {steps.map((step) => (
              <div
                key={step.id}
                className="col-12 col-lg-3 mb-4 mb-lg-0 aos-init aos-animate"
              >
                <div className="text-center shadow-lg border-radius process-card hover-bg-light p-4">
                  <Image
                    src={step.imageSrc}
                    className="w-40 mb-2"
                    height={60}
                    alt={step.imageAlt}
                  />
                  <p className="pt-4 pb-2 mb-0">{step.stepTitle}</p>
                  <p className="mb-0 pb-5 text-accent-two">
                    {step.stepDescription}
                  </p>
                  <div className="step-corner">
                    <div className="step-arrow">{step.id}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* review */}
      <section className="my-4" id="reviews">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h4 className="fs-2 fw-bold theme-text-secondary mb-0">
                Hear From Our Happy Customers
              </h4>
              <p className="mb-0 theme-text-accent-one">
                Discover what makes our service exceptional through real
                customer experiences
              </p>
            </div>
          </div>
          <div className="row">
            {reviewsData.map((review, index) => (
              <div className="col-md-4 mb-5 mb-md-0" key={index}>
                <h5 className="fw-bold mb-0">{review.name}</h5>
                <ul className="list-unstyled d-flex gap-1">
                  {[...Array(Math.floor(review.rating))].map((_, i) => (
                    <li key={i}>
                      <i className="fa-sm text-warning bi bi-star-fill" />
                    </li>
                  ))}
                  {review.rating % 1 !== 0 && (
                    <li>
                      <i className="fa-sm text-warning bi bi-star-half" />
                    </li>
                  )}
                </ul>
                <p className="mt-2">
                  <i className="bi bi-quote" /> {review.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommandation section Start */}

      <section className="recom-sec py-5 border-top" id="Recommendations">
        <div className="container">
          <div className="row my-5">
            <div className="col-12" data-aos="fade-up" data-aos-delay="200">
              <p className="text-center text-primary mb-3">
                <span className="ribbon">Recommendations</span>
              </p>
              <h5 className="text-secondary h3 fw-bold text-center mb-0">
                Only Unique Experiences
              </h5>
            </div>
          </div>
          <div className="row">
            {/* Recommendation Card */}
            <div
              className="col-12 col-md-4 mb-4"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <div className=" card border-0 rounded-3 shadow-sm item-effect position-relative">
                <Image
                  src={RecomandationImage1}
                  className="card-img-top"
                  alt="Unique Experience One"
                  title="Unique Experience One"
                />
                <div className="card-body position-absolute top-0 start-0 p-3">
                  <h6 className="card-title fw-bold text-white">
                    New York, United States
                  </h6>
                  <span className="d-flex text-white font-14">Get prices</span>
                </div>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>

            <div
              className="col-12 col-md-4 mb-4"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <div className="card border-0 rounded-3 shadow-sm item-effect position-relative">
                <Image
                  src={RecomandationImage2}
                  className="card-img-top img-fluid"
                  alt="Unique Experience One"
                  title="Unique Experience One"
                />
                <div className="card-body position-absolute top-0 start-0 p-3">
                  <h6 className="card-title fw-bold text-white">Cusco, Peru</h6>
                  <span className="d-flex text-white font-14">Get prices</span>
                </div>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>

            <div
              className="col-12 col-md-4 mb-4"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <div className=" nevada card border-0 rounded-3 shadow-sm item-effect position-relative">
                <Image
                  src={RecomandationImage3}
                  className="card-img-top img-fluid"
                  alt="Unique Experience One"
                  title="Unique Experience One"
                />
                <div className="card-body position-absolute top-0 start-0 p-3">
                  <h6 className="card-title fw-bold text-white">
                    New York, United States
                  </h6>
                  <span className="d-flex text-white font-14">Get prices</span>
                </div>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>

            <div
              className="col-12 col-md-4 mb-4"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <div className="card border-0 rounded-3 shadow-sm item-effect position-relative">
                <Image
                  src={RecomandationImage4}
                  className="card-img-top img-fluid"
                  alt="Unique Experience One"
                  title="Unique Experience One"
                />
                <div className="card-body position-absolute top-0 start-0 p-3">
                  <h6 className="card-title fw-bold text-white">
                    New York, United States
                  </h6>
                  <span className="d-flex text-white font-14">Get prices</span>
                </div>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>

            <div
              className="col-12 col-md-4 mb-4"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <div className="card border-0 rounded-3 shadow-sm item-effect position-relative">
                <Image
                  src={RecomandationImage5}
                  className="card-img-top img-fluid"
                  alt="Unique Experience One"
                  title="Unique Experience One"
                />
                <div className="card-body position-absolute top-0 start-0 p-3">
                  <h6 className="card-title fw-bold text-white">
                    New York, United States
                  </h6>
                  <span className="d-flex text-white font-14">Get prices</span>
                </div>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>
            <div
              className="col-12 col-md-4 mb-4"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <div className="card border-0 rounded-3 shadow-sm item-effect position-relative">
                <Image
                  src={RecomandationImage6}
                  className="card-img-top img-fluid"
                  alt="Unique Experience One"
                  title="Unique Experience One"
                />
                <div className="card-body position-absolute top-0 start-0 p-3">
                  <h6 className="card-title fw-bold text-white">
                    New York, United States
                  </h6>
                  <span className="d-flex text-white font-14">Get prices</span>
                </div>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>
          </div>  
        </div>
      </section>
      {/* call us modal */}
      <CallModal show={show} handleClose={handleToggle} setShow={setShow} />
    </main>
  );
};

export default Home;
