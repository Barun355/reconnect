"use client";

import Carousel from "@/components/carousel";
import { useState } from "react";

export default function Home() {
  const whyReconnect = [
    {
      idx: 0,
      label: "Step 1",
      heading: "The Problem",
      videoUrl: "/why-1.mp4",
      subHeading: [
        "Modern lifestyles have led to a rise in chronic illnesses, anxiety and burnout leading to increase in",
      ],
      points: [
        "Metabolic diseases at earlier age",
        "Joint and bone disease at all age groups",
        "Struggle to prioritize holistic well being.",
        "Focus on treatment based modern health care solutions rather than preventative care",
      ],
    },
    {
      idx: 1,
      label: "Step 2",
      heading: "The Solution",
      videoUrl: "/why-2.mp4",
      subHeading: [
        "“Reconnect”",
        "is a doctor led initiative focusing on preventative and integrative health care delivery ",
      ],
      points: [
        "Providing expert guidance from health care professional ",
        "Personalized health care solutions",
        "Integrating effective life style interventions",
        "Focus on psychological and emotional well being ",
      ],
    },
  ];

  const benefits = [
    {
      src: "/benefit-1.png",
      heading:
        "People with metabolic diseases, diabetes, hypertension, gout, pcos",
    },
    {
      src: "/benefit-2.jpg",
      heading: "People with lifestyle disorders",
    },
    {
      src: "/benefit-3.jpg",
      heading: "Those struggling with stress, anxiety, and sleep disorders",
    },
    {
      src: "/benefit-4.jpg",
      heading: "Individuals with arthritis, spinal issues, and joint pain",
    },
    {
      src: "/benefit-5.jpg",
      heading: "Anyone seeking better metabolism, weight loss and fitness",
    },
  ];

  const [currentWhy, setCurrentWhy] = useState(whyReconnect[1]);

  return (
    <div
      className="flex flex-col justify-center items-center w-full h-fit gap-32"
      id="home"
    >
      {/* Hero Section */}
      <div className="w-full h-[80%] mx-auto relative" id="hero">
        <video className="w-full h-full" autoPlay muted loop controls={false}>
          <source src="/video.mp4" />
        </video>
        <div
          className="absolute bottom-0 h-full w-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0.52%, rgba(0, 0, 0, 0.47) 77.72%, rgba(0, 0, 0, 0.60) 99.38%)",
          }}
        />
        <div className="absolute bottom-0 left-0 mx-auto h-[32.5rem] justify-center items-center text-7xl w-full">
          <div className="container mx-auto flex flex-col justify-center items-center gap-12">
            <div className="w-[64rem] flex flex-col justify-center items-center *:text-center gap-8">
              <h1 className="leading-[5rem] font-semibold text-center text-white">
                Always wanted to get fit, never knew how
              </h1>
              <h2 className="text-white text-center text-2xl font-normal leading-10 text-shadow-[0_5px_5px_rgba(0,0,0,0.00)] font-inter w-[42rem]">
                Reconnect helps you achieve holistic health by balancing your
                physical, mental, and subconscious well-being.
              </h2>
            </div>
            <button className="rounded-full border-1 border-[#E2E2E2] bg-[#ECECEF] flex justify-center items-center h-20 gap-3 p-[0.4rem_0.6rem_0.4rem_1.6rem]">
              <span className="text-black text-2xl font-semibold font-inter">
                Start Your Journey
              </span>
              <svg
                width="49"
                height="48"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" width="48" height="48" rx="24" fill="#0171E3" />
                <path
                  d="M22.0962 29C21.855 28.9994 21.6387 28.8337 21.5466 28.581C21.4545 28.3283 21.5052 28.0375 21.6749 27.8436L25.0602 23.9999L21.6749 20.1562C21.5631 20.0292 21.5 19.8571 21.5 19.6778C21.5 19.498 21.5626 19.3258 21.6744 19.1989C21.9068 18.9339 22.2846 18.9339 22.5175 19.1977L26.3256 23.5215C26.4374 23.6484 26.5 23.8206 26.5 23.9998C26.5 24.179 26.4374 24.3512 26.3256 24.4781L22.5175 28.8018C22.4062 28.9288 22.2546 29.0006 22.0962 29Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="1.33411"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Reconnect Section */}
      <div className="relative w-screen h-screen overflow-hidden flex flex-col justify-center items-center gap-8">
        <p className="text-8xl font-black text-black">RECONNECT</p>
        <p className="text-[#1D1D1F] text-center text-4xl font-normal tracking-[-1px] font-inter">
          Path to a Happier Life with Better Health
        </p>
      </div>

      {/* Define Reconnect */}
      <div
        className="h-fit w-screen inline-flex flex-col justify-start pt-32 items-center gap-[5rem]"
        id="defination"
      >
        <div className="flex flex-col justify-center items-center gap-[1.625rem] self-stretch">
          <h1 className="text-[#1D1D1F] text-center font-inter text-[5rem] font-bold leading-[5.25rem] tracking-[-0.0625rem]">
            What is Reconnect
          </h1>
          <p className="text-[#6E6E73] text-center font-inter text-[1.5rem] font-normal leading-[2.25rem] tracking-[-0.0625rem] w-[50rem]">
            Reconnect is all about connecting the physical, mental, and
            subconscious worlds to attain the highest form of health and
            well-being.
          </p>
        </div>
        <div className="rounded-[1.5625rem] bg-[#C7CFE2] w-[90.625rem] h-[56rem] flex justify-center items-center">
          <svg
            className="w-20 h-20"
            viewBox="0 0 176 176"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="88" cy="88" r="88" fill="#0171E3" fillOpacity="0.3" />
            <circle cx="88" cy="88" r="80" fill="#0171E3" fillOpacity="0.8" />
            <path
              d="M111.898 81.118C113.137 81.7821 114.173 82.7734 114.896 83.9857C115.618 85.198 116 86.5857 116 88C116 89.4143 115.618 90.802 114.896 92.0143C114.173 93.2267 113.137 94.218 111.898 94.882L78.8558 112.996C73.5353 115.915 67 112.12 67 106.116V69.8864C67 63.8805 73.5353 60.0873 78.8558 63.0018L111.898 81.118Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* why section */}
      <div
        className="flex w-screen h- flex-col items-center gap-16"
        id="why-reconnect"
      >
        <div className="flex flex-col gap-8">
          <h1 className="text-[#1D1D1F] text-center font-inter text-[5rem] font-bold leading-[5.25rem] tracking-[-0.0625rem]">
            Why Reconnect?
          </h1>
          <p className="text-[#6E6E73] text-center font-inter text-[1.5rem] font-normal leading-[2.25rem] tracking-[-0.0625rem] w-[53.75rem]">
            In today’s fast-paced world, stress, distractions, and unhealthy
            habits have become a part of daily life. With increasing work
            pressures, poor lifestyle choices, and a lack of guidance, many
            people struggle to prioritize their physical, mental, and emotional
            well-being.
          </p>
        </div>
        <div className="h-[520px] w-[90.625rem] overflow-hidden flex flex-col justify-center items-center">
          <div
            className="w-full h-full flex justify-between items-center gap-32"
            key={currentWhy.label}
          >
            <div className="w-[48rem] h-fit overflow-hidden rounded-4xl">
              <video
                className="object-cover aspect-video w-full h-[30rem] rounded-4xl"
                autoPlay
                loop
                muted
                controls={false}
              >
                <source src={currentWhy.videoUrl} />
              </video>
            </div>
            <div className="flex flex-col items-start gap-4 w-[48rem]">
              <span className="text-[#0064E0] font-inter text-[1.375rem] font-bold leading-[1.1875rem] tracking-[0.0625rem]">
                {currentWhy.label}
              </span>
              <h1 className="text-[#1D1D1F] text-left font-inter text-[2.5rem] font-bold leading-[3.5rem]">
                {currentWhy.heading}
              </h1>
              {currentWhy.idx === 0 && (
                <h2
                  className="text-[#6E6E73] text-left font-inter text-[1.625rem] font-normal leading-[2.25rem]"
                  key="heading-1"
                >
                  {currentWhy.subHeading[0]}
                </h2>
              )}
              {currentWhy.idx === 1 && (
                <h2
                  className="text-[#6E6E73] text-left font-inter text-[1.625rem] font-normal leading-[2.25rem]"
                  key="heading-2"
                >
                  <b>{currentWhy.subHeading[0]}</b> {currentWhy.subHeading[1]}
                </h2>
              )}

              <ol className="list-disc">
                {currentWhy.points.length > 0 &&
                  currentWhy.points.map((point) => (
                    <li
                      className="ml-6 text-[#6E6E73] font-inter text-[1.625rem] font-normal leading-[2.625rem]"
                      key={point}
                    >
                      {point}
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="flex flex-col justify-center items-center gap-24 w-full" id="benefits">
        <div className="flex flex-col gap-8 justify-center items-center">
          <h1 className="text-[#1D1D1F] text-center font-inter text-[5rem] font-bold leading-[5.25rem] tracking-[-0.0625rem]">
            Who can benefit
          </h1>
          <p className="text-[#6E6E73] text-center font-inter text-[1.5rem] font-normal leading-[2.25rem] tracking-[-0.0625rem] w-[53.75rem]">
            Reconnect is designed for anyone looking to improve their overall well-being, whether physically, mentally, or emotionally. Our holistic approach helps individuals across different health conditions and lifestyle challenges.
          </p>
        </div>
        <div className="h-screen w-[90%] self-end flex justify-center items-center">
          <Carousel items={benefits} />
        </div>
      </div>
    </div>
  );
}
