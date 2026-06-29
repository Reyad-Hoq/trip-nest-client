"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { BsGoogle, BsTrainFreightFront } from "react-icons/bs";
import {
  FaCircleCheck,
  FaCircleExclamation,
} from "react-icons/fa6";

import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    setLoading(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    if (data) {
      setSuccessMessage("Login successful. Redirecting...");

      setTimeout(() => {
        router.refresh();
        router.replace("/");
      }, 1200);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12">

      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/95 p-6 shadow-[0_30px_80px_rgba(0,0,0,.35)] backdrop-blur-xl">

        {/* Logo */}

        <div className="text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#1A1D7E] via-[#0D2284] to-[#183F98] text-white shadow-lg">
            <BsTrainFreightFront size={42} />
          </div>

          <h1 className="mt-5 text-3xl font-bold text-[#1A1D7E]">
            Welcome Back
          </h1>

          <p className="mt-2 text-slate-500">
            Sign in to continue your journey.
          </p>

          <p className="mt-1 text-sm text-slate-400">
            Book Bus • Train • Flight • Launch Tickets
          </p>

        </div>

        <Form
          onSubmit={onSubmit}
          className="mt-5 space-y-4"
        >

          {errorMessage && (
            <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-600">
              <FaCircleExclamation />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
              <FaCircleCheck />
              <span>{successMessage}</span>
            </div>
          )}

          <TextField
            isRequired
            name="email"
            type="email"
          >
            <Label>Email Address</Label>

            <Input
              placeholder="Enter your email"

            />

            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="password"
            type="password"
          >
            <Label>Password</Label>

            <Input
              placeholder="Enter your password"

            />

            <FieldError />
          </TextField>

          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-[#183F98] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <Button
            type="submit"
            isLoading={loading}
            className="w-full rounded-xl bg-gradient-to-r from-[#1A1D7E] via-[#0D2284] to-[#183F98] py-6 text-base font-semibold text-white"
          >
            {loading ? "Signing In..." : "Sign In"}
          </Button>

        </Form>

        <div className="my-7 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-sm text-slate-400">OR</span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white py-3 font-medium text-slate-700 transition hover:border-[#183F98] hover:bg-slate-50"
        >
          <BsGoogle className="text-lg text-red-500" />
          Continue with Google
        </button>

        <p className="mt-7 text-center text-sm text-slate-600">
          Don&#39;t have an account?{" "}
          <Link
            href="/auth/signup"
            className="font-semibold text-[#183F98] hover:underline"
          >
            Create Account
          </Link>
        </p>

      </div>

    </div>
  );
};

export default LoginPage;