import React from "react";

const MainHeading = ({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <h1 className="text-[#1D1D1F] text-center font-inter font-bold text-[1.5rem] leading-[2rem] tracking-tight sm:text-[2.25rem] sm:leading-[2.5rem] sm:tracking-[-0.03rem] md:text-[5rem] md:leading-[5.25rem] md:tracking-[-0.0625rem] lg:text-[6rem] lg:leading-[6.5rem] lg:tracking-[-0.075rem]">
        {heading}
      </h1>
      <p className="text-[#6E6E73] text-center font-inter font-normal tracking-[-0.0625rem] text-[1rem] leading-[1.5rem] w-[20rem] sm:text-[1.125rem] sm:leading-[1.75rem] sm:w-[30rem] md:text-[1.25rem] md:leading-[2rem] md:w-[40rem] lg:text-[1.5rem] lg:leading-[2.25rem] lg:w-[50rem]">
        {subHeading}
      </p>
    </div>
  );
};

export { MainHeading };
