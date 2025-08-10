import React, { useState } from "react";
import Plus from "./icons/Plus";
import Minus from "./icons/Minus";
import { cn } from "@/lib/utils";

type InfoType = {
  id: string;
  label: string;
  videoSrc: string;
  icon: React.JSX.Element;
  points: string[];
};

const DropDownInfo = ({ info }: { info: InfoType[] }) => {
  const [currentInfoIndex, setCurrentInfoIndex] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 h-full w-full">
      <div className="flex flex-col justify-start items-start h-full w-full lg:w-fit">
        {info.length > 0 &&
          info.map((item, idx) => (
            <div
              className={cn(
                "flex flex-col gap-2 sm:gap-3 md:gap-4 min-w-full lg:min-w-[20rem] py-4 sm:py-6 md:py-7 lg:py-8 first:pt-2 sm:first:pt-3 md:first:pt-3.5 lg:first:pt-4 border-b-[1px] border-b-[#DEE3E9]"
              )}
              key={item.id}
            >
              <div className="w-full grid grid-cols-[2.5rem_1fr_2rem] sm:grid-cols-[2.75rem_1fr_2rem] md:grid-cols-[2.875rem_1fr_2rem] lg:grid-cols-[3rem_16rem_2rem] justify-items-start items-center gap-2 sm:gap-3 md:gap-4">
                <span className="w-fit h-fit">{item.icon}</span>
                <h1 className="text-[#1C2B33] font-inter text-lg sm:text-xl md:text-[1.375rem] lg:text-[1.5rem] font-semibold leading-6 sm:leading-7 md:leading-8 lg:leading-[2.0625rem]">
                  {item.label}
                </h1>
                <span
                  className="w-fit h-fit cursor-pointer"
                  onClick={() => setCurrentInfoIndex(idx)}
                >
                  {currentInfoIndex === idx ? <Minus /> : <Plus />}
                </span>
              </div>
              {currentInfoIndex === idx && (
                <div className="flex w-full h-fit py-2 sm:py-3 md:py-3.5 lg:py-4">
                  <ol className="list-decimal">
                    {item.points.length > 0 &&
                      item.points.map((point) => (
                        <li
                          key={point}
                          className="text-[#465A69] font-inter text-sm sm:text-base md:text-lg lg:text-[1.125rem] font-normal leading-5 sm:leading-6 md:leading-7 lg:leading-[1.75rem] pl-1 sm:pl-1.5 md:pl-1.5 lg:pl-2 ml-5"
                        >
                          {point}
                        </li>
                      ))}
                  </ol>
                </div>
              )}
            </div>
          ))}
      </div>
      <div className="flex flex-1 flex-col justify-center items-center rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-4xl overflow-hidden w-full h-64 sm:h-80 md:h-96 lg:h-full">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          controls={false}
        >
          <source src={info[currentInfoIndex].videoSrc} />
        </video>
      </div>
    </div>
  );
};

export default DropDownInfo;
