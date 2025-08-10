import React, { useState } from "react";

const Carsoule = ({
  items,
}: {
  items: {
    heading: string;
    src: string;
  }[];
}) => {
  const [activeCarsoule, setActiveCarsoule] = useState(items[0]);

  return (
    <div className="flex flex-col justify-center items-center h-full w-full gap-4 sm:gap-6 md:gap-8">
      <div className="flex flex-row justify-start h-[32rem] sm:h-[42rem] md:h-[72rem] w-full gap-4 sm:gap-6 md:gap-8 lg:gap-10 overflow-x-scroll scroll-smooth [scrollbar-width:none] pl-4 sm:pl-6 md:pl-8 lg:pl-10 rounded-l-lg sm:rounded-l-xl md:rounded-l-2xl lg:rounded-l-4xl">
        {items.length > 0 &&
          items.map((item) => (
            <div
              className={`h-full w-full sm:w-[95%] md:w-[93%] lg:w-[91%] shrink-0 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[2rem] bg-cover bg-no-repeat bg-center bg-gray-200 last:mr-4 sm:last:mr-6 md:last:mr-7 lg:last:mr-8 relative`}
              key={item.heading}
              style={{ backgroundImage: `url(${item.src})` }}
            >
              <h1 className="text-white font-inter text-lg sm:text-xl md:text-2xl lg:text-[2.25rem] font-semibold leading-6 sm:leading-7 md:leading-8 lg:leading-[3.375rem] absolute top-4 sm:top-8 md:top-12 lg:top-20 left-6 sm:left-6 md:left-8 lg:left-16 w-72 sm:w-80 md:w-96 lg:w-[56rem] pr-4 sm:pr-6 md:pr-8 lg:pr-0">
                {item.heading}
              </h1>
              <div className="top-0 left-0 h-full w-full rounded-t-lg sm:rounded-t-xl md:rounded-t-2xl lg:rounded-t-[2rem] bg-gradient-to-t from-transparent via-black/47 to-black/60" />
            </div>
          ))}
      </div>
      <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        <svg
          width="50"
          height="50"
          viewBox="0 0 74 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[4.625rem] lg:h-[4.625rem]"
        >
          <rect
            x="0.5"
            y="0.5"
            width="73"
            height="73"
            rx="36.5"
            fill="#F2F3F5"
          />
          <rect
            x="0.5"
            y="0.5"
            width="73"
            height="73"
            rx="36.5"
            stroke="#E3E3EB"
          />
          <path
            d="M50.19 20.5711C51.2775 20.9737 52 22.0179 52 23.1853V50.8147C52 51.9821 51.275 53.0263 50.19 53.4289C48.1306 54.1904 45.8694 54.1904 43.81 53.4289C43.2799 53.231 42.8224 52.8748 42.4989 52.4081C42.1755 51.9413 42.0014 51.3862 42 50.8172V23.1879C42 22.0204 42.725 20.9762 43.81 20.5711C45.8694 19.8096 48.1306 19.8096 50.19 20.5711ZM30.19 20.5711C31.2775 20.9737 32 22.0179 32 23.1853V50.8147C32 51.9821 31.275 53.0263 30.19 53.4289C28.1306 54.1904 25.8694 54.1904 23.81 53.4289C23.2799 53.231 22.8224 52.8748 22.4989 52.4081C22.1755 51.9413 22.0014 51.3862 22 50.8172V23.1879C22 22.0204 22.725 20.9762 23.81 20.5711C25.8694 19.8096 28.1306 19.8096 30.19 20.5711Z"
            fill="black"
          />
        </svg>
        <svg
          width="180"
          height="50"
          viewBox="0 0 255 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sm:w-52 sm:h-14 md:w-56 md:h-16 lg:w-[15.9375rem] lg:h-[4.625rem]"
        >
          <rect
            x="0.5"
            y="0.5"
            width="254"
            height="73"
            rx="36.5"
            fill="#F2F3F5"
          />
          <rect
            x="0.5"
            y="0.5"
            width="254"
            height="73"
            rx="36.5"
            stroke="#E3E3EB"
          />
          <rect x="26" y="25" width="76" height="24" rx="12" fill="white" />
          <rect
            x="26"
            y="25"
            width="76"
            height="24"
            rx="12"
            stroke="#0A73E3"
            strokeWidth="2"
          />
          <rect x="32" y="31" width="64" height="12" rx="6" fill="#68686D" />
          <circle cx="127" cy="37" r="6" fill="#69696D" />
          <circle cx="157" cy="37" r="6" fill="#69696D" />
          <circle cx="187" cy="37" r="6" fill="#69696D" />
          <circle cx="217" cy="37" r="6" fill="#69696D" />
        </svg>
      </div>
    </div>
  );
};

export default Carsoule;
