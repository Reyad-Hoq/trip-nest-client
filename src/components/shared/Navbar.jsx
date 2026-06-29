'use client';

import { useEffect, useState } from "react";
import { Link, Button } from "@heroui/react";
import { Ticket } from '@gravity-ui/icons';
import { signOut, useSession } from "@/lib/auth-client";
import { motion } from "motion/react"
import { BsHouseFill, BsTrainFreightFront } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ProfileDropdown } from "./ProfileDropdown";

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  const pathName = usePathname();
  const isHome = pathName === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, isPending } = useSession()

  const user = session?.user;
  const handleSignOut = async () => {
    await signOut();
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
          <Ticket className="text-[#FFD230] w-4 h-4" />
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
          <MdSpaceDashboard color="FFD230" />
          Dashboard
        </Link>
      </motion.li>
    </>
  );

  return (
    <nav className={`left-0 right-0 z-50 transition-all duration-500 ${isHome
      ? `fixed top-0 ${scrolled
        ? "bg-white shadow-lg backdrop-blur-md"
        : "bg-transparent"
      }`
      : "sticky top-0 bg-white shadow-lg"
      }`}>
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
            <Link href="/" className="no-underline">
              <div className="bg-primary text-[#1A1D7E] p-2 rounded-xl">
                <BsTrainFreightFront size={45} />
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
              <div className="flex items-center gap-1">
                {<Image src={user?.image} width={42} height={42} alt="avatar" className="rounded-full" /> || <Image src="/boy.png" width={48} height={48} alt="avatar" />}
                <ProfileDropdown />
              </div>
            </> : <>
              <Link href="/auth/signin" className="block py-2 text-white bg-[#1A1D7E] px-3 whitespace-nowrap text-sm rounded-full no-underline">
                Sign In
              </Link>
              <Link href="/auth/signup" className="w-full border-2 px-2 py-1 rounded-full border-[#1A1D7E] bg-transparent text-[#1A1D7E] no-underline">Get started</Link>
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
                  <Button onClick={handleSignOut} variant="ghost" className="bg-red-500 text-white">Sign Out</Button>
                </> : <>
                  <Link href="/auth/signin" className="block py-2 w-full">
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