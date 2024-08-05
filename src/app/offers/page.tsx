'use client'
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { contactInitialValues } from "../utils/data";
import { contactValidationSchema } from "../utils/schema";
import { bannerImage } from "../utils/images";
import { AboutImage, FlightImg, HotelImg, TravelGuideImg, TripIMg } from '../utils/images'
import Image from "next/image";
import Link from "next/link";

const Offers = () => {
    const router = useRouter()

    const formik = useFormik({
        initialValues: contactInitialValues,
        validationSchema: contactValidationSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                setSubmitting(true)
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                });
                const result = await response.json();

                if (result.status == 201) {
                    router.push('/thank-you')
                } else {
                    alert('Something wrong! Please try Again!')
                }
                setSubmitting(false)
            }
            catch (error) {
                setSubmitting(false)
            }
        },
    });

    const { handleChange, errors, handleSubmit, isSubmitting } = formik;
    return (
        <div className='offers'>
            {/* banner */}
            <div className="static-slider10" style={{ backgroundImage: `url(${bannerImage.src})` }}>
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-md-8 align-self-center text-center">
                            <span className="badge rounded-pill badge-inverse text-white font-weight-light px-3 py-1">Creating Brands</span>
                            <h1 className="my-3 title text-white text-uppercase"> Your Journey, Our Priority</h1>
                            <h6 className="text-white font-weight-normal op-8">Find affordable flights with ease at Reservationkart.com. Book now and fly stress-free!</h6>
                            <Link className="btn btn-outline-light rounded-pill btn-md mt-3" href="#contact"><span>Do you Need Help?</span></Link>
                        </div>
                    </div>
                </div>
            </div>

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

            { /* Benefit section */}
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



            {/* contact us */}
            <section className="contact-area" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-8">
                            <div className="section-title mt-45">
                                <h3 className="title">Ready For Unforgatable Travel. Remember Us!</h3>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="row gy-4 gy-xl-5 ">
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
                                        {errors.name && <span className="text-danger error">{errors.name}</span>}
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
                                        {errors.email && <span className="text-danger error">{errors.email}</span>}
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
                                        {errors.phone && <span className="text-danger error">{errors.phone}</span>}

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
                                        {errors.message && <span className="text-danger error">{errors.message}</span>}

                                    </div>
                                    <div className="col-12 mt-2">
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-search mt-4 mb-6" disabled={isSubmitting}>
                                                <span className="fw-bold"> Submit</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 offset-xl-1">
                            <div className="section-title mt-5">
                                <h3 className="title">Contact Information</h3>
                            </div>
                            <div className="contact-info">
                                <ul className="info">
                                    <li>
                                        <div className="single-info">
                                            <div className="info-icon">
                                                <i className="bi bi-geo-alt-fill"></i>
                                            </div>
                                            <div className="info-content">
                                                <p className="text">
                                                    30 Summer St, Hagerstown, Maryland 21740 USA.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-info">
                                            <div className="info-icon">
                                                <i className="bi bi-phone"></i>
                                            </div>
                                            <div className="info-content">
                                                <p className="text">1888 5087143</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="single-info">
                                            <div className="info-icon">
                                                <i className="bi bi-envelope"></i>
                                            </div>
                                            <div className="info-content">
                                                <p className="text">info@reservationkart.com
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="social mt-5">
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="bi bi-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="bi bi-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="bi bi-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0)">
                                            <i className="bi bi-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--====== CONTACT ONE PART ENDS ======--> */}
        </div>
    )
}

export default Offers


