import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="h-[50px] flex flex-col md:flex-row justify-between items-center">
      <div className="">
        <h1 className="md:text-[17px] text-[16px]">@2023 Thomson. All rights reversed</h1>
      </div>
      <div className="flex gap-3 items-center">
        <Image src='/1.png' alt="" width={15} height={15} className="opacity-[0.6] cursor-pointer"/>
        <Image src='/2.png'alt="" width={15} height={15} className="opacity-[0.6] cursor-pointer"/>
        <Image src='/3.png' alt="" width={15} height={15} className="opacity-[0.6] cursor-pointer"/>
        <Image src='/4.png' alt="" width={15} height={15} className="opacity-[0.6] cursor-pointer"/>
      </div>
    </div>
  );
};

export default Footer;
