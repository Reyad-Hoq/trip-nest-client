"use client";

import Link from "next/link";
import { Button, Separator } from "@heroui/react";

import {
  FaFacebookF,
  FaStripe,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa6";

import {
  BsTrainFreightFront,
} from "react-icons/bs";

import {
  MdEmail,
  MdPhone,
  MdLocationOn,
} from "react-icons/md";

import {
  HiArrowRight,
} from "react-icons/hi2";

const quickLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "All Tickets",
    href: "/tickets",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#1A1D7E] text-white">

      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo */}

          <div>

            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <BsTrainFreightFront
                size={45}
              />

              <div>

                <h2 className="text-xl font-extrabold tracking-tight text-white">
                  TripNest
                </h2>

                <p className="text-[12px]
                text-slate-400">
                  Book Smarter. Travel Better.
                </p>

              </div>

            </Link>

            <p className="mt-6 leading-7 text-slate-300">
              Book bus, train, launch &
              flight tickets easily with
              secure online payment and
              instant booking confirmation.
            </p>

            <div className="mt-8 flex gap-3">

              <Button
                isIconOnly
                radius="full"
                variant="flat"
                className="bg-white/10 text-white hover:bg-sky-500"
              >
                <FaFacebookF />
              </Button>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Quick Links
            </h3>

            <div className="space-y-4">

              {quickLinks.map((item) => (

                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex items-center justify-between rounded-lg border border-transparent px-2 py-2 transition hover:border-white/10 hover:bg-white/5"
                >

                  <span className="text-slate-300 group-hover:text-white">
                    {item.title}
                  </span>

                  <HiArrowRight className="text-slate-400 group-hover:translate-x-1 transition" />

                </Link>

              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Contact Info
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">

                  <MdEmail
                    size={22}
                    className="text-sky-400"
                  />

                </div>

                <div>

                  <p className="font-medium">
                    Email
                  </p>

                  <p className="text-slate-300">
                    support@tripnest.com
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">

                  <MdPhone
                    size={22}
                    className="text-sky-400"
                  />

                </div>

                <div>

                  <p className="font-medium">
                    Phone
                  </p>

                  <p className="text-slate-300">
                    +880 1700-000000
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">

                  <MdLocationOn
                    size={22}
                    className="text-sky-400"
                  />

                </div>

                <div>

                  <p className="font-medium">
                    Facebook
                  </p>

                  <p className="text-slate-300">
                    facebook.com/tripnest
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Payment */}

          <div>

            <h3 className="mb-6 text-xl font-semibold">
              Payment Methods
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-xl bg-white p-5 flex justify-center items-center shadow">

                <FaStripe
                  size={42}
                  className="text-indigo-600"
                />

              </div>

              <div className="rounded-xl bg-white p-5 flex justify-center items-center shadow">

                <FaCcVisa
                  size={42}
                  className="text-blue-700"
                />

              </div>

              <div className="rounded-xl bg-white p-5 flex justify-center items-center shadow">

                <FaCcMastercard
                  size={42}
                  className="text-red-500"
                />

              </div>

              <div className="rounded-xl bg-white p-5 flex justify-center items-center shadow">

                <span className="font-bold text-pink-600">
                  bKash
                </span>

              </div>

            </div>

          </div>

        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <p className="text-sm text-slate-400">
            © 2025 TripNest. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-400">

            <Link
              href="/privacy-policy"
              className="hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-white"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}