import Image from "next/image";
import React from "react";
import Balancer from "react-wrap-balancer";
import Bulletspoints from "./Bulletspoints";
import Link from "next/link";
import { X } from "lucide-react";

const whatWouldYouGet = [
  {
    title: "MENTAL SKILLS PROGRAM",
    value: "Valued at $3999",
    bullets: [
      "Psychological Profiling inspired by the PCDE Model (Psychological Characteristics for Developing Excellence)",
      "Building Confidence",
      "Improving Consistency",
      "Dealing with Pressure",
      "Improving Focus & Concentration",
      "Bouncing back from disappointment & Rejection",
      "Mental Health & Self Care",
    ],
  },
  {
    title: "SOCIAL PROGRAM",
    value: "Valued at $2444",
    bullets: [
      "Building Character",
      "Building Relationships",
      "Communications & Emotional Intelligence",
    ],
  },
  {
    title: "PHYSICAL PROGRAM",
    value: "Valued at $1222",
    bullets: [
      "Strength & Conditioning Plans & tutorials for SPEED | POWER | AGILITY",
      "Performance Nutrition training by EFL NUTRITIONIST",
      "EFL Nutrition Plans and Guides",
    ],
  },
  {
    title: "Key Features",
    value: "PRICELESS",
    bullets: [
      "20+ hours of Elite training",
      "24/7 MENTORING SUPPORT VIA OUR PRIVATE WHATSAPP!! 🏪",
    ],
  },
];

