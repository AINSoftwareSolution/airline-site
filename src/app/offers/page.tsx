"use client";
import React from "react";
import Image from "next/image";
import { LandingBg, LandingImg } from "../utils/images";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { contactInitialValues } from "../utils/data";
import { contactValidationSchema } from "../utils/schema";

const Offers = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: contactInitialValues,
    validationSchema: contactValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const result = await response.json();

        if (result.status == 201) {
          router.push("/thank-you");
        } else {
          alert("Something wrong! Please try Again!");
        }
        setSubmitting(false);
      } catch (error) {
        setSubmitting(false);
      }
    },
  });

  const { handleChange, errors, handleSubmit, isSubmitting } = formik;
  return (
    <div className="offers">
      {/*--------- banner start---------- */}
      <div
        className="offers-banner "
        style={{ backgroundImage: `url(${LandingBg.src})` }}
      >
        <div className="section__container">
          <div className="row d-flex align-items-center py-4">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="bg-white border rounded shadow-sm overflow-hidden  p-4 p-xl-5">
                <h1>Travel Smart, Travel Far</h1>
                <p>
                  {" "}
                  From booking to boarding, Reservationkart.com here to make
                  your journey effortless.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="row gy-4 gy-xl-5">
                    <div className="col-12">
                      <label htmlFor="name" className="form-label">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <span className="text-danger error">{errors.name}</span>
                      )}
                    </div>
                    <div className="col-12 col-md-6 mt-2">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-envelope"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                          </svg>
                        </span>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          onChange={handleChange}
                        />
                      </div>
                      {errors.email && (
                        <span className="text-danger error">
                          {errors.email}
                        </span>
                      )}
                    </div>
                    <div className="col-12 col-md-6 mt-2">
                      <label htmlFor="phone" className="form-label">
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-telephone"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                          </svg>
                        </span>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          onChange={handleChange}
                        />
                      </div>
                      {errors.phone && (
                        <span className="text-danger error">
                          {errors.phone}
                        </span>
                      )}
                    </div>
                    <div className="col-12 mt-2">
                      <label htmlFor="message" className="form-label">
                        Message <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        onChange={handleChange}
                      ></textarea>
                      {errors.message && (
                        <span className="text-danger error">
                          {errors.message}
                        </span>
                      )}
                    </div>
                    <div className="col-12 mt-2">
                      <div className="d-grid">
                        <button
                          type="submit"
                          className="btn btn-search mt-4 mb-6"
                          disabled={isSubmitting}
                        >
                          <span className="fw-bold"> Submit</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*--------- banners end ----------*/}

      {/*----why chioose us ---------- */}
      <section className="section__container">
        <p className="h5 text-primary text-center fw-bold">Why Choose Us</p>
        <h2 className="section__header">Plan your travel with confidence</h2>
        <p className="text-center lead mb-2">
          Find help with your bookings and travel plans, and see what to expect
          along your journey.
        </p>
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <div className="mb-2">
              <span className="number number-blue">01</span>
              <h4>24/7 Customer Support</h4>
              <p>
                Our friendly agents are available around the clock to assist you
                with all your booking needs.
              </p>
            </div>
            <div className="mb-2">
              <span className="number number-orange">02</span>
              <h4>Last-Minute Flight Deals</h4>
              <p>
                Need to travel on short notice? We have you covered with
                unbeatable last-minute deals.
              </p>
            </div>
            <div className="mb-2">
              <span className="number number-light-orange">03</span>
              <h4>Group Booking</h4>
              <p>Special rates and arrangements for group travel.</p>
            </div>
            <div className="">
              <span className="number bg-success">04</span>
              <h4>Group Booking</h4>
              <p>Special rates and arrangements for group travel.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-group">
              <Image
                src={LandingImg}
                className="img-fluid rounded-image"
                alt="Plan 1"
              />
            </div>
          </div>
        </div>
      </section>

      {/*-------- steps ------------  */}
      <section className="memories">
        <div className="section__container my-2">
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
        <div className="text-center">
          <div className="faq">
            <h2 className="header">
              <b>Frequently Asked Questions</b>
            </h2>
            <br></br>
            {/* <!-- Accordion 1 --> */}
            {/* <button className="accordion d-flex flex-row align-items-center"><img className="faq-icon" src="https://cdn.jsdelivr.net/gh/linuxguist/faqa@main/chevron-down.svg"> &nbsp; &nbsp; <b>What is an FAQ page?</b></button> */}
            <div className="panel">
              <div className="paragraphs" id="myDiv_id1"></div>
              <p id="paragraph_id1" className="d-none">
                Frequently Asked Questions (FAQ) pages contain a list of
                commonly asked questions and answers on a website about topics
                such as hours, shipping and handling, product information, and
                return policies. Sure there are chatbots, support lines, and
                customer reviews to help shoppers on their path to purchase, but
                there’s one forgotten customer service tactic that is
                cost-effective and streamlined. That tactic is an FAQ page.
              </p>
            </div>
            {/* <!-- Accordion 2 --> */}
            {/* <button className="accordion d-flex flex-row align-items-center"><img className="faq-icon" src="https://cdn.jsdelivr.net/gh/linuxguist/faqa@main/chevron-down.svg"> &nbsp; &nbsp; <b>Why you should make an FAQ page?</b></button> */}
            <div className="panel">
              <div className="paragraphs" id="myDiv_id2"></div>
              <p id="paragraph_id2" className="d-none">
                An FAQ page is a time-saving customer service tactic that
                provides the most commonly asked questions and answers for
                current or potential customers. Before diving into how to make
                an FAQ page, you need to know why having one is so important.
                There are so many reasons beyond improving the customer
                experience for perfecting your FAQ page. Keep in mind the
                importance of an FAQ page when developing your own e-commerce
                website so you can make sure it increases sales and not the
                other way around.
              </p>
            </div>
            {/* <!-- Accordion 3 --> */}
            {/* <button className="accordion d-flex flex-row align-items-center"><img className="faq-icon" src="https://cdn.jsdelivr.net/gh/linuxguist/faqa@main/chevron-down.svg"> &nbsp; &nbsp; <b>How to make an FAQ page?</b></button> */}
            <div className="panel">
              <div className="paragraphs" id="myDiv_id3"></div>
              <p id="paragraph_id3" className="d-none">
                There are seven simple steps to make the perfect FAQ page for
                your business. The design of an FAQ page is crucial for an
                easy-to-use customer experience. Follow these steps and your
                customer success team will thank you. 1. Determine the questions
                2. Categorize the questions 3. Highlight or link the most
                popular questions 4. Include a search bar 5. Align with your
                brand look and feel 6. Update regularly 7. Track and improve
              </p>
            </div>
            {/* <!-- Accordion 4 --> */}
            {/* <button className="accordion d-flex flex-row align-items-center"><img className="faq-icon" src="https://cdn.jsdelivr.net/gh/linuxguist/faqa@main/chevron-down.svg"> &nbsp; &nbsp; <b>What are the most frequently asked questions?</b></button> */}
            <div className="panel">
              <div className="paragraphs" id="myDiv_id4"></div>
              <p id="paragraph_id4" className="d-none">
                A good FAQ is general enough to address many issues. There are
                questions that just about every company answers on their FAQ
                page, so if you are struggling to get started use these as your
                starting point. If they are relevant to your company, of course.
                1. What is the return policy? 2. What are the shipping options?
                3. What do I do if I never received my order? 4. When will I
                receive my order? 5. How do I make sure I order the right size?
                6. Where are you located? 7. Can I make changes to an order I
                already placed? 8. How do I get a new password?
              </p>
            </div>
            {/* <!-- Accordion 5 --> */}
            {/* <button className="accordion d-flex flex-row align-items-center"><img className="faq-icon" src="https://cdn.jsdelivr.net/gh/linuxguist/faqa@main/chevron-down.svg"> &nbsp; &nbsp; <b>How to answer your FAQs?</b></button> */}
            <div className="panel">
              <div className="paragraphs" id="myDiv_id5"></div>
              <p id="paragraph_id5" className="d-none">
                When crafting the answers to your FAQs, involve someone from PR.
                It’s unlikely you have an entire PR team on your staff, which is
                OK, but there are plenty of freelance PR specialists who can
                give input while writing these answers. It will highly benefit
                you to consider hiring one for a week or two. Some of these
                questions could cause you to expose shortcomings of your product
                or service, so it is imperative that you position these answers
                in a positive light while remaining truthful.
              </p>
            </div>
          </div>
          <h4 className="undertitle text-white">
            Have some other questions?{" "}
            <a href="https://example.com" target="_blank">
              Visit our support page
            </a>
          </h4>
          {/* <a class="spaces-button btn btn-success btn-round" href="https://example.com" style="padding:10px 80px; margin-top: 20px; margin-bottom: 20px;">Button For Further Action</a>
    <h6 className="text-white"><a href="https://example.com" target="_blank">Terms and Conditions Link</a></h6><br> */}
        </div>
      </div>
    </div>
  );
};

export default Offers;
