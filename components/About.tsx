import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonComponent, { NafcButtonComponent } from "./ButtonComponent";

const About = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 py-14 md:py-32">
        <main className="flex flex-col md:flex-row gap-8  md:gap-24 justify-center ">
          {/* image div */}
          <div className="flex items-center justify-center flex-col gap-y-6 ">
          
            <Image
              src="/about1.png"
              alt="about"
              width={487}
              height={467}
              className=""
            />
          </div>
          {/* text div */}
          <div className="flex flex-col justify-center max-w-[34.6875rem]  gap-[2.375rem]">
            <h1 className="  font-[700] text-[2rem] leading-normal text-[#242424] md:text-start sm:text-start text-center">
              PLAYERS
            </h1>
            <div className="gap-[1.625rem] flex flex-col">
              <p className="text-[#494949] text-[1rem] font-[400] leading-[175% ]">
                It&apos;s time to level up your mental game, maintain peak
                performance in every match, and stand out both on and off the
                pitch!
              </p>
              <p className="text-[#494949] text-[1rem] font-[400] leading-[175% ]">
                This isn&apos;t about luck or wishful thinking; it&apos;s by
                your intentional design. Shape your success and the future you
                desire.
              </p>
              <p className="text-[#494949] text-[1rem] font-[400] leading-[175% ]">
                Seize the opportunity to benefit from expert strategies and
                proven methods employed in PL Academies!
              </p>
            </div>
          </div>
        </main>
        {/* main 2 */}
        <main className="flex flex-col-reverse md:flex-row md:gap-24 gap-12 justify-center  mt-[40px]  md:mt-[128px]">
          <div className="flex flex-col justify-center max-w-[34.6875rem]  gap-[1.5rem]">
            <h1 className="font-[700] text-[2rem] leading-normal text-[#242424] md:text-start sm:text-start text-center">
              PARENTS
            </h1>
            <div className="gap-[1.75rem] flex flex-col">
              <p className="text-[#494949] text-[1rem] font-[400] leading-[175% ]">
                It&apos;s time for you to acquire valuable insights into how
                your player should approach mental training.
              </p>
              <p className="text-[#494949] text-[1rem] font-[400] leading-[175% ]">
                Elevate your impact in your player&apos;s development journey by
                gaining a deeper understanding for their progress and
                advancement.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/about2.png"
              alt="about"
              width={487}
              height={467}
              
            />
          </div>
        </main>
        {/* main 3 Button */}
        <div className="w-full flex flex-col justify-center items-center mt-[3.65rem] gap-[2rem]">
          <ButtonComponent />
        </div>
      </div>
    </section>
  );
};
export  function NfaAbout () {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 py-14 md:py-32">
        <main className="flex flex-col md:flex-row gap-8  md:gap-24 justify-center ">
          {/* image div */}
          <div className="flex items-center justify-center flex-col gap-y-6 ">
          
            <Image
              src="/ia 02.png"
              alt="about"
              width={487}
              height={467}
              className=""
            />
          </div>
          {/* text div */}
          <div className="flex flex-col justify-center max-w-[34.6875rem]  gap-[2.375rem]">
            <h1 className="  font-[700] text-[2rem] leading-normal text-[#242424] md:text-start sm:text-start text-center">
              PLAYERS
            </h1>
            <div className="gap-[1.625rem] flex flex-col">
              <p className="text-[#494949] text-[1rem] font-[400] leading-[175% ]">
                It&apos;s time to level up your mental game, maintain peak
                performance in every match, and stand out both on and off the
                pitch!
              </p>
              <p className="text-[#494949] text-[1rem] font-[400] leading-[175% ]">
                This isn&apos;t about luck or wishful thinking; it&apos;s by
                your intentional design. Shape your success and the future you
                desire.
              </p>
              <p className="text-[#494949] text-[1rem] font-[400] leading-[175% ]">
                Seize the opportunity to benefit from expert strategies and
                proven methods employed in PL Academies!
              </p>
            </div>
          </div>
        </main>
        {/* main 2 */}
        <main className="flex flex-col-reverse md:flex-row md:gap-24 gap-12 justify-center  mt-[40px]  md:mt-[128px]">
          <div className="flex flex-col justify-center max-w-[34.6875rem]  gap-[1.5rem]">
            <h1 className="font-[700] text-[2rem] leading-normal text-[#242424] md:text-start sm:text-start text-center">
              PARENTS
            </h1>
            <div className="gap-[1.75rem] flex flex-col">
              <p className="text-[#494949] text-[1rem] font-[400] leading-[175% ]">
                It&apos;s time for you to acquire valuable insights into how
                your player should approach mental training.
              </p>
              <p className="text-[#494949] text-[1rem] font-[400] leading-[175% ]">
                Elevate your impact in your player&apos;s development journey by
                gaining a deeper understanding for their progress and
                advancement.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/ia 03.png"
              alt="about"
              width={487}
              height={467}
              
            />
          </div>
        </main>
        {/* main 3 Button */}
        <div className="w-full flex flex-col justify-center items-center mt-[3.65rem] gap-[2rem]">
          <NafcButtonComponent />
        </div>
      </div>
    </section>
  );
};

export default About;
