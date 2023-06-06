/** @format */
import Image from "next/image";
import Hero from "/public/hero.png";

const page = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between items-center gap-[100px]">
      <div className=" flex-col space-y-[50px] gap-[50px] lg:max-w-[50%]">
        <h1 className="md:text-[72px] text-[60px] md:leading-[70px] leading-[65px] md:max-w-[90%] f-+`irst-line bg-clip-text text-transparent bg-gradient-to-b from-[#194c33]  to-[#bbb]   "> Better design for your digital products.</h1>
        <p className="md:text-[24px] text-[18px] font-normal">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <button className="py-4 px-4 rounded-md  text-white bg-[#53c28b]">See Our Works</button>
      </div>
      {/* <h1 className="sm:text-red-400 md:text-green-500 lg:text-purple-800">testing</h1> */}
      <div className="lg:max-w-[50%]">
        <Image src={Hero} alt="" className="w-[100%] object-contain h-[500px] move "/>
      </div>
    </div>
  );
};

export default page;
