import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Bulletspoints = ({
  title,
  value,
  bullets,
  classNames,
  children
}: {
  title: string;
  value: string;
  bullets: string[];
  classNames?: String
  children?: React.ReactNode
}) => {
  return (
    <div className={cn(`border border-[#A59BAE] rounded-[0.375rem] flex flex-col gap-[1.23rem] text-center mt-[1.5rem] md:mt-[3.5rem] w-full p-2 md:p-4`,
    classNames
    )}>
        {children}
      <div className="flex items-start justify-between  w-full">
      
        <h2 className="text-[.8rem] md:text-[1.511rem] font-[700] leading-normal text-[#242424] w-3/4 text-start">
          ⚽ {title}
        </h2>

        <h2 className=" md:text-[1.1522rem] text-[.6rem] font-[700] leading-normal text-[#242424] w-1/4 text-end">
          {value}
        </h2>
      </div>

      <div className="flex flex-col gap-[0.51rem]">
        {bullets.map((b, i) => (
          <Bullet key={i} text={b} />
        ))}
      </div>
    </div>
  );
};

export default Bulletspoints;

const Bullet = ({ text }: { text: string }) => {
  return (
    <div className="flex items-start justify-start flex-row">
  <Image src="/oder.png" alt="listicon" width={20} height={32} className="mt-[.35rem]  w-[10px] md:w-[20px] " />
  <div className="flex w-3/4">
  <p className="text-[.8rem] md:text-[1.04606rem] text-start text-[#494949] leading-[190%] font-[500] ml-2 ">
    {text}
  </p>
  <p></p>
  </div>
</div>

  );
};
