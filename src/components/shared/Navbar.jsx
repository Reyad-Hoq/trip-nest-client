'use client';

import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { Ticket } from '@gravity-ui/icons';
// import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import { motion } from "motion/react"
import { BsHouseFill, BsTrainFreightFront } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";

const MotionButton = motion(Button)
const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { data: session, isPending } = useSession()

  // const user = session?.user;
  // const handleSignOut = async () => {
  //   await signOut();
  // }
  const user = {
    name: 'Reyad',
  }
  const links = (
    <>
      <motion.li
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1 }
        }}
        transition={{ duration: 0.5 }}>
        <Link href="/" className="whitespace-nowrap text-[#1A1D7E]">
          <BsHouseFill color="FFD230" />
          Home
        </Link>
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1 }
        }}
        transition={{ duration: 0.5 }}>
        <Link href="/tickets" className="whitespace-nowrap text-[#1A1D7E]">
          <Ticket size={40} className="text-[#FFD230]" />
          All Tickets
        </Link>
      </motion.li>
      <motion.li
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1 }
        }}
        transition={{ duration: 0.5 }}>
        <Link href="/dashboard" className="whitespace-nowrap text-[#1A1D7E]">
          <MdSpaceDashboard color="FFD230"/>
          Dashboard
        </Link>
      </motion.li>
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="flex items-center gap-3">
            {/* <Logo /> */}
            <Link href="/">
              <div className="bg-primary text-[#1A1D7E] p-2 rounded-xl">
                <BsTrainFreightFront size={48} />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold tracking-tight bg-linear-to-r from-[#1A1D7E] via-[#0D2284] to-[#183F98] bg-clip-text text-transparent">
                  TripNest
                </h2>
                <p className="text-[11px] text-default-500">
                  Book Smarter. Travel Better.
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <ul className="hidden items-center gap-4 border-r-2 border-amber-300 pr-4 md:flex">
            {links}
          </ul>
          {
            user ? <>
              Hi, {user?.name}!
              <MotionButton
                variant="ghost"
                whileHover={{
                  backgroundColor: "#ef4444", // red-500
                  color: "#fff",
                  scale: 1.05
                }}
                transition={{ duration: 0.2 }}
              >
                Sign Out
              </MotionButton>
            </> : <>
              <Link href="/auth/signin" className="block py-2">
                Signin
              </Link>
              <Button className="w-full">Get Started</Button>
            </>
          }
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {links}
            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              {
                user ? <>
                  Hi, {user?.name}!
                  <Button variant="ghost">Sign Out</Button>
                </> : <>
                  <Link href="/auth/signin" className="block py-2">
                    Signin
                  </Link>
                  <Button className="w-full">Get Started</Button>
                </>
              }

            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;