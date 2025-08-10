import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const navItems = [
    {
      label: "Medical",
      slug: "/medical",
    },
    {
      label: "Exercise",
      slug: "exercise",
    },
    {
      label: "Nutrition",
      slug: "nutrition",
    },
    {
      label: "About Us",
      slug: "about-us",
    },
    {
      label: "Phycology",
      slug: "phycology",
    },
    {
      label: "Services",
      slug: "services",
    },
  ];

  return (
    <div className="flex justify-between items-center fixed top-0 left-0 z-10 bg-white w-screen px-[1rem] gap-[0.75rem] h-[4rem] sm:px-[2rem] sm:gap-[1rem] sm:h-[4.5rem] md:px-[4rem] md:gap-[0.75rem] md:h-[6rem] lg:px-[4rem] lg:h-[6rem]">
      <div className="flex gap-3 items-center">
        <Image src="/logo.png" height={60} width={64} alt="Reconnect Logo" className="h-10 w-10" />
        <span className="font-semibold text-xl md:text-2xl leading-5 text-primary text-center">
          RECONNECT
        </span>
      </div>
      <div className="hidden lg:flex gap-16 items-center">
        {navItems.length > 0 &&
          navItems.map((item) => (
            <Link key={item.slug} href={item.slug}>
              {item.label}
            </Link>
          ))}
      </div>
      <div className="flex lg:hidden justify-center items-center p-3">
        <span className="w-fit h-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Header;
