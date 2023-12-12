import React from 'react';
import Image from 'next/image';
import CountDown from './CountDown';

const Banner = () => {
  return (
    <section>
      <main className='max-w-[80rem] mx-auto'>
        <div
          className='rounded-2xl my-[4rem] md:my-[8.25rem] flex justify-between flex-col md:flex-row items-center  md:pb-[17.52px] pt-[18.48px] pr-[19px] pl-[20px] md:pl-[77px]'
          style={{
            backgroundImage: "url('/bgbanner.png')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className=' w-full md:w-[60%]'>
            <h1 className='text-[#FFF] text-[1rem] text-center md:text-start mt-4 md:mt-0 md:text-[1.75rem] font-[700]'>
              Become the best player you can be by transforming your mindset, developing leadership skills, and conditioning yourself for success.
            </h1>
            <p className='text-[.8rem] text-center md:text-start md:text-[1rem] text-[#FFF] font-[400] mt-[1rem]   md:mt-[1.5rem]'>ALL IFA PLAYERS MUST BE REGISTERED BEFORE THE DEADLINE  YOUR PARTICIPATION IS KEY TO OUR COLLECTIVE SUCCESS</p>
<div className='md:mt-[3rem] mt-1.5rem'>
           <CountDown />
          </div>
          </div>

          <div className='w-full flex items-center justify-center md:w-[30%] md:mt-0 mt-10 md:mb-0 mb-5'>
            <Image src='/Banner.png' width={369} height={459} alt='tar' />
          </div>
        </div>
      </main>
    </section>
  );
};

export const NfaBanner = () => {
  return (
    <section>
    <main className='max-w-[80rem] mx-auto'>
      <div
        className='rounded-2xl my-[4rem] md:my-[8.25rem] flex justify-between flex-col md:flex-row items-center  md:pb-[17.52px] pt-[18.48px] pr-[19px] pl-[20px] md:pl-[77px]'
        style={{
          backgroundImage: "url('/bgbanner.png')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className=' w-full md:w-[60%]'>
          <h1 className='text-[#FFF] text-[1rem] text-center md:text-start mt-4 md:mt-0 md:text-[1.75rem] font-[700]'>
            Become the best player you can be by transforming your mindset, developing leadership skills, and conditioning yourself for success.
          </h1>
          <p className='text-[.8rem] text-center md:text-start md:text-[1rem] text-[#FFF] font-[400] mt-[1rem]   md:mt-[1.5rem]'>ALL NEFC PLAYERS MUST BE REGISTERED BEFORE THE DEADLINE  YOUR PARTICIPATION IS KEY TO OUR COLLECTIVE SUCCESS</p>
<div className='md:mt-[3rem] mt-1.5rem'>
         <CountDown />
        </div>
        </div>

        <div className='w-full flex items-center justify-center md:w-[30%] md:mt-0 mt-10 md:mb-0 mb-5'>
          <Image src='/ia 01.png' width={369} height={459} alt='tar' />
        </div>
      </div>
    </main>
  </section>
  );
};

export default Banner;
