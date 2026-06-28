"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa6";
import SearchBox from "./SearchBox";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
const slides = [
  {
    id: 1,
    image: "/hero.jpg",
    title: "Discover Your",
    highlight: "Next Journey",
    description:
      "Compare prices, choose your transport and book tickets instantly.",
  },
  {
    id: 2,
    image: "/hero-2.jpg",
    title: "Travel Across",
    highlight: "Bangladesh",
    description:
      "Bus, Train, Launch & Flight booking in one place.",
  },
  {
    id: 3,
    image: "/hero-3.jpg",
    title: "Book Tickets",
    highlight: "In Seconds",
    description:
      "Safe payment, instant confirmation and best prices.",
  },
];
export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);
  return (
    <section className="mb-24 relative">

      {/* Background */}

      <div className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">

        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].image}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.08 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].image}
              alt="Banner"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay */}

        <div className="absolute inset-0 bg-linear-to-r from-[#09B1EC/60
] via-[#37C6FF]/30 to-transparent" />

        {/* Content */}

        <div className="absolute inset-0 flex items-center">

          <div className="mx-auto max-w-4xl w-full px-6">

            <div className="max-w-3xl">

              <h1 className="mt-8 text-6xl font-extrabold leading-tight text-white">

                Discover Your

                <span className="block tracking-normal bg-linear-to-r from-[#07fae6] via-[#245bd3] to-white bg-clip-text text-transparent">
                  Next Journey
                </span>

              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">

                Compare prices, choose your transport,
                and book tickets in minutes with secure
                online payment.

              </p>

              <div className="mt-10">

                <Button
                  size="lg"
                  color="primary"
                  radius="full"
                  endContent={<FaArrowRight />}
                >
                  Explore Tickets
                </Button>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Floating Search */}

      <div className="relative z-20 -mt-20 px-6">

        <div className="mx-auto max-w-4xl">

          <SearchBox />

        </div>

      </div>

    </section>
  );
}