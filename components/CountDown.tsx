"use client"
import React, { useState, useEffect } from 'react';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountDown: React.FC = () => {
  const targetDate = new Date('2023-12-11T00:00:59.999Z');

  const calculateTimeRemaining = (): TimeRemaining => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(calculateTimeRemaining);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <>
      <div className="flex items-center justify-center md:justify-start gap-[0.83rem] ">
        <div>
          <h1 className="sameborder flex items-center justify-center text-[1.65219rem] text-[#FFF] font-[700] leading-normal p-[0.82606rem] gap-[0.41306rem] flex-col w-[3.40219rem]">
            {String(timeRemaining.days).padStart(2, '0')}
          </h1>
          <p className="text-[0.51631rem] text-[#fff] leading-normal mt-[.5rem] ml-[.5rem] font-[600] tracking-[0.03613rem] uppercase opacity-[0.9]">
            Days
          </p>
        </div>
        <div>
          <h1 className="sameborder flex items-center justify-center text-[1.65219rem] text-[#FFF] font-[700] leading-normal p-[0.82606rem] gap-[0.41306rem] flex-col w-[3.40219rem]">
            {String(timeRemaining.hours).padStart(2, '0')}
          </h1>
          <p className="text-[0.51631rem] text-[#fff] leading-normal mt-[.5rem] ml-[.5rem] font-[600] tracking-[0.03613rem] uppercase opacity-[0.9]">
            Hours
          </p>
        </div>

        <div>
          <h1 className="sameborder flex items-center justify-center text-[1.65219rem] text-[#FFF] font-[700] leading-normal p-[0.82606rem] gap-[0.41306rem] flex-col w-[3.40219rem]">
            {String(timeRemaining.minutes).padStart(2, '0')}
          </h1>
          <p className="text-[0.51631rem] text-[#fff] leading-normal mt-[.5rem] ml-[.5rem] font-[600] tracking-[0.03613rem] uppercase opacity-[0.9]">
            Minutes
          </p>
        </div>

        <div>
          <h1 className="sameborder flex items-center justify-center text-[1.65219rem] text-[#FFF] font-[700] leading-normal p-[0.82606rem] gap-[0.41306rem] flex-col w-[3.40219rem]">
            {String(timeRemaining.seconds).padStart(2, '0')}
          </h1>
          <p className="text-[0.51631rem] text-[#fff] leading-normal mt-[.5rem] ml-[.5rem] font-[600] tracking-[0.03613rem] uppercase opacity-[0.9]">
            Seconds
          </p>
        </div>
      </div>
    </>
  );
};

export default CountDown;
