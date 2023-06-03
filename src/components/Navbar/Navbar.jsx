/** @format */

import Link from "next/link";
// import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

  return (
    <nav className="flex flex-row justify-between h-[100px]  items-center">
      <div>
        <Link href="/" className="font-bold text-[22px]">
          Thomson
        </Link>
      </div>
      <div>
        <ul className="lg:flex hidden gap-6 items-center">
          <li>
            <Link className="hover:text-green-600" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-green-600" href="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="hover:text-green-600" href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="hover:text-green-600" href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="hover:text-green-600" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-green-600" href="/dashboard">
              DashBoard
            </Link>
          </li>

          <div className="">
            <button className="py-2 px-2 rounded-lg bg-[#53c28b] text-white">
              Logout
            </button>
          </div>
        </ul>
      </div>

      <div className="lg:hidden flex">
        <HiX className="text-white text-3xl" />{" "}
        <GiHamburgerMenu className="text-white text-3xl" />
      </div>

      <ul className="lg:hidden absolute left-[10rem] top-7 flex flex-col">
        {/* Moblie */}

        <li>
          <Link className="hover:text-green-600" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-green-600" href="/portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link className="hover:text-green-600" href="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className="hover:text-green-600" href="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="hover:text-green-600" href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="hover:text-green-600" href="/dashboard">
            DashBoard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
