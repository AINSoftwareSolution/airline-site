import React from "react";
import Image from "next/image";
import {
  AboutusImg1,
  AboutusImg2,
  Advantage1,
  Advantage2,
  Advantage3,
  Advantage4,
} from "../utils/images";
const About = () => {
  return (
    <>
      <section className="pt-5 pt-lg-5 step-container">
        <div className="pb-5 pb-md-4 mt-4 mb-4 ">
          <div className="d-flex flex-column flex-md-row mb-0 w-100 mx-auto container-xl gap-4">
            <div className="w-100 w-md-50 max-h-330 p-0 rounded overflow-hidden">
              <Image
                src={AboutusImg1}
                alt="about image"
                title="About"
                layout="responsive"
                width={250}
                height={160}
                className="h-100 w-100 object-cover"
              />
            </div>
            <div className="p-3 d-flex align-items-end align-items-xl-center justify-content-center flex-column w-100 w-md-50">
              <div>
                <h2 className="text-black pb-3 text-3xl font-bold max-w-440 mx-auto text-center text-md-start">
                  Welcome to ReservationKart.com{" "}
                </h2>
                <p className="text-dark p-0 font-normal text-base max-w-440 text-center text-md-start">
                  Welcome to reservationkart.com, your ultimate destination for
                  effortless and affordable travel solutions. As a leading cheap
                  flight agency, we specialize in providing budget friendly
                  options for all your travel needs, from airplane reservations
                  to comprehensive travel packages. Book flights online
                  effortlessly with our user-friendly platform, designed to help
                  you find and secure cheap flight tickets with ease. Whether
                  you are searching for airline tickets for a domestic trip or
                  cheap international flights, we have you covered. Our
                  extensive network ensures you get the best deals on plane
                  tickets, making travel accessible and affordable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      {/*sec 2 who we are  */}
      <section className="pb-5 step-container">
        <div className="pb-4 pb-md-5">
          <div className="d-flex flex-column flex-md-row mb-0 w-100 container-xl mx-auto gap-4">
            <div className="p-3 d-flex align-items-end align-items-xl-center justify-content-center flex-column w-100 w-md-50">
              <div>
                <h2 className="text-black pb-3 pb-md-4 text-3xl font-weight-bold max-w-440 mx-auto text-center text-md-left">
                  Looking for more than just flights
                </h2>
                <p className=" text-dark p-0 font-weight-normal text-base max-w-440 text-start text-md-left">
                  Your Ultimate Travel Experience
                </p>
                <p className="text-dark pb-0 pb-md-3 font-weight-normal text-base max-w-440 text-start text-md-left">
                  We offer a complete traveler agency experience with services
                  that include cab bookings and hotel reservations. Plan your
                  entire journey in one place, saving you time and money.
                  Explore multi-city flights for those adventurous trips and
                  discover the convenience of our seamless booking process. Our
                  commitment to providing cheap airline flights means you can
                  focus on enjoying your travel experiences without worrying
                  about high costs.
                </p>
              </div>
            </div>
            <div className="w-100 w-md-50 max-h-330px p-0 rounded overflow-hidden">
              <Image
                src={AboutusImg2}
                alt="who we are"
                title="About Us"
                layout="responsive"
                width={250}
                height={160}
                className="h-100 w-100 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantage section */}
      <section className="pb-5 step-container">
        <div className="container mx-auto xl:max-w-920px px-3">
          <div className="d-flex justify-content-center align-items-center">
            <div className="flex-shrink-0">
              <div className="text-center pb-3 pb-md-5">
                <h2 className=" text-black font-weight-bold">Advantages</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center px-3 mx-auto">
            <div className="col-12 col-lg-6 pb-3 px-3">
              <div className="d-flex flex-column">
                <div className="w-100 h-auto max-h-220px flex-shrink-0 rounded overflow-hidden">
                  <Image
                    src={Advantage1}
                    alt="advantages-1"
                    title="Advantages"
                    layout="responsive"
                    width={250}
                    height={160}
                    className="w-100 h-100 object-cover"
                  />
                </div>
             {/*  <div className="mt-3 mt-lg-4 d-flex flex-column">
                  <h3 className="text-black h5 font-weight-bold">
                    Excellence in Operation
                  </h3>
                  <p className="text-dark text-sm font-normal mt-2 mt-lg-3">
                    We take immense pride in the expertise and dedication of our
                    team. Each member of our sales floor boasts an average
                    experience of 8 years in the travel industry. This means you
                    can rely on their wealth of knowledge and industry insights
                    to craft a travel experience tailored specifically to your
                    needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 pb-3 px-3">
              <div className="d-flex flex-column">
                <div className="w-100 h-auto max-h-220px flex-shrink-0 rounded overflow-hidden">
                  <Image
                    src={Advantage2}
                    alt="advantages-2"
                    title="Advantages"
                    layout="responsive"
                    width={250}
                    height={160}
                    className="w-100 h-100 object-cover"
                  />
                </div>  */}
              {/*  <div className="mt-3 mt-lg-4 d-flex flex-column">
                  <h3 className="text-black h5 font-weight-bold">
                    Transparency and Professionalism
                  </h3>
                  <p className="text-dark text-sm font-normal mt-2 mt-lg-3">
                    Building trust and lasting client relationships are
                    paramount. We prioritize transparency and professionalism,
                    ensuring clear and accurate information in your travel
                    planning. Our dedicated team is committed to exceptional
                    service, guiding you every step and addressing any concerns.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 pb-3 px-3">
              <div className="d-flex flex-column">
                <div className="w-100 h-auto max-h-220px flex-shrink-0 rounded overflow-hidden">
                  <Image
                    src={Advantage3}
                    alt="advantages-3"
                    title="Advantages"
                    layout="responsive"
                    width={250}
                    height={160}
                    className="w-100 h-100 object-cover"
                  />
                </div>    */}
                <div className="mt-3 mt-lg-4 d-flex flex-column">
                  <h3 className=" h5 text-black font-weight-bold">
                    Start Your Journey
                  </h3>
                  <p className="text-dark text-sm font-normal mt-2 mt-lg-3">
                    Join us on an extraordinary travel experience with
                    ReservationKart.com, where every journey is meticulously
                    crafted to create lasting memories. Our team of passionate
                    travel experts is ready to turn your travel dreams into
                    reality. Contact us today to start planning your next dream
                    vacation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 pb-3 px-3">
              <div className="d-flex flex-column">
                <div className="w-100 h-auto max-h-220px flex-shrink-0 rounded overflow-hidden">
                  <Image
                    src={Advantage4}
                    alt="advantages-4"
                    title="Advantages"
                    layout="responsive"
                    width={250}
                    height={160}
                    className="w-100 h-100 object-cover"
                  />
                </div>
                <div className="mt-3 mt-lg-4 d-flex flex-column">
                  <h3 className="text-black h5 font-weight-bold">
                    Service Commitment
                  </h3>
                  <p className="text-dark text-sm font-normal mt-2 mt-lg-3">
                    At ReservationKart.com, our primary focus is on delivering
                    exceptional service to our clients. We strive to exceed your
                    expectations by creating personalized journeys filled with
                    unique experiences, hidden gems, and unforgettable memories.
                    Whether you are seeking a luxury adventure, a cultural
                    exploration, or a relaxing retreat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default About;
