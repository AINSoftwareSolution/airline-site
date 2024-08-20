"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { LoaderImage } from '../utils/images';

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Image src={LoaderImage} alt="Loading..." />
    </div>
  );
};

export default Loader;
