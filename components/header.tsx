import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {

    const navItems = [
        {
            label: "Medical",
            slug: "/medical"
        },
        {
            label: "Exercise",
            slug: "exercise"
        },
        {
            label: "Nutrition",
            slug: "nutrition"
        },
        {
            label: "About Us",
            slug: "about-us"
        },
        {
            label: "Phycology",
            slug: "phycology",
        },
        {
            label: "Services",
            slug: "services"
        }
    ]

  return (
    <div className="flex justify-between px-16 gap-3 h-24 fixed top-0 left-0 z-10 bg-white w-full">
      <div className="flex gap-3 items-center">
        <Image src="/logo.png" height={60} width={64} alt="Reconnect Logo" />
        <span className="font-semibold text-2xl leading-5 text-primary text-center">RECONNECT</span>
      </div>
      <div className="flex gap-16 items-center">
        {
            navItems.length > 0 && navItems.map(item => (
                <Link key={item.slug} href={item.slug}>{item.label}</Link>
            ))
        }
      </div>
    </div>
  );
};

export default Header;
