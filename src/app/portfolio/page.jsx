/** @format */

import Link from "next/link";

const Portfolio = () => {
  return (
    <div>
      <h1 className="text-[30px] font-semibold mb-5 "> Choose a gallery </h1>

      <div className="relative flex gap-[30px]">
        <Link href="/portfolio/illustrations " className="item hover:text-green-600">
          <span className="text-[40px] font-semibold right-[10px] bottom-[10px] absolute">
            Illustrations
          </span>
        </Link>

        <Link href="/portfolio/website" className="item hover:text-green-600">
          <span className="text-[40px] font-semibold right-[10px] bottom-[10px] absolute">
            Web-sites
          </span>
        </Link>

        <Link href="/portfolio/application" className="item hover:text-green-600">
          <span className="text-[40px] font-semibold right-[10px] bottom-[10px] absolute">
            Application
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
