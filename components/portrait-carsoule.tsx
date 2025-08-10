import React from "react";

type PortraitCarsouleType = {
  id: number | string;
  src: string;
  label: string;
  slug: string;
};

const PortraitCarsoule = ({ items }: { items: PortraitCarsouleType[] }) => {
  return (
    <div className="flex gap-2 sm:gap-3 md:gap-3.5 lg:gap-4 w-full overflow-x-auto [scrollbar-width:none]">
      {items.length > 0 &&
        items.map((item) => (
          <div
            className={`rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[2.25rem] bg-lightgray bg-center bg-cover bg-no-repeat h-64 sm:h-80 md:h-96 lg:h-[60rem] relative flex-shrink-0`}
            style={{ backgroundImage: `url(${item.src})` }}
            key={item.id}
          >
            <div className="rounded-t-lg sm:rounded-t-xl md:rounded-t-2xl lg:rounded-t-[2rem] bg-gradient-to-t from-transparent via-[rgba(0,0,0,0.47)] to-[rgba(0,0,0,0.60)] w-48 sm:w-64 md:w-80 lg:w-[30.75rem] h-32 sm:h-40 md:h-48 lg:h-[22rem] p-4 sm:p-6 md:p-8 lg:p-[3rem] px-3 sm:px-4 md:px-6 lg:px-[2.8125rem] flex justify-center items-start gap-1 sm:gap-2 md:gap-2.5 lg:gap-[0.625rem] flex-shrink-0">
              <h1 className="text-white font-inter text-lg sm:text-xl md:text-2xl lg:text-[2.25rem] font-bold leading-6 sm:leading-7 md:leading-8 lg:leading-[2.875rem]">
                {item.label}
              </h1>
            </div>
            <span className="h-fit w-fit absolute right-2 sm:right-3 md:right-4 lg:right-5 bottom-3 sm:bottom-5 md:bottom-7 lg:bottom-9">
              <svg
                width="32"
                height="32"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
              >
                <circle cx="24" cy="24" r="24" fill="#0171E3" />
                <path
                  d="M22 19L27 24L22 29"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        ))}
    </div>
  );
};

export default PortraitCarsoule;
