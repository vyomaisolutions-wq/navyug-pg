"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed");
      }

      if (data.token) {
        try {
          localStorage.setItem("admin_token", data.token);
          document.cookie = `token=${data.token}; path=/; max-age=604800; SameSite=Lax`;
        } catch (e) {}
      }

      setSuccess("Login successful! Redirecting...");
      setTimeout(() => {
        router.push("/admin/dashboard");
      }, 500);
    } catch (err: any) {
      setError(err.message || "Invalid credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#08089E] flex flex-col justify-center items-center p-6 relative overflow-hidden select-none">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1111E8]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFF200]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Brand Header */}
      <div className="mb-8 text-center relative z-10 flex flex-col items-center">
        <Link href="/" className="flex items-center gap-3 text-white mb-2">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center p-1 shadow-lg shadow-white/5">
            <span className="text-[#08089E] font-black text-xl">N</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-sm sm:text-base uppercase tracking-wider leading-none text-white">
              Navyug P.G. College
            </span>
            <span className="text-[#FFF200] font-bold text-[10px] sm:text-xs uppercase tracking-widest leading-none mt-0.5">
              Admin Portal
            </span>
          </div>
        </Link>
      </div>

      {/* Card container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl relative z-10"
      >
        <h2 className="text-2xl font-black text-white mb-2 tracking-tight">Welcome Back</h2>
        <p className="text-[#F3F6FF] text-xs sm:text-sm mb-6 opacity-90">
          Access the school management panel and system configurations.
        </p>

        {error && (
          <div className="mb-5 p-3 rounded-xl bg-[#F20D0D]/20 border border-[#F20D0D]/40 text-white text-xs sm:text-sm font-semibold">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-5 p-3 rounded-xl bg-[#FFF200]/20 border border-[#FFF200]/40 text-[#FFF200] text-xs sm:text-sm font-semibold">
            {success}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="text-white text-xs font-bold uppercase tracking-wider block mb-2">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nym.jnp@gmail.com"
                className="w-full bg-white/10 border border-white/20 text-white rounded-xl py-3 px-4 pl-11 text-sm focus:outline-none focus:border-[#FFF200] focus:ring-1 focus:ring-[#FFF200] transition-all duration-300 placeholder:text-white/40"
                required
              />
              <FaEnvelope className="absolute left-4 top-3.5 text-white/50 w-4 h-4" />
            </div>
          </div>

          <div>
            <label className="text-white text-xs font-bold uppercase tracking-wider block mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/10 border border-white/20 text-white rounded-xl py-3 px-4 pl-11 text-sm focus:outline-none focus:border-[#FFF200] focus:ring-1 focus:ring-[#FFF200] transition-all duration-300 placeholder:text-white/40"
                required
              />
              <FaLock className="absolute left-4 top-3.5 text-white/50 w-4 h-4" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#F20D0D] hover:bg-[#F20D0D]/90 text-white rounded-xl py-3 font-bold text-sm tracking-wide shadow-md transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 mt-2 disabled:opacity-50 border-none"
          >
            {loading ? (
              <span>Authenticating...</span>
            ) : (
              <>
                <span>Sign In to Dashboard</span>
                <FaSignInAlt className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 pt-4 border-t border-white/10 text-center text-xs text-[#F3F6FF] flex flex-col gap-1.5 opacity-90">
          <span className="font-bold text-[#FFF200]">Default Admin Credentials:</span>
          <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/20 font-mono text-white text-[11px] inline-block mx-auto">
            Email: nym.jnp@gmail.com | Password: admin123
          </span>
        </div>
      </motion.div>
    </div>
  );
}
