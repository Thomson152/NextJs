/** @format */

import Image from "next/image";
import AboutImg from "/public/about.jpeg";

const About = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={AboutImg}
          className="w-[100%] h-[500px] object-cover  grayscale"
          alt=""
        />
        <div className="absolute bottom-[20px] text-white md:left-[20px]  bg-[#53c28b] md:p-[20px] p-[10px] ">
          <h1 className="md:text-[24px] sm:text-[16px]">
            Digital Storytellers
          </h1>
          <h2 className="md:text-[18px] text-[12px] font-normal">
            {" "}
            Handcrafting award winning digital experiences{" "}
          </h2>
        </div>
      </div>

      <div className="flex justify-between md:flex-row flex-col mt-10 md:space-y-0 gap-10 space-y-5">
        <div className="">
          <h1 className="text-[25px] font-semibold mb-2">Who Are We?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            consectetur dolorem! Distinctio magni eum quis eos optio laudantium
            molestiae perferendis et pariatur non voluptate illo, blanditiis
            officiis velit odio vero.
          </p>
          <br />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            consectetur dolorem! Distinctio magni eum quis eos optio laudantium
            molestiae perferendis et pariatur non voluptate illo, blanditiis
            officiis velit odio vero.
          </p>
        </div>

        <div className="">
          <h1 className="text-[25px] font-semibold mb-2">What We Do?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            consectetur dolorem! Distinctio magni eum quis eos optio laudantium
            molestiae perferendis et pariatur non voluptate illo, blanditiis
            officiis velit odio vero.
          </p>
          <br /> - Dynamic Websites
          <br />
          <br /> - Fast and Handy
          <br />
          <br /> - Mobile Apps

          <div className="">
          <button className='bg-[#53c28b] text-white py-3 rounded px-3 mt-4'>Contact</button>
        </div>
        </div>

        
      </div>
    </div>
  );
};

export default About;
