"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsGoogle, BsTrainFreightFront } from "react-icons/bs";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  Radio,
  RadioGroup,
  TextField,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";
import { FaCircleCheck, FaCircleExclamation } from "react-icons/fa6";

const RegisterPage = () => {
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

    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
    });
    console.log(user);
    setLoading(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    if (data) {
      setSuccessMessage("Account created successfully. Redirecting...");

      setTimeout(() => {
        router.push("/");
      }, 1500);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-12">
      {/* Background Blur */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

      {/* Card */}

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/95 p-6 shadow-[0_30px_80px_rgba(0,0,0,.35)] backdrop-blur-xl">

        {/* Logo */}

        <div className="text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#1A1D7E] via-[#0D2284] to-[#183F98] text-2xl font-bold text-white shadow-lg">
            <BsTrainFreightFront size={42} />
          </div>

          <h1 className="mt-5 text-3xl font-bold text-[#1A1D7E]">
            Create Account
          </h1>

          <p className="mt-2 text-slate-500">
            Join TripNest and start your next journey.
          </p>

          <p className="mt-1 text-sm text-slate-400">
            Book Bus • Train • Flight • Launch Tickets
          </p>

        </div>

        {/* Form */}

        <Form
          onSubmit={onSubmit}
          className="mt-3 space-y-3"
        >
          {errorMessage && (
            <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-600">
              <FaCircleExclamation className="text-lg" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
              <FaCircleCheck className="text-lg" />
              <span>{successMessage}</span>
            </div>
          )}
          <TextField
            isRequired
            name="name"
          >

            <Label className="mb-2 text-sm font-medium text-slate-700">
              Full Name
            </Label>

            <Input
              placeholder="Enter your full name"
              classNames={{
                inputWrapper:
                  "rounded-xl border border-slate-200 shadow-none data-[focus=true]:border-[#183F98] data-[focus=true]:ring-2 data-[focus=true]:ring-[#183F98]/20",
              }}
            />

            <FieldError />

          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
          >

            <Label className="mb-2 text-sm font-medium text-slate-700">
              Email Address
            </Label>

            <Input
              placeholder="Enter your email"
              classNames={{
                inputWrapper:
                  "rounded-xl border border-slate-200 shadow-none data-[focus=true]:border-[#183F98] data-[focus=true]:ring-2 data-[focus=true]:ring-[#183F98]/20",
              }}
            />

            <FieldError />

          </TextField>

          <TextField
            isRequired
            name="password"
            type="password"
            minLength={8}
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters.";
              }

              return null;
            }}
          >

            <Label className="mb-2 text-sm font-medium text-slate-700">
              Password
            </Label>

            <Input
              placeholder="Create a secure password"
              classNames={{
                inputWrapper:
                  "rounded-xl border border-slate-200 shadow-none data-[focus=true]:border-[#183F98] data-[focus=true]:ring-2 data-[focus=true]:ring-[#183F98]/20",
              }}
            />

            <FieldError />

          </TextField>
          <div className="flex flex-col gap-4">
            <Label className="mb-2 text-sm font-medium text-slate-700">What are you?</Label>
            <RadioGroup
              defaultValue="user"
              orientation='horizontal' name="role">
              <Radio value="user">
                <Radio.Content>
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  Passenger                </Radio.Content>
              </Radio>
              <Radio value="vendor">
                <Radio.Content>
                  <Radio.Control>
                    <Radio.Indicator />
                  </Radio.Control>
                  Vendor
                </Radio.Content>
              </Radio>
            </RadioGroup>
          </div>
          <Button
            type="submit"
            isLoading={loading}
            className="mt-3 w-full rounded-xl bg-gradient-to-r from-[#1A1D7E] via-[#0D2284] to-[#183F98] py-6 text-base font-semibold text-white transition duration-300 hover:scale-[1.02]"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </Button>

        </Form>

        {/* Divider */}

        <div className="my-7 flex items-center gap-3">

          <div className="h-px flex-1 bg-slate-200" />

          <span className="text-sm text-slate-400">
            OR
          </span>

          <div className="h-px flex-1 bg-slate-200" />

        </div>

        {/* Google */}

        <button
          onClick={handleGoogleSignIn}
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white py-3 font-medium text-slate-700 transition hover:border-[#183F98] hover:bg-slate-50"
        >
          <BsGoogle className="text-lg text-red-500" />

          Continue with Google

        </button>

        {/* Footer */}

        <p className="mt-7 text-center text-sm text-slate-600">

          Already have an account?{" "}

          <Link
            href="/login"
            className="font-semibold text-[#183F98] hover:underline"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
};

export default RegisterPage;