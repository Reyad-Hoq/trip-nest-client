"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { FaArrowLeft } from "react-icons/fa6";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-100">
      {/* Background Blobs */}
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-200/20 blur-3xl" />

      <div className="w-9/12 mx-auto grid items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="rounded-full bg-blue-200 px-4 py-1 text-sm font-semibold text-blue-950">
            Error 404
          </span>

          <h1 className="mt-6 text-7xl font-black text-[#1A1D7E]">
            Oops!
          </h1>

          <h2 className="mt-2 text-4xl font-bold text-slate-800">
            Page Not Found
          </h2>

          <p className="mt-6 max-w-md text-lg leading-8 text-slate-600">
            The page your&#39;e looking for doesn&#39;t exist or may have been moved.
            Let&#39;s get you back to booking your next journey.
          </p>

          <div className="mt-10 flex gap-2 items-center">
            <FaArrowLeft className="text-blue-950" />
            <Link
              href="/"
              className="bg-blue-900 p-2 rounded-xl text-white font-semibold"
            >
              Go Home
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}