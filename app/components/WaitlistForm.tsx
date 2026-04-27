"use client";

import { useMemo, useState } from "react";
import { countries } from "@/lib/countries";

const emirates = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Ras Al Khaimah",
  "Fujairah",
  "Umm Al Quwain",
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [emirate, setEmirate] = useState("");
  const [reason, setReason] = useState("");
  const [subscribe, setSubscribe] = useState(true);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const isValid = useMemo(() => {
    return (
      name.trim().length > 0 &&
      emailRegex.test(email) &&
      country.trim().length > 0 &&
      emirate.trim().length > 0 &&
      subscribe
    );
  }, [name, email, country, emirate, subscribe]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValid) {
      setStatus("error");
      setMessage("Please complete all required fields before submitting.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, country, emirate, reason, subscribe }),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Submission failed");
      }

      setStatus("success");
      setMessage("You’re on the list 🚀");
      setName("");
      setEmail("");
      setCountry("");
      setEmirate("");
      setReason("");
      setSubscribe(true);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Submission failed. Please try again.");
    }
  };

  return (
    <form
      id="early-access"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="space-y-3">
        <h2 className="text-[24px] font-semibold tracking-[-0.01em] text-[#071c31] md:text-[26px]">
          Join the waitlist
        </h2>
        <p className="text-[16px] leading-relaxed text-[#53647d] md:text-[18px]">
          Share your relocation plan and we’ll keep you first in line.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[#071c31]">Name</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className="w-full rounded-xl border border-[#dbe2ea] bg-[#f6f8fb] px-4 py-3 text-[16px] text-[#071c31] outline-none transition focus:border-[#071c31] focus:bg-white"
            placeholder="Enter your full name"
          />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[#071c31]">Email Address</span>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            required
            className="w-full rounded-xl border border-[#dbe2ea] bg-[#f6f8fb] px-4 py-3 text-[16px] text-[#071c31] outline-none transition focus:border-[#071c31] focus:bg-white"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[#071c31]">Current Country</span>
          <select
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            required
            className="w-full rounded-xl border border-[#dbe2ea] bg-[#f6f8fb] px-4 py-3 text-[16px] text-[#071c31] outline-none transition focus:border-[#071c31] focus:bg-white"
          >
            <option value="">Select your country</option>
            {countries.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="space-y-2">
          <span className="text-sm font-semibold text-[#071c31]">Planning to Move To</span>
          <select
            value={emirate}
            onChange={(event) => setEmirate(event.target.value)}
            required
            className="w-full rounded-xl border border-[#dbe2ea] bg-[#f6f8fb] px-4 py-3 text-[16px] text-[#071c31] outline-none transition focus:border-[#071c31] focus:bg-white"
          >
            <option value="">Select an emirate</option>
            {emirates.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="space-y-2">
        <span className="text-sm font-semibold text-[#071c31]">Reason to Move</span>
        <textarea
          value={reason}
          onChange={(event) => setReason(event.target.value)}
          rows={3}
          className="w-full rounded-xl border border-[#dbe2ea] bg-[#f6f8fb] px-4 py-3 text-[16px] text-[#071c31] outline-none transition focus:border-[#071c31] focus:bg-white"
          placeholder="Tell us a bit about your plans or goals."
        />
      </label>

      <label className="inline-flex items-center gap-3 rounded-xl border border-[#dbe2ea] bg-[#f6f8fb] px-4 py-3 text-sm text-[#071c31] transition focus-within:border-[#071c31] focus-within:bg-white">
        <input
          type="checkbox"
          checked={subscribe}
          onChange={(event) => setSubscribe(event.target.checked)}
          className="h-5 w-5 rounded-md border border-[#dbe2ea] text-[#071c31] focus:ring-[#071c31]"
        />
        <span>Subscribe for Early Access</span>
      </label>

      {status !== "idle" && (
        <div
          className={`rounded-2xl px-4 py-3 text-sm ${
            status === "success"
              ? "bg-emerald-50 text-emerald-700"
              : "bg-rose-50 text-rose-700"
          }`}
        >
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center rounded-xl bg-[#071c31] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#0b2548] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : "Join Waitlist"}
      </button>
    </form>
  );
}