const Discounts = () => {
  return (
    <section
      className="md:px-6 py-[4rem]  md:py-[11.6rem] "
      style={{
        backgroundImage: "url('/Bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main className="max-w-[80rem] mx-auto flex items-center justify-center">
        <div className="flex flex-col justify-center items-center max-w-[59rem] ">
          {/* top heading  */}
          <h1 className='text-[1rem] md:text-[2.5rem] text-[#fff] text-center font-[600] md:font-[700] leading-[150%] tracking-[-0.08813rem]"'>
            <Balancer>
              {" "}
              IFA PLAYER DEVELOPMENT PROGRAM: 12 MONTHS OF EXCELLENCE FOR ALL
              IFA PLAYERS & PARENTS{" "}
            </Balancer>
          </h1>

          <div className="discountbg flex flex-col justify-center items-center  mt-[3.65rem] px-[.5rem] md:px-[1.69rem] ">
            <h1 className="text-[#242424] text-[1rem]  md:text-[1.9015rem] font-[700] mt-[3rem] ">
              JOIN NOW AND GET ACCESS TO:
            </h1>
            <Image
              src="/cardimagr.png"
              alt="cardimg"
              width={721}
              height={379}
              className=" mt-[3.69rem]"
            />
            {/* border inner text */}
            <div className=" flex flex-col   text-center mt-[3.5rem] w-full">
              <Bulletspoints
                title="IFA CURRICULUM RUNNING ALL YEAR-ROUND"
                value="Valued at $10,000"
                bullets={[
                  "GOAL-ACHIEVEMENT PROCESS🥅🏆",
                  "MINDSET MEDICINE 🧠⛑💊",
                  "ART OF LEADERSHIP EXCELLENCE👑",
                  "THRIVE WORKSHOP 📈",
                  "CONFIDENCE ACCELERATOR 🧠📈",
                  "SURFING THROUGH THE PRESSURE 🧠🌊🏄‍♂",
                ]}
              >
                <h2 className=" md:text-[1.9015rem] text-[1rem] font-[700] text-[#242424] text-center leading-normal mt-2">
                  ACCESS TO OUR EXCLUSIVE PERSONAL DEVELOPMENT LIVE GROUP
                  COACHING MASTERCLASSES
                </h2>
                <p className=" text-[.9rem]  md:text-[1.375rem] text-[#242424] font-[600] leading-normal">
                  WITH #PLAYBACK RECORDING INCLUDED🎥🎥:LIFETIME IMPACT
                </p>
              </Bulletspoints>

              {whatWouldYouGet.map((what, i) => (
                <Bulletspoints
                  key={i}
                  title={what.title}
                  value={what.value}
                  bullets={what.bullets}
                />
              ))}

              <div className="md:mt-[3.75rem] mt-[2rem] flex items-center flex-col gap-4 md:gap-[1.52rem] mb-[3rem]">
                <h2 className="text-[#242424] text-[.9rem] md:text-[1.3125rem] font-[700] leading-normal text-center">
                  EXCLUSIVE DISCOUNT ONLY FOR IFA PLAYERS
                </h2>
                <div className="relative">
                 
                 <span className="text-[1rem]  md:text-[1.97756rem] font-[700] g  gg text-center">
                   $17,665 just $16.50/month
                 </span>
                 <X
                   className="absolute left-[1rem] md:left-[2.5rem] -top-[12px] md:top-0"
                   color="red"
                   size={48}
                   strokeWidth={1.5}
                 />
               </div>
                <h1 className="text-[1rem] md:text-[1.97756rem] font-[700] g  gg text-center">
                  Experience a year of growth for only $16.50/month - a one time
                  payment of $198 unlocks it all!
                </h1>
                <Link href="https://buy.stripe.com/5kAeXw4n23pTe0UeV1">
                  <button className="text-[.9rem]  text-center  md:w-full  md:text-[1.75375rem] text-[#fff] font-[700] md:font-[700] md:max-w-[59.125rem] flex items-center justify-center  md:leading-[2.6195rem]  leading-normal homebtn px-2 md:px-[1.50rem] md:py-[1rem] py-[.8rem]">
                    SECURE YOUR SPOT ON THE PROGRAM TODAY!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export const NfaDiscounts = () => {
  return (
    <section
      className="md:px-6 py-[4rem]  md:py-[11.6rem] "
      style={{
        backgroundImage: "url('/Bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main className="max-w-[80rem] mx-auto flex items-center justify-center">
        <div className="flex flex-col justify-center items-center max-w-[59rem] ">
          {/* top heading  */}
          <h1 className='text-[1rem] md:text-[2.5rem] text-[#fff] text-center font-[600] md:font-[700] leading-[150%] tracking-[-0.08813rem]"'>
            <Balancer>
              {" "}
              NEFC PLAYER DEVELOPMENT PROGRAM: 12 MONTHS OF EXCELLENCE FOR ALL
              NEFC PLAYERS & PARENTS{" "}
            </Balancer>
          </h1>

          <div className="discountbg flex flex-col justify-center items-center  mt-[3.65rem] px-[.5rem] md:px-[1.69rem] ">
            <h1 className="text-[#242424] text-[1rem]  md:text-[1.9015rem] font-[700] mt-[3rem] ">
              JOIN NOW AND GET ACCESS TO:
            </h1>
            <Image
              src="/cardimagr.png"
              alt="cardimg"
              width={721}
              height={379}
              className=" mt-[3.69rem]"
            />
            {/* border inner text */}
            <div className=" flex flex-col   text-center mt-[3.5rem] w-full">
              <Bulletspoints
                title="NEFC CURRICULUM RUNNING ALL YEAR-ROUND"
                value="Valued at $10,000"
                bullets={[
                  "GOAL-ACHIEVEMENT PROCESS🥅🏆",
                  "MINDSET MEDICINE 🧠⛑💊",
                  "ART OF LEADERSHIP EXCELLENCE👑",
                  "THRIVE WORKSHOP 📈",
                  "CONFIDENCE ACCELERATOR 🧠📈",
                  "SURFING THROUGH THE PRESSURE 🧠🌊🏄‍♂",
                ]}
              >
                <h2 className=" md:text-[1.9015rem] text-[1rem] font-[700] text-[#242424] text-center leading-normal mt-2">
                  ACCESS TO OUR EXCLUSIVE PERSONAL DEVELOPMENT LIVE GROUP
                  COACHING MASTERCLASSES
                </h2>
                <p className=" text-[.9rem]  md:text-[1.375rem] text-[#242424] font-[600] leading-normal">
                  WITH #PLAYBACK RECORDING INCLUDED🎥🎥:LIFETIME IMPACT
                </p>
              </Bulletspoints>

              {whatWouldYouGet.map((what, i) => (
                <Bulletspoints
                  key={i}
                  title={what.title}
                  value={what.value}
                  bullets={what.bullets}
                />
              ))}

              <div className="md:mt-[3.75rem] mt-[2rem] flex items-center flex-col gap-4 md:gap-[1.52rem] mb-[3rem]">
                <h2 className="text-[#242424] text-[.9rem] md:text-[1.3125rem] font-[700] leading-normal text-center">
                  EXCLUSIVE DISCOUNT ONLY FOR NEFC PLAYERS
                </h2>

                <div className="relative">
                 
                  <span className="text-[1rem]  md:text-[1.97756rem] font-[700] g  gg text-center">
                    $17,665 just $16.50/month
                  </span>
                  <X
                    className="absolute left-[1rem] md:left-[2.5rem] -top-[12px] md:top-0"
                    color="red"
                    size={48}
                    strokeWidth={1.5}
                  />
                </div>

                <h1 className="text-[1rem] md:text-[1.97756rem] font-[700] g  gg text-center">
                  Experience a year of growth for only $16.50/month - a one time
                  payment of $198 unlocks it all!
                </h1>
                <Link href="https://buy.stripe.com/dR69Dc5r6gcF6yscMU">
                  <button className="text-[.9rem]  text-center  md:w-full  md:text-[1.75375rem] text-[#fff] font-[700] md:font-[700] md:max-w-[59.125rem] flex items-center justify-center  md:leading-[2.6195rem]  leading-normal homebtn px-2 md:px-[1.50rem] md:py-[1rem] py-[.8rem]">
                    SECURE YOUR SPOT ON THE PROGRAM TODAY!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
export default Discounts;
