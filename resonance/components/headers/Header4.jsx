"use client";
import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
import Nav from "./components/Nav";

import Image from "next/image";
import Link from "next/link";

export default function Header4({ links }) {
  return (
    <div className="main-nav-sub container">
      <div className="nav-logo-wrap position-static local-scroll">
        <Link href="/" className="logo">
          <Image
            src="/assets/images/gemu/logo-horizontal-english.png"
            alt="Gemu Technology"
            width={1693}
            height={571}
            className="light-mode-logo gemu-header-logo"
          />
          <Image
            src="/assets/images/gemu/logo-horizontal-english.png"
            alt="Gemu Technology"
            width={1693}
            height={571}
            className="dark-mode-logo gemu-header-logo"
          />
        </Link>
      </div>
      {/* Mobile Menu Button */}
      <div
        onClick={toggleMobileMenu}
        className="mobile-nav"
        role="button"
        tabIndex={0}
      >
        <i className="mobile-nav-icon" />
        <span className="visually-hidden">Menü</span>
      </div>
      {/* Main Menu */}
      <div className="inner-nav desktop-nav">
        <ul className="clearlist scroll-nav local-scroll justify-content-end scrollspyLinks">
          <Nav links={links} />
          <li className="desktop-nav-display">
            <div className="vr mt-2" />
          </li>
          <li>
            <a href="tel:+908501234567">
              <i className="mi-mobile size-24 color-primary-1 align-center" />
              +90 (850) 123 45 67
            </a>
          </li>
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}
