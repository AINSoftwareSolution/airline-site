'use client'

import { memo, useEffect, useRef, useState } from 'react';

const Counter: React.FC = () => {
  const [tickets, setTickets] = useState<number>(0);
  const [customers, setCustomers] = useState<number>(0);
  const [ratings, setRatings] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const incrementCounter = (
      setValue: React.Dispatch<React.SetStateAction<number>>, 
      targetValue: number, 
      duration: number
    ) => {
      let startValue = targetValue == 4.5 ? 0 : 1400;
      const incrementTime = Math.abs(Math.floor(duration / targetValue));

      const timer = setInterval(() => {
        startValue += 1;
        if (startValue > targetValue) {
          clearInterval(timer);
          setValue(targetValue);
        } else {
          setValue(startValue);
        }
      }, incrementTime);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          incrementCounter(setTickets, 2300, 2000);
          incrementCounter(setCustomers, 3000, 2000);
          incrementCounter(setRatings, 4.5, 2000);
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="row mt-5" ref={sectionRef}>
      <div className="col-12 col-sm-6 col-lg-4 mb-3 mb-lg-0">
        <div className="d-flex align-items-center p-4 p-md-0">
          <i className="bi bi-airplane fs-4 theme-text-primary"></i>
          <h3 className="fs-2 mb-0 mx-3">{tickets}+</h3>
          <p className="fs-4 mb-0 theme-text-accent-one">Tickets Book</p>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-4 mb-3 mb-lg-0">
        <div className="d-flex align-items-center p-4 p-md-0">
          <i className="bi bi-award fs-4 theme-text-primary"></i>
          <h3 className="fs-2 mb-0 mx-3">{customers}+</h3>
          <p className="fs-4 mb-0 theme-text-accent-one">Happy Customers</p>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-4 mb-3 mb-lg-0">
        <div className="d-flex align-items-center p-4 p-md-0">
          <i className="bi bi-star fs-4 theme-text-primary"></i>
          <h3 className="fs-2 mb-0 mx-3">{ratings}</h3>
          <p className="fs-4 mb-0 theme-text-accent-one">Ratings</p>
        </div>
      </div>
    </div>
  );
};

export default memo(Counter);
