import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section>
      <main className="max-w-[80rem] mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[1rem] md:text-[1.25rem] text-[#242424] font-[700] leading-normal text-center">
            PARTNERED WITH MLS NEXT & PL2 CLUBS
          </h2>
          <div className="flex items-center justify-center gap-[6.62rem]  mt-[2rem]">
            <Image
              src="/Logos1.png"
              alt="proof"
              width={100}
              height={100}
              className="w-[100px] md:w-[100px] h-[80px] md:h-[100px] "
            />
            <Image
              src="/logos2.png"
              alt="proof"
              width={130}
              height={130}
              className="w-[100px] md:w-[100px] h-[100px] md:h-[100px] "
            />
          </div>
        </div>
        <div className="flex items-center justify-between    mt-10 mb-0   pl-2 pr-4 ">
          <div className="">
            <Image
              src="/godkind.png"
              alt="footer logo"
              width={110}
              height={38}
              className=" w-fit"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-x-9">
            <span className="text-[#6B7194] text-[0.7rem] md:text-[0.92338rem] font-[600]">Privacy Policy </span>
            <span className="text-[#6B7194] text-[0.7rem] md:text-[0.92338rem] font-[600]">Terms & Conditions</span>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Footer;
