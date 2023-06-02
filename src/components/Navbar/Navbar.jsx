/** @format */

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between">
      <div >
        <Link href="/">Thomson</Link>
      </div>
      <div>
        <ul className="flex">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/dashboard">DashBoard</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
