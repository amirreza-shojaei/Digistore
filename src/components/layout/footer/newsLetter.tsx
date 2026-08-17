"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <h3 className="mb-3 text-xl font-bold text-gray-800">عضویت در خبرنامه</h3>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ایمیل شما"
          required
          className="flex-1 rounded-lg border border-gray-200 bg-gray-100 px-3 py-2 text-base outline-none focus:border-red-400"
        />
        <button
          type="submit"
          className="rounded-lg bg-gray-200 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600"
        >
          ثبت
        </button>
      </form>
    </div>
  );
}