"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { reviewsData } from "./utils/data";
import { CallModal, } from "./component";
import {
  experienceBg,
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery5,
  AbuDhaabiImg,
  LondonImg,
  SydneyImg,
  NewYorkImg,
  GreenLAndImage,
  GreeceImage,
  DubaiDestinationImage,
  AustraliyaImage,
  ItalyImage,
  LasVegasImage,
  ThailandImage,
  TokyoImage,
  WashingtonDCImage,
  HowItWorkImg1,
  HowItWorkImg2,
  HowItWorkImg3,
  EasyImg,
  ExcImg,
  LowestImg,
  Support,
} from "./utils/images";
import SearchEngine from "./container/searchEngine";

const Home = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <main>
      <div className="pagewrap" id="home">
        <div className="head-wrapper">
          <div
            className="search-engine"
          // style={{ backgroundImage: `url(${bannerImage1.src})` }}
          >
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

                  {/* <button
                    type="submit"
                    className="btn btn-search mt-4 mb-6 me-2"
                    onClick={handleToggle}
                  >
                    <span className="fw-bold"> Call Now</span>
                  </button> */}
                  {/* <PaymentMethod /> */}
                </div>
              </div>
              <SearchEngine handleToggle={handleToggle} />
            </div>
          </div>
        </div>
        {/*   <NewsLetter  /> */}
      </div>

      {/* Amazing travel deals section start */}
      <section className="travel-deal py-5 border-top" id="travelDeals">
        <div className="container">
          <div className="row my-5 text-center" data-aos="fade-up">
            <div className="col-12">
              <h3 className="h3 theme-text-secondary fw-bold mb-3">Amazing travel deals &amp; More</h3>
              <p className="theme-text-accent-two mb-0">Explore the best of travel with our exclusive deals for</p>
            </div>
          </div>
          <div className="row" data-aos="fade-down">
            <div className="col-12 col-md-6 col-xl-4 mb-3">
              <div className="card h-100 border-0 shadow-lg theme-bg-white theme-border-radius card-hover">
                <div className="card-body">
                  <h6 className="card-title fw-bold">Berlin BER<i className="bi bi-arrow-right mx-2"></i>Japan TYO</h6>
                  <p className="card-text">Sun, 31/08 - Thu, 030/09</p>
                  <div className="text-start">
                    <span className="h5 fw-bold theme-text-primary" >
                      <span className="small" style={{ color: '#0b97bf' }}>From</span> <i className="bi bi-currency-dollar"></i><span style={{ color: '#0b97bf' }}>940</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Repeatable Item --> */}
            <div className="col-12 col-md-6 col-xl-4 mb-3">
              <div className="card h-100 border-0 shadow-lg theme-bg-white theme-border-radius card-hover">
                <div className="card-body">
                  <h6 className="card-title fw-bold">Abu Dhabi UAE<i className="bi bi-arrow-right mx-2"></i>London City Airport</h6>
                  <p className="card-text">Sun, 31/08 - Thu, 30/09</p>
                  <div className="text-start">
                    <span className="h5 fw-bold theme-text-secondary">
                      <span className="small" style={{ color: '#0b97bf' }}>From</span> <i className="bi bi-currency-dollar"></i><span style={{ color: '#0b97bf' }}>830</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Repeatable Item --> */}
            <div className="col-12 col-md-6 col-xl-4 mb-3">
              <div className="card h-100 border-0 shadow-lg theme-bg-white theme-border-radius card-hover">
                <div className="card-body">
                  <h6 className="card-title fw-bold">Denmark Copenhagen<i className="bi bi-arrow-right mx-2"></i>Norway Oslo</h6>
                  <p className="card-text">Sat, 31/08 - Mon, 30/09</p>
                  <div className="text-start">
                    <span className="h5 fw-bold theme-text-secondary">
                      <span className="small" style={{ color: '#0b97bf' }}>From</span> <i className="bi bi-currency-dollar"></i><span style={{ color: '#0b97bf' }}>1,198</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Repeatable Item --> */}
            <div className="col-12 col-md-6 col-xl-4 mb-3">
              <div className="card h-100 border-0 shadow-lg theme-bg-white theme-border-radius card-hover">
                <div className="card-body">
                  <h6 className="card-title fw-bold">Glasgow, UK<i className="bi bi-arrow-right mx-2"></i>Australia, Sydney</h6>
                  <p className="card-text">Sun, 10/09 - Thu, 31/10</p>
                  <div className="text-start">
                    <span className="h5 fw-bold theme-text-secondary">
                      <span className="small" style={{ color: '#0b97bf' }}>From</span> <i className="bi bi-currency-dollar"></i><span style={{ color: '#0b97bf' }}>1,300</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Repeatable Item --> */}
            <div className="col-12 col-md-6 col-xl-4 mb-3">
              <div className="card h-100 border-0 shadow-lg theme-bg-white theme-border-radius card-hover">
                <div className="card-body">
                  <h6 className="card-title fw-bold">Egypt, Cairo<i className="bi bi-arrow-right mx-2"></i>Greece, Athens</h6>
                  <p className="card-text">Sun, 10/09 - Thu, 31/10</p>
                  <div className="text-start">
                    <span className="h5 fw-bold theme-text-secondary">
                      <span className="small" style={{ color: '#0b97bf' }}>From</span> <i className="bi bi-currency-dollar"></i><span style={{ color: '#0b97bf' }}>425</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* 
            <!-- Repeatable Item --> */}
            <div className="col-12 col-md-6 col-xl-4 mb-3">
              <div className="card h-100 border-0 shadow-lg theme-bg-white theme-border-radius card-hover">
                <div className="card-body">
                  <h6 className="card-title fw-bold">Bahamas, Freeport<i className="bi bi-arrow-right mx-2"></i>Spain, Barcelona</h6>
                  <p className="card-text">Sun, 10/09 - Thu, 31/10</p>
                  <div className="text-start">
                    <span className="h5 fw-bold theme-text-secondary">
                      <span className="small" style={{ color: '#0b97bf' }}>From</span> <i className="bi bi-currency-dollar"></i><span style={{ color: '#0b97bf' }}>2,130</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Repeatable Item --> */}
            <div className="col-12 col-md-6 col-xl-4 mb-3">
              <div className="card h-100 border-0 shadow-lg theme-bg-white theme-border-radius card-hover">
                <div className="card-body">
                  <h6 className="card-title fw-bold">Las Vegas, USA<i className="bi bi-arrow-right mx-2"></i>New York, USA</h6>
                  <p className="card-text">Sun, 10/09 - Thu, 31/10</p>
                  <div className="text-start">
                    <span className="h5 fw-bold theme-text-secondary">
                      <span className="small" style={{ color: '#0b97bf' }}>From</span> <i className="bi bi-currency-dollar"></i><span style={{ color: '#0b97bf' }}>475</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Repeatable Item --> */}
            <div className="col-12 col-md-6 col-xl-4 mb-3">
              <div className="card h-100 border-0 shadow-lg theme-bg-white theme-border-radius card-hover">
                <div className="card-body">
                  <h6 className="card-title fw-bold">San Francisco, SFO<i className="bi bi-arrow-right mx-2"></i>London, LHR</h6>
                  <p className="card-text">Sun, 10/09 - Thu, 31/10</p>
                  <div className="text-start">
                    <span className="h5 fw-bold theme-text-secondary">
                      <span className="small" style={{ color: '#0b97bf' }}>From</span> <i className="bi bi-currency-dollar"></i><span style={{ color: '#0b97bf' }}>1,140</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-12 col-md-6 col-xl-4 mb-3">
              <div className="card h-100 border-0 shadow-lg theme-bg-white theme-border-radius card-hover">
                <div className="card-body">
                  <h6 className="card-title fw-bold">Paris, ORY<i className="bi bi-arrow-right mx-2"></i>New York JFK</h6>
                  <p className="card-text">Sun, 10/09 - Thu, 31/10</p>
                  <div className="text-start">
                    <span className="h5 fw-bold theme-text-secondary">
                      <span className="small" style={{ color: '#0b97bf' }}>From</span> <i className="bi bi-currency-dollar"></i><span style={{ color: '#0b97bf' }}>595</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amazing travel deals section End */}

      {/* Features Section Starts */}
      <section className="featured-deal border-top py-5" id="featuredFlights">
        <div className="container">
          {/* Section Header */}
          <div className="row my-5" data-aos="fade-up">
            <div className="col-12 text-center">
              <h4 className="h3 theme-text-secondary fw-bold mb-3">Featured Flights Deals</h4>
              <p className="theme-text-accent-two mb-0">Everything You Want &amp; More</p>
            </div>
          </div>
          {/* Featured Deals Grid */}
          <div className="row" data-aos="fade-down">
            {/* Deal Card 1 */}
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="card border-0 theme-box-shadow theme-border-radius h-100">
                <div className="picHeight overflow-hidden theme-border-radius-top">
                  <Image src={LondonImg} className="card-img-top img-fluid" alt="Deals One" title="Deals One" />
                </div>
                <div className="card-body theme-bg-white theme-border-radius-bottom">
                  <span className="d-block theme-text-accent-one mb-2">London, UK</span>
                  <span className="d-flex font-small theme-text-accent-two mb-2">Oneway Trip, <span className="ms-1">Economy</span></span>
                  <span className="h6 fw-bold theme-text-primary" >
                    <span className="small" style={{ color: '#0b97bf' }}>From</span> <i className="bi bi-currency-dollar"></i><span style={{ color: '#0b97bf' }}>330 USD</span>
                  </span>
                </div>
              </div>
            </div>
            {/* Deal Card 2 */}
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="card border-0 theme-box-shadow theme-border-radius h-100">
                <div className="picHeight overflow-hidden theme-border-radius-top">
                  <Image src={AbuDhaabiImg} className="card-img-top img-fluid" alt="Deals Two" title="Deals Two" />
                </div>
                <div className="card-body theme-bg-white theme-border-radius-bottom ">
                  <span className=" d-block theme-text-accent-one fw-bold mb-2">Abu Dhabi, UAE</span>
                  <span className="d-flex font-small theme-text-accent-two mb-2">Oneway Trip, <span className="ms-1">Economy</span></span>
                  <span className="h6 fw-bold theme-text-primary" >
                    <span className="small" style={{ color: '#0b97bf' }}>From</span> <i className="bi bi-currency-dollar"></i><span style={{ color: '#0b97bf' }}>180 USD</span>
                  </span>
                </div>
              </div>
            </div>
            {/* Deal Card 3 */}
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="card border-0 theme-box-shadow theme-border-radius h-100">
                <div className="picHeight overflow-hidden theme-border-radius-top">
                  <Image src={NewYorkImg} className="card-img-top img-fluid" alt="Deals Three" title="Deals Three" />
                </div>
                <div className="card-body theme-bg-white theme-border-radius-bottom">
                  <span className="d-block theme-text-accent-one mb-2">New York, London</span>
                  <span className="d-flex font-small theme-text-accent-two mb-2">Oneway Trip, <span className="ms-1">Economy</span></span>
                  <span className="h6 fw-bold theme-text-primary" >
                    <span className="small" style={{ color: '#0b97bf' }}>From</span> <i className="bi bi-currency-dollar"></i><span style={{ color: '#0b97bf' }}>220 USD</span>
                  </span>
                </div>
              </div>
            </div>
            {/* Deal Card 4 */}
            <div className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="card border-0 theme-box-shadow theme-border-radius h-100">
                <div className="picHeight overflow-hidden theme-border-radius-top">
                  <Image src={SydneyImg} className="card-img-top img-fluid" alt="Deals Four" title="Deals Four" />
                </div>
                <div className="card-body theme-bg-white theme-border-radius-bottom ">
                  <span className="d-block theme-text-accent-one mb-2">Sydney, Australia</span>
                  <span className="d-flex font-small theme-text-accent-two mb-2">Oneway Trip, <span className="ms-1">Economy</span></span>
                  <span className="h6 fw-bold theme-text-primary" >
                    <span className="small" style={{ color: '#0b97bf' }}>From</span> <i className="bi bi-currency-dollar"></i><span style={{ color: '#0b97bf' }}>340 USD</span>
                  </span>
                </div>
              </div>
            </div>
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
                    {" "}
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
      <section className="flight-destination py-5 border-top" id="topDestination">
        <div className="container">
          {/* <!-- Section Header --> */}
          <div className="row my-5" data-aos="fade-down">
            <div className="col-12 text-center">
              <h4 className="h3 fw-bold theme-text-secondary mb-3">Flights to top destinations</h4>
              <p className="theme-text-accent-two mb-0">Everything You Want &amp; More</p>
            </div>
          </div>
          {/* <!-- Destination Cards --> */}
          <div className="row" data-aos="fade-up">
            {/* <!-- Repeatable Card Item --> */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 border-0 theme-box-shadow theme-border-radius overflow-hidden">
                <div className="pictureHeight overflow-hidden theme-border-radius-top img-container">
                  <Image src={GreenLAndImage} className="card-img-top img-fluid" alt="flight-destination-one" title="flight-destination-one" />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">Emirates flight to Greenland</h5>
                  <p className="card-text theme-text-accent-two">Book your favorite itinerary at the best price</p>
                  <a href="#" className="text-link text-link-effect">Book Now</a>
                </div>
              </div>
            </div>

            {/* <!-- Repeatable Card Item --> */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 border-0 theme-box-shadow theme-border-radius overflow-hidden">
                <div className=" picHeight overflow-hidden theme-border-radius-top img-container">
                  <Image src={DubaiDestinationImage} className="card-img-top img-fluid" alt="flight-destination-two" title="flight-destination-two" />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">Qatar Airways Flights to Dubai</h5>
                  <p className="card-text theme-text-accent-two">Book your favorite itinerary at the best price</p>
                  <a href="#" className="text-link text-link-effect">Book Now</a>
                </div>
              </div>
            </div>

            {/* <!-- Repeatable Card Item --> */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 border-0 theme-box-shadow theme-border-radius overflow-hidden">
                <div className=" thailand overflow-hidden theme-border-radius-top img-container">
                  <Image src={ThailandImage} className="card-img-top img-fluid" alt="flight-destination-three" title="flight-destination-three" />
                </div>
                <div className="card-body mt-1">
                  <h5 className="card-title fw-bold">Singapore Airlines to Thailand</h5>
                  <p className="card-text theme-text-accent-two">Book your favorite itinerary at the best price</p>
                  <a href="#" className="text-link text-link-effect ">Book Now</a>
                </div>
              </div>
            </div>

            {/* <!-- Repeatable Card Item --> */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 border-0 theme-box-shadow theme-border-radius overflow-hidden">
                <div className="tokyo overflow-hidden theme-border-radius-top img-container">
                  <Image src={TokyoImage} className="card-img-top img-fluid" alt="flight-destination-four" title="flight-destination-four" />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">Cathay Pacific Airways to Tokyo</h5>
                  <p className="card-text theme-text-accent-two">Book your favorite itinerary at the best price</p>
                  <a href="#" className="text-link text-link-effect">Book Now</a>
                </div>
              </div>
            </div>

            {/* <!-- Repeatable Card Item --> */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 border-0 theme-box-shadow theme-border-radius overflow-hidden">
                <div className=" australia overflow-hidden theme-border-radius-top img-container">
                  <Image src={AustraliyaImage} className="card-img-top img-fluid" alt="flight-destination-four" title="flight-destination-four" />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">Qantas Airways to Australia</h5>
                  <p className="card-text theme-text-accent-two">Book your favorite itinerary at the best price</p>
                  <a href="#" className="text-link text-link-effect">Book Now</a>
                </div>
              </div>
            </div>

            {/* <!-- Repeatable Card Item --> */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 border-0 theme-box-shadow theme-border-radius overflow-hidden">
                <div className="overflow-hidden theme-border-radius-top img-container">
                  <Image src={WashingtonDCImage} className="card-img-top img-fluid" alt="flight-destination-four" title="flight-destination-four" />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">EVA Air to Washington DC</h5>
                  <p className="card-text theme-text-accent-two">Book your favorite itinerary at the best price</p>
                  <a href="#" className="text-link text-link-effect">Book Now</a>
                </div>
              </div>
            </div>

            {/* <!-- Repeatable Card Item --> */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 border-0 theme-box-shadow theme-border-radius overflow-hidden">
                <div className="overflow-hidden theme-border-radius-top img-container">
                  <Image src={LasVegasImage} className="card-img-top img-fluid" alt="flight-destination-four" title="flight-destination-four" />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">Egypt Air to Las Vegas</h5>
                  <p className="card-text theme-text-accent-two">Book your favorite itinerary at the best price</p>
                  <a href="#" className="text-link text-link-effect">Book Now</a>
                </div>
              </div>
            </div>

            {/* <!-- Repeatable Card Item --> */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 border-0 theme-box-shadow theme-border-radius overflow-hidden">
                <div className="overflow-hidden theme-border-radius-top img-container">
                  <Image src={ItalyImage} className="card-img-top img-fluid" alt="flight-destination-four" title="flight-destination-four" />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">Night in Vernazza Italy Vacation</h5>
                  <p className="card-text theme-text-accent-two">Book your favorite itinerary at the best price</p>
                  <a href="#" className="text-link text-link-effect">Book Now</a>
                </div>
              </div>
            </div>

            {/* <!-- Repeatable Card Item --> */}
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 border-0 theme-box-shadow theme-border-radius overflow-hidden">
                <div className="overflow-hidden theme-border-radius-top img-container">
                  <Image src={GreeceImage} className="card-img-top img-fluid" alt="flight-destination-four" title="flight-destination-four" />
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">Egypt to Greece</h5>
                  <p className="card-text theme-text-accent-two">Book your favorite itinerary at the best price</p>
                  <a href="#" className="text-link text-link-effect">Book Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Most Destination place end  */}

      {/* How it Work  start */}
      <section className="py-5 bg-white border-top" id="howWork">
        <div className="container">
          <div className="row overflow-hidden py-5">
            {/* <!-- First Step --> */}
            <div className="col-12 col-lg-3 d-flex flex-column align-items-center text-center aos-init aos-animate" data-aos="fade-right">
              <p className="fw-bold text-accent-two">How it works?</p>
              <h3 className="h3 fw-bold theme-text-secondary mb-3">Amazing Deals Best Prices</h3>
              <p className="font-small fw-bold text-accent-one mb-0">Search &amp; Book in 3 Simple Steps</p>
            </div>

            {/* <!-- Step 1 --> */}
            <div className="col-12 col-lg-3 mb-4 mb-lg-0 aos-init aos-animate" data-aos="fade-left">
              <div className="text-center shadow-lg border-radius process-card hover-bg-light p-4">
                <Image
                  src={HowItWorkImg1}
                  className="w-40 mb-2"
                  height={60}
                  alt="easy booking"
                />
                {/* <!-- SVG content --> */}

                <p className="pt-4 pb-2 mb-0">Select your flight</p>
                <p className="mb-0 pb-5 text-accent-two">&amp; tell us your preferences</p>
                <div className="step-corner">
                  <div className="step-arrow"></div>
                </div>
              </div>
            </div>

            {/* <!-- Step 2 --> */}
            <div className="col-12 col-lg-3 mb-4 mb-lg-0 aos-init aos-animate" data-aos="fade-left">
              <div className=" h-100 text-center shadow-lg border-radius process-card hover-bg-light p-4">
                <Image
                  src={HowItWorkImg2}
                  className="w-40 mb-2 rounded-full"
                  height={60}
                  alt="easy booking"
                />
                <p className="pt-4 pb-2 mb-0">Get multiple fare deals</p>
                <p className="mb-0 pb-5 text-accent-two">from verified travel experts</p>
                <div className="step-corner">
                  <div className="step-arrow">2</div>
                </div>
              </div>
            </div>

            {/* <!-- Step 3 --> */}
            <div className="col-12 col-lg-3 mb-4 mb-lg-0 aos-init aos-animate" data-aos="fade-left">
              <div className="text-center shadow-lg border-radius process-card hover-bg-light p-4">
                <Image
                  src={HowItWorkImg3}
                  className="w-40 mb-2 rounded-full"
                  height={60}
                  alt="easy booking"
                />
                <p className="pt-4 pb-2 mb-0">Customize &amp; book</p>
                <p className="mb-0 pb-5 text-accent-two">a perfect travel experience</p>
                <div className="step-corner">
                  <div className="step-arrow">3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- wonderful experience --> */}
      <section className="experience">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="wrap"
                style={{ backgroundImage: `url(${experienceBg.src})` }}
              >
                <div className="row">
                  <div className="col-12 position-relative align-self-center">
                    <h4 className="display-4 theme-text-white mb-0 fw-bold text-center">
                      Wonderful Travel Experiences with
                      <br />
                      Round Tours
                    </h4>
                    <div className="group custom-button">
                      <div className="d-flex align-items-center">
                        <Link
                          href="tel:1888 508 7143"
                          className="video-icon video-icon2 mr-30 ml-20 video_model"
                        >
                          <i className="bi bi-telephone"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h4 className="fs-2 fw-bold theme-text-secondary mb-0">
                Photo&apos;s From Travellers
              </h4>
              <p className="mb-0 theme-text-accent-one">
                Be it a family vacation, a business trip or a short getaway,we
                know exactly how to make it unforgettable
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <Image
                src={Gallery1}
                className="w-100  h-full shadow-1-strong rounded mb-4"
                alt="Boat on Calm Water"
              />

              <Image
                src={Gallery5}
                className="w-100 h-full shadow-1-strong rounded mb-4"
                alt="Wintry Mountain Landscape"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <Image
                src={Gallery3}
                className="w-100 h-auto shadow-1-strong rounded mb-4"
                alt="Mountains in the Clouds"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <Image
                src={Gallery2}
                className="w-100 h-full shadow-1-strong rounded mb-4"
                alt="Waves at Sea"
              />

              <Image
                src={Gallery1}
                className="w-100 h-full shadow-1-strong rounded mb-4"
                alt="Yosemite National Park"
              />
            </div>
          </div>
        </div>
      </section>
      {/* review */}
      <section className="my-4" id="reviews">
        <div className='container'>
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h4 className="fs-2 fw-bold theme-text-secondary mb-0">Hear From Our Happy Customers</h4>
              <p className="mb-0 theme-text-accent-one">
                Discover what makes our service exceptional through real customer experiences
              </p>
            </div>
          </div>
          <div className="row">
            {reviewsData.map((review, index) => (
              <div className="col-md-4 mb-5 mb-md-0" key={index}>
                <h5 className="fw-bold mb-0">{review.name}</h5>
                <ul className="list-unstyled d-flex gap-1">
                  {[...Array(Math.floor(review.rating))].map((_, i) => (
                    <li key={i}><i className="fa-sm text-warning bi bi-star-fill" /></li>
                  ))}
                  {review.rating % 1 !== 0 && <li><i className="fa-sm text-warning bi bi-star-half" /></li>}
                </ul>
                <p className="mt-2">
                  <i className="bi bi-quote" /> {review.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      { /* call us modal */}
      <CallModal show={show} handleClose={handleToggle} setShow={setShow} />
    </main>
  );
};

export default Home;
