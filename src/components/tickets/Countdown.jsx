"use client";

import { useEffect, useState } from "react";

export default function Countdown({ departure }) {
  const calculateTimeLeft = () => {
    const difference = new Date(departure) - new Date();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="rounded-2xl bg-red-500/70 p-6 text-center">
        <h2 className="text-2xl font-bold text-white">
          Departure Closed
        </h2>
        <p className="mt-2 text-white/80">
          This ticket is no longer available for booking.
        </p>
      </div>
    );
  }

  const items = [
    {
      label: "Days",
      value: timeLeft.days,
    },
    {
      label: "Hours",
      value: timeLeft.hours,
    },
    {
      label: "Minutes",
      value: timeLeft.minutes,
    },
    {
      label: "Seconds",
      value: timeLeft.seconds,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur"
        >
          <h3 className="text-4xl font-extrabold">
            {String(item.value).padStart(2, "0")}
          </h3>

          <p className="mt-2 text-sm uppercase tracking-wider text-white/80">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}