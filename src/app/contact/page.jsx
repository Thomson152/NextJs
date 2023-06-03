/** @format */

import Image from "next/image";
import contact from "/public/contact.png";

const Contact = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-center md:text-[60px] text-[40px] font-semibold   mb-[5rem]">
          Let's Keep in Touch
        </h1>
        <div className="flex justify-center md:flex-row flex-col items-center gap-[100px]">
          <div className="">
            <Image src={contact} className="w-[100%] object-contain move" />
          </div>

          <div className="w-[100%] ">
            <form className="flex flex-col  space-y-7">
              <input
                type="text"
                placeholder="name"
                className="bg-[#111] border border-[#bbb] py-4 px-3"
              />
              <input
                type="text"
                placeholder="email"
                className="bg-[#111] border border-[#bbb] py-4 px-3"
              />
              <textarea
                placeholder="message"
                className="bg-[#111] border border-[#bbb] py-4 px-3 "
                cols="30"
                rows="10"
              ></textarea>
            </form>
            <div className="mt-4">
            <button className="bg-[#53c28b] text-white py-3 rounded px-7">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
