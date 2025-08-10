"use client";

import Carousel from "@/components/carsoule";
import DropDownInfo from "@/components/dropdown-info";
import { MainHeading } from "@/components/heading";
import MedicalAssessment from "@/components/icons/MedicalAssessment";
import MentalFitness from "@/components/icons/MentalFitness";
import PhysicalFitness from "@/components/icons/PhysicalFitness";
import SubconsciousFitness from "@/components/icons/SubconsciousFitness";
import PortraitCarsoule from "@/components/portrait-carsoule";
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

  const info = [
    {
      id: "medical-assessment",
      label: "Medical Assessment",
      videoSrc: "/medical.mp4",
      icon: <MedicalAssessment />,
      points: [
        "Doctor  consultations",
        "Investigations review",
        "Personalised care plan",
      ],
    },
    {
      id: "physical-fitness",
      label: "Physical Fitness",
      videoSrc: "/medical.mp4",
      icon: <PhysicalFitness />,
      points: [
        "Doctor  consultations",
        "Investigations review",
        "Personalised care plan",
        "Investigations review",
        "Personalised care plan",
      ],
    },
    {
      id: "mental-fitness",
      label: "Mental Fitness",
      videoSrc: "/medical.mp4",
      icon: <MentalFitness />,
      points: [
        "Doctor  consultations",
        "Investigations review",
        "Personalised care plan",
        "Personalised care plan",
      ],
    },
    {
      id: "subconscious-fitness",
      label: "Subconscious Fitness",
      videoSrc: "/medical.mp4",
      icon: <SubconsciousFitness />,
      points: [
        "Doctor  consultations",
        "Investigations review",
        "Personalised care plan",
        "Personalised care plan",
      ],
    },
  ];

  const portraitCarsouleItems = [
    {
      id: 1,
      label: "Holistic Approach to Wellness",
      src: "/card-1.png",
      slug: "",
    },
    {
      id: 2,
      label: "Personalization is Key",
      src: "/card-2.png",
      slug: "",
    },
    {
      id: 3,
      label: "Expert Guidance Matters",
      src: "/card-3.png",
      slug: "",
    },
    {
      id: 4,
      label: "Community and Support Fuel Progress",
      src: "/card-4.png",
      slug: "",
    },
    {
      id: 5,
      label: "Purpose-Driven Health",
      src: "/card-2.png",
      slug: "",
    },
    {
      id: 6,
      label: "Sustainability Over Short-Term Fixes",
      src: "/card-3.png",
      slug: "",
    },
    {
      id: 7,
      label: "The Mind-Body Connection",
      src: "/card-4.png",
      slug: "",
    },
    {
      id: 8,
      label: "Consistency is the Foundation",
      src: "/card-3.png",
      slug: "",
    },
    {
      id: 9,
      label: "Celebrate Progress, Not Perfection",
      src: "/card-4.png",
      slug: "",
    },
  ];

  const [currentWhy, setCurrentWhy] = useState(whyReconnect[0]);

  return (
    <div
      className="flex flex-col justify-center items-center w-full h-fit gap-[4rem] md:gap-[6rem] lg:gap-[8rem]"
      id="home"
    >
      {/* Hero Section */}
      <div
        className="w-screen mx-auto relative h-screen"
        id="hero"
      >
        <video className="w-full h-full object-cover" autoPlay muted loop controls={false}>
          <source src="/video.mp4" />
        </video>
        <div
          className="absolute bottom-0 h-full w-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0.52%, rgba(0, 0, 0, 0.47) 77.72%, rgba(0, 0, 0, 0.60) 99.38%)",
          }}
        />
        <div className="absolute bottom-0 left-0 mx-auto justify-center items-center w-full h-80 sm:h-[25rem] md:h-[30rem] lg:h-[32.5rem]">
          <div className="container mx-auto flex flex-col justify-center items-center gap-8 sm:gap-10 md:gap-11 lg:gap-12">
            <div className="flex flex-col justify-center items-center *:text-center w-80 gap-4 sm:w-[30rem] sm:gap-6 md:w-[50rem] md:gap-8 lg:w-[64rem] lg:gap-8">
              <h1 className="leading-10 text-3xl font-semibold text-center text-white sm:leading-12 sm:text-5xl md:leading-16 md:text-6xl lg:leading-20 lg:text-[4.5rem]">
                Always wanted to get fit, never knew how
              </h1>
              <h2 className="text-white text-center font-normal text-shadow-[0_5px_5px_rgba(0,0,0,0.00)] font-inter text-base leading-6 w-72 sm:text-xl sm:leading-8 sm:w-96 md:text-[1.375rem] md:leading-9 md:w-[32rem] lg:text-2xl lg:leading-10 lg:w-[42rem]">
                Reconnect helps you achieve holistic health by balancing your
                physical, mental, and subconscious well-being.
              </h2>
            </div>
            <button className="rounded-full border-[1px] border-[#E2E2E2] bg-[#ECECEF] flex justify-center items-center gap-3 h-14 px-4 py-1 sm:h-16 sm:px-5 sm:py-1 md:h-[4.75rem] md:px-6 md:py-1.5 lg:h-20 lg:px-7 lg:py-1.5">
              <span className="text-black font-semibold font-inter text-lg sm:text-xl md:text-[1.75rem] lg:text-2xl">
                Start Your Journey
              </span>
              <svg
                width="35"
                height="34"
                viewBox="0 0 49 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12"
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
      <div className="relative w-screen h-screen overflow-hidden flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-7 lg:gap-8">
        <p className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-black">
          RECONNECT
        </p>
        <p className="text-[#1D1D1F] text-center text-lg sm:text-xl md:text-2xl lg:text-4xl font-normal tracking-[-1px] font-inter px-4">
          Path to a Happier Life with Better Health
        </p>
      </div>

      {/* Define Reconnect */}
      <div
        className="h-fit w-screen inline-flex flex-col justify-start items-center pt-[1rem] gap-[2rem] sm:pt-[1.5rem] sm:gap-[3rem] md:pt-[4rem] md:gap-[4rem] lg:pt-[8rem] lg:gap-[5rem]"
        id="defination"
      >
        <MainHeading
          heading="What is Reconnect"
          subHeading="Reconnect is all about connecting the physical, mental, subconscious worlds to attain the highest form of health and well-being."
        />
        <div className="rounded-[1.5625rem] bg-[#C7CFE2] flex justify-center items-center w-[20rem] h-[15rem] sm:w-[30rem] sm:h-[25rem] md:w-[42rem] md:h-[40rem] lg:w-[90.625rem] lg:h-[56rem]">
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
        className="flex flex-col items-center gap-[3rem] sm:gap-[4rem] md:gap-[5rem] lg:gap-[6rem]"
        id="why-reconnect"
      >
        <MainHeading
          heading="Why Reconnect?"
          subHeading="In today’s fast-paced world, stress, distractions, and unhealthy habits have become a part of daily life. With increasing work pressures,  lifestyle choices, and a lack of guidance, many people struggle to prioritize their physical, mental, and emotional well-being."
        />
        <div className="flex flex-col justify-center items-center container mx-auto">
          <div className="w-full h-full flex flex-col lg:flex-row justify-between items-center gap-[2rem] sm:gap-[4rem] md:gap-[6rem]">
            <div className="overflow-hidden rounded-[1rem] md:rounded-[1.5rem] lg:rounded-[2.5rem]">
              <video
                className="object-cover aspect-video w-[18rem] sm:w-[25rem] md:w-[35rem] lg:w-auto"
                autoPlay
                loop
                muted
                controls={false}
              >
                <source src={currentWhy.videoUrl} />
              </video>
            </div>
            <div className="flex flex-col items-start w-[18rem] gap-[1rem] sm:w-[25rem] sm:gap-[1.25rem] md:w-[35rem] md:gap-[1.5rem] lg:w-[48rem] lg:gap-[1rem]">
              <span className="text-[#0064E0] font-inter font-bold tracking-[0.0625rem] text-[1rem] leading-[1rem] sm:text-[1.125rem] sm:leading-[1.0625rem] md:text-[1.25rem] md:leading-[1.125rem] lg:text-[1.375rem] lg:leading-[1.1875rem]">
                {currentWhy.label}
              </span>
              <h1 className="text-[#1D1D1F] text-left font-inter font-bold text-[1.5rem] leading-[2rem] sm:text-[1.875rem] sm:leading-[2.5rem] md:text-[2.125rem] md:leading-[3rem] lg:text-[2.5rem] lg:leading-[3.5rem]">
                {currentWhy.heading}
              </h1>
              {currentWhy.idx === 0 && (
                <h2
                  className="text-[#6E6E73] text-left font-inter font-normal text-[1rem] leading-[1.5rem] sm:text-[1.25rem] sm:leading-[1.75rem] md:text-[1.4375rem] md:leading-[2rem] lg:text-[1.625rem] lg:leading-[2.25rem]"
                  key="heading-1"
                >
                  {currentWhy.subHeading[0]}
                </h2>
              )}
              {currentWhy.idx === 1 && (
                <h2
                  className="text-[#6E6E73] text-left font-inter font-normal text-[1rem] leading-[1.5rem] sm:text-[1.25rem] sm:leading-[1.75rem] md:text-[1.4375rem] md:leading-[2rem] lg:text-[1.625rem] lg:leading-[2.25rem]"
                  key="heading-2"
                >
                  <b>{currentWhy.subHeading[0]}</b> {currentWhy.subHeading[1]}
                </h2>
              )}

              <ol className="list-disc">
                {currentWhy.points.length > 0 &&
                  currentWhy.points.map((point) => (
                    <li
                      className="text-[#6E6E73] font-inter font-normal ml-[1rem] text-[1rem] leading-[1.5rem] sm:ml-[1.25rem] sm:text-[1.25rem] sm:leading-[2rem] md:ml-[1.375rem] md:text-[1.4375rem] md:leading-[2.3125rem] lg:ml-[1.5rem] lg:text-[1.625rem] lg:leading-[2.625rem]"
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
      <div
        className="flex flex-col justify-center items-center w-full gap-[3rem] sm:gap-[4rem] md:gap-[5rem] lg:gap-[6rem]"
        id="benefits"
      >
        <MainHeading
          heading="Who can benefit"
          subHeading="Reconnect is designed for anyone looking to improve their overall
            well-being, whether physically, mentally, or emotionally. Our
            holistic approach helps individuals across different health
            conditions and lifestyle challenges."
        />
        <div className="h-fit self-end flex justify-center items-center w-full sm:w-[92%] md:w-[91%] lg:w-[90%] container mx-auto px-10 lg:px-0">
          <Carousel items={benefits} />
        </div>
      </div>

      {/* Workings */}
      <div className="flex flex-col justify-center items-center w-full gap-[3rem] sm:gap-[4rem] md:gap-[5rem] lg:gap-[6rem]">
        <MainHeading
          heading="How Reconnect works"
          subHeading="Reconnect takes a holistic, doctor-led approach to health by integrating medical science, physical well-being, and mental wellness into one seamless journey."
        />
        <div className="h-fit self-end flex justify-center items-center w-full sm:w-[92%] md:w-[91%] lg:w-[90%] container mx-auto px-10 lg:px-0">
          <DropDownInfo info={info} />
        </div>
      </div>

      {/* 9 Pillars of Reconnect */}
      <div className="flex flex-col justify-center items-center w-full gap-[3rem] sm:gap-[4rem] md:gap-[5rem] lg:gap-[6rem]">
        <MainHeading
          heading="9 Pillars of Reconnect"
          subHeading="A balanced, personalized, and sustainable approach to health-integrating mind, body, and community for lifelong well-being."
        />
        <div className="h-fit self-end flex justify-center items-center w-full sm:w-[92%] md:w-[91%] lg:w-[90%] container mx-auto px-10 lg:px-0">
          <PortraitCarsoule items={portraitCarsouleItems} />
        </div>
      </div>
    </div>
  );
}
