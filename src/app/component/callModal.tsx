'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { Modalprops } from '../utils/types';
import { CallSupport } from '../utils/images';

const callModal: React.FC<Modalprops> = ({ show, handleClose, setShow, ispath = true }) => {


  useEffect(() => {
    if (ispath) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <div className={`modal fade ${show ? 'show d-block' : ''}`} id="exampleModalCenter"
    tabIndex={-1} role="dialog" aria-labelledby="flight booking"
    aria-hidden={!show} style={{ display: show ? 'block' : 'none', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
    <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content popup-bg" style={{ backgroundColor: '#002d5b', maxWidth: '90vw', maxHeight: '85vh' }}>
            <div className="modal-header justify-content-end border-0 p-2">
                <button type="button" className="closeButton" onClick={handleClose}>
                    <span aria-hidden="true" style={{ fontSize: '2rem' }}>&times;</span>
                </button>
            </div>
            <div className="modal-body text-center d-flex flex-column align-items-center py-2" >
                <div className="p-2 text-center">
                    <h1 className="mb-3 theme-text-white text-uppercase fw-bold fs-4">Airlines Customer Services</h1>
                    <p className="mb-3 theme-text-white fs-5">Booking,<br /> Cancellation, <br /> Changes &amp; Inquiry</p>
                    <Image
                        alt='reservationakrt.com'
                        src={CallSupport}
                        className="img-fluid d-block m-auto mb-3 rounded-circle" />
                    <Link href="tel:1888 5087143" className="d-block col-8 col-lg-4 m-auto mb-2 text-link text-link-effect border py-2">
                        <span className="text-light p-2 fs-6">
                            <i className="bi bi-telephone me-1 fs-6"></i>Click to call
                        </span>
                    </Link>
                    <Link href="tel:1888 5087143" className="mb-3 d-inline-block text-link text-link-effect">
                        <span className="text-light py-2 p-lg-2 fs-4">
                            <i className="bi bi-telephone me-2 fs-4"></i>1888 5087143</span>
                    </Link>
                    <p className=" theme-text-white mb-4 ">Save Extra <span className="text-warning fs-5">25% Off </span>
                        On<br /> Your First Purchase <br />Exclusive Phone Only Deals </p>
                </div>
            </div>
        </div>
    </div>
</div>

    </>
  );
};

export default callModal;
