"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FooterLogo, Logo, PCCiIcon } from "../utils/images";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const path = usePathname()


  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <header className={`header theme-bg-white sticky-top`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg py-3 py-lg-0 px-0">
          <Link href="/" className="navbar-brand py-3">
            <Image
              src={Logo}
              alt="reservationkart-flight booking app"
              className="img-fluid me-2"
              height={50}
            />
            <Image
              src={FooterLogo}
              alt="airoplan ticket booking"
              className="w-full"
              height={35}
            />
          </Link>
          <button
            className="navbar-toggler px-1 btn rounded-0"
            type="button"
            onClick={toggleNavbar}
            aria-expanded={!collapsed ? "true" : "false"}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto page-menu" id="nav"></ul>
            <ul className="navbar-nav page-menu mb-3 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link pe-4 ps-0 ps-lg-5" href="/">
                  Home
                </Link>
              </li>
            {/*  <li className="nav-item">
                <Link className="nav-link pe-4 " href="/about-us">
                  About
                </Link>
              </li>   */}


              <li className="nav-item">
                <Link className="nav-link pe-4" href="/#gallery">
                  Gallery
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link pe-4" href="/contact">
                  Contact
                </Link>
              </li>

              <Link
                href="tel:1888 5087143"
                style={{ color: "#2290a6" }}
                className="d-flex flex-row justify-content-center align-items-center gap-2 fw-bold nav-item pe-4"
              >
                <i className="bi bi-telephone"></i>
                <div>1888 5087143</div>
              </Link>

              <div className="img-fluid d-flex justify-content-center align-items-center">
                <Link href="/compliance_certificate.pdf" target="_blank">
                  <Image src={PCCiIcon} alt="PCI DSS Certified" height={50} />
                </Link>
              </div>

              {/* <Dropdown title={<><i className="bi bi-globe me-2"></i>Eng</>} items={languageItems} />
              <Dropdown title="INR" items={currencyItems} />
              <li className="nav-item">
                <Link href="#" className="nav-link mein-link d-inline-block position-relative">
                  <i className="bi bi-bell"></i>
                  <span className="position-absolute translate-middle p-1 bg-success border border-light rounded-circle">
                    <span className="visually-hidden">New alerts</span>
                  </span>
                </Link>
              </li>
              <Dropdown title={<i className="bi bi-person"></i>} items={userItems} /> */}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
