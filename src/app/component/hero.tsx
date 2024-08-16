import React from 'react'
import { heroBg } from '../utils/images'
import { Heroprops } from '../utils/types'

const Hero: React.FC<Heroprops> = (props) => {
    const { title, description } = props;
    return (
        <div className="hero" style={{ backgroundImage: `url(${heroBg.src})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12">
                        <h4 className="fs-2 fw-bold text-white mb-2">{title}</h4>
                        <p className='text-white'>{description} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero