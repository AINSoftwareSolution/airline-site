'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react';

import { SubscribeIcon, FooterLogo, Logo, paymentMethod } from '../utils/images'

const Footer = () => {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 500) {
                setIsActive(false);
            } else {
                setIsActive(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <section className="py-5 theme-bg-primary">
                <div className="container">
                    <div className="row justify-between items-center">
                        <div className="col-12 col-lg-6">
                            <div className="d-flex  align-items-center">
                                <Image src={SubscribeIcon} alt="subscribe" width={100} height={100} />
                                <div className="ms-3">
                                    <h4 className="text-26 text-white fw-600">Your Travel Journey Starts Here</h4>
                                    <p className="text-white">{`Sign up and we'll send the best deals to you`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 offset-lg-1 align-self-center">
                            <div className="input-group subs-form">
                                <input type="text" className="form-control border-0" placeholder="Your Email"
                                    aria-label="Your Email" aria-describedby="button-addon2" />
                                <button className="btn btn-search" type="button" id="button-addon2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="container">
                    <div className="row">


                        <div className="col-12 col-sm-6 col-lg-5 mb-5 mb-lg-0">
                            <h5 className="mb-3 fs-6">Contact Us</h5>
                            <div className="flex-grow-1">
                                Location <br />
                                <address className='text-muted'>30 Summer St, Hagerstown Maryland 21740 USA.</address>
                            </div>
                            <div className="flex-grow-1">
                                Customer Care<br />
                                <Link className="fs-5 theme-text-primary" href={'tel:1888 508 7143'}>1888 508 7143</Link>
                            </div>
                            <div className="flex-grow-1 mt-3">
                                Need live support?<br />
                                <Link href={'mail:info@Reservationkart.com'} className="fs-5 theme-text-primary">info@reservationkart.com</Link>
                            </div>
                            <div className="d-flex social  mt-2">
                                <Link href="javascript:void(0)" className="fs-4 pe-3"><i className="bi bi-facebook"></i></Link>
                                <Link href="javascript:void(0)" className="fs-4 pe-3"><i className="bi bi-twitter"></i></Link>
                                <Link href="javascript:void(0)" className="fs-4 pe-3"><i className="bi bi-linkedin"></i></Link>
                                <Link href="javascript:void(0)" className="fs-4 pe-3"><i className="bi bi-instagram"></i></Link>
                                <Link href="javascript:void(0)" className="fs-4"><i className="bi bi-whatsapp"></i></Link>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-lg-2 mb-5 mb-lg-0">
                            <h5 className="mb-3 fs-6">Support</h5>
                            <div className="mt-3">
                                <ul className="fl-menu">
                                    <li className="nav-item"><Link href="javascript:void(0)">Contact</Link></li>
                                    <li className="nav-item"><Link href="javascript:void(0)">Legal Notice</Link></li>
                                    <li className="nav-item"><Link href="javascript:void(0)">Privacy Policy</Link></li>
                                    <li className="nav-item"><Link href="javascript:void(0)">Terms and Conditions</Link></li>
                                    <li className="nav-item"><Link href="javascript:void(0)">Sitemap</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-lg-5 mb-5 mb-lg-0">
                            <Image src={FooterLogo} alt={'reservationKart'} className='w-100' height={200} />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6 mt-lg-5">
                            <p className="pt-2 mb-0 small theme-text-accent-one">&copy; 2024 Reservationkart All rights reserved.
                            </p>
                        </div>
                        <div className="col-12 col-lg-6 mt-5">
                            <ul className="footer-link d-flex flex-row flex-wrap justify-content-lg-center align-items-center">
                                <Image src={paymentMethod} className='w-100 h-auto' alt='flight-booking' />
                            </ul>
                        </div>

                    </div>
                </div>
                <button className={`scrollToTop ${isActive ? 'active' : ''}`} onClick={scrollToTop} >
                    <i className="bi bi-chevron-double-up"></i>
                </button>
            </footer>
        </>

    )
}

export default Footer