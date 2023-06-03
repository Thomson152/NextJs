/** @format */

import Link from "next/link";
import React from "react";

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

      {/* Moblie */}

      <ul className="lg:hidden flex flex-col">
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
