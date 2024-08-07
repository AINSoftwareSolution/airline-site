import React from "react";
import Image from "next/image";
import LandingImage from "../utils/images/landing/header.jpg";
import { LandingImg, FAQImage } from "../utils/images";

const Offers = () => {
  return (
    <div className="offers">
      {/*--------- banner start---------- */}
      <div className="offers-banner section__container d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h1 className="section__header">
            Find And Book
            <br />A Great Experience
          </h1>
          <Image src={LandingImage} alt="header" className="img-fluid" />
        </div>
      </div>
      {/*--------- banners end ----------*/}

      {/*----why chioose us ---------- */}
      <section className="section__container my-5">
        <p className="h5 text-primary text-center fw-bold">Why Choose Us</p>
        <h2 className="section__header">Plan your travel with confidence</h2>
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
            <h2>Travel to make memories all around the world</h2>
          </div>
          <div className="row g-5 mt-4">
            <div className="col-md-4">
              <div className="card-custom">
                <span
                  className="icon-circle"
                  style={{ backgroundColor: "#3d5cb8" }}
                >
                  <i className="bi bi-calendar2-check"></i>
                </span>
                <h4>Book & relax</h4>
                <p className="lh-base text-muted">
                  With &quot;Book and Relax,&quot; you can sit back, unwind, and
                  enjoy the journey while we take care of everything else.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-custom">
                <span className="icon-circle bg-warning">
                  <i className="bi bi-shield-check"></i>
                </span>
                <h4>Smart Checklist</h4>
                <p className="lh-base text-muted">
                  Introducing Smart Checklist with us, the innovative solution
                  revolutionizing the way you travel with our airline.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-custom">
                <span className="icon-circle bg-success">
                  <i className="bi bi-tag"></i>
                </span>
                <h4>Save More</h4>
                <p className="lh-base text-muted">
                  From discounted ticket prices to exclusive promotions and
                  deals, we prioritize affordability without compromising on
                  quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------- FAQ Section ---------*/}

      <div className="container mt-5">
        <h1 className="mb-4">Frequently Asked Questions</h1>
        <div className="accordion" id="faqAccordion">
          {/* <!-- Accordion 1 --> */}
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What is the purpose of this pen?
                </button>
              </h2>
            </div>
            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                This pen is designed to provide web developers with boilerplate
                code for a FAQ Accordion.
              </div>
            </div>
          </div>

          {/* <!-- Accordion 2 --> */}
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What is an accordion?
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                An accordion is a vertically stacked list of headers that users
                can click on to reveal more information about a business. With
                an accordion, when someone visits your web page, they will see a
                list of headers.
              </div>
            </div>
          </div>

          {/* <!-- Accordion 3 --> */}
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How can I customize the accordion?
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                You can customize the accordion by modifying the CSS styles and
                changing the HTML structure as per your needs. You can also add
                JavaScript to enhance its functionality.
              </div>
            </div>
          </div>

          {/* <!-- Accordion 4 --> */}
          <div className="card">
            <div className="card-header" id="headingFour">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Is this accordion responsive?
                </button>
              </h2>
            </div>
            <div
              id="collapseFour"
              className="collapse"
              aria-labelledby="headingFour"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                Yes, this accordion is designed to be responsive and will adjust
                its layout based on the screen size to ensure a good user
                experience on both desktop and mobile devices.
              </div>
            </div>
          </div>

          {/* <!-- Accordion 5 --> */}
          <div className="card">
            <div className="card-header" id="headingFive">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Can I use this accordion in my project?
                </button>
              </h2>
            </div>
            <div
              id="collapseFive"
              className="collapse"
              aria-labelledby="headingFive"
              data-parent="#faqAccordion"
            >
              <div className="card-body">
                Absolutely! Feel free to use this accordion in your projects.
                You can modify and adapt it as needed to fit your requirements.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
