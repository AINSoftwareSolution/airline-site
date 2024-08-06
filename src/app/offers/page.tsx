import React from 'react'
import Image from 'next/image'
import LandingImage from '../utils/images/landing/header.jpg'

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


            {/*  */}
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
    )
}

export default Offers