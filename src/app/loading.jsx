"use client";

import { motion } from "motion/react";
import { BsTrainFreightFrontFill } from "react-icons/bs";
export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-50 via-white to-blue-100">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Icon */}
        <motion.div
          animate={{
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="rounded-full bg-primary p-6 text-white shadow-2xl"
        >
          <BsTrainFreightFrontFill size={50} />
        </motion.div>

        {/* Loading Text */}
        <div className="text-center">
          <motion.h2
            className="text-2xl font-bold text-[#1A1D7E]"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
            }}
          >
            Loading TripNest...
          </motion.h2>

          <p className="mt-2 text-default-500">
            Preparing your next journey ✈️
          </p>
        </div>

        {/* Progress Bar */}
        <div className="h-2 w-72 overflow-hidden rounded-full bg-default-200">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[#1A1D7E] via-[#0D2284] to-[#183F98]"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </main>
  );
}