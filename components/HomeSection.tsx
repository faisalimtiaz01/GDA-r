import React from "react";
import Header, { NfaHeader } from "@/components/Header";
import Link from "next/link";
import ButtonComponent, { NafcButtonComponent } from "./ButtonComponent";
import Image from "next/image";
import CountDown from "./CountDown";

const HomeSection = () => {
  return (
    <section
      className="px-6 pt-10 pb-32"
      style={{
        backgroundImage: "url('/Hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main className="max-w-[80rem] mx-auto  ">
        <Header />
        <div className="w-full flex flex-col justify-center items-center mt-[3.65rem] gap-[2rem]">
          <Image
            src="/logo.png"
            alt="logo home"
            width={311}
            height={130}
          
          />
          <h1 className="text-[1.3rem] md:text-[2.97rem] text-[#fff] text-center font-[600] md:font-[700] leading-[150%] tracking-[-0.08813rem]">
            Performance Psychology and Personal{" "}
            <br className="hidden md:block" /> Development Training for ALL IFA
            Players!
          </h1>
          {/* Your Vimeo video embedded using iframe */}
          <iframe
            src="https://player.vimeo.com/video/886347619?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
            width={946}
            height={561}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full max-w-[59.125rem] h-[200px] sm:h-[461px] md:h-[561px]"
          >
            
          </iframe>
          <CountDown />
          <ButtonComponent />
        </div>
      </main>
    </section>
  );
};

export const NfaHomeSection = () => {
  return (
    <section
      className="px-6 pt-10 pb-32"
      style={{
        backgroundImage: "url('/Hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main className="max-w-[80rem] mx-auto  ">
        <NfaHeader />
        <div className="w-full flex flex-col justify-center items-center mt-[3.65rem] gap-[2rem]">
          <Image
            src="/main-logo.png"
            alt="logo home"
            width={311}
            height={130}
          
          />
          <h1 className="text-[1.3rem] md:text-[2.97rem] text-[#fff] text-center font-[600] md:font-[700] leading-[150%] tracking-[-0.08813rem]">
          PERFORMANCE PSYCHOLOGY AND PERSONAL {" "}
            <br className="hidden md:block" />DEVELOPMENT TRAINING FOR ALL NEFC PLAYERS!
          </h1>
          {/* Your Vimeo video embedded using iframe */}
          <iframe
            src="https://player.vimeo.com/video/886347619?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
            width={946}
            height={561}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full max-w-[59.125rem] h-[200px] sm:h-[461px] md:h-[561px]"
          >
            
          </iframe>
          <CountDown />
          <NafcButtonComponent />
        </div>
      </main>
    </section>
  );
};

export default HomeSection;
