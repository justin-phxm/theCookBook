"use client";
import { useAuth } from "@/app/context/AuthContext";
import React, { useState } from "react";

export default function Login() {
  const { signup, login, logout, googleLogin, authChangeState, currentUser } =
    useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const submitHandler = async () => {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }
    if (isLoggingIn) {
      try {
        await login(email, password);
        authChangeState();
      } catch (e) {
        console.error(e);
        setError("Incorrect email or password");
      }
      return;
    }
    try {
      signup(email, password);
      authChangeState();
    } catch (err) {
      console.error(err);
      setError("Please check your email for verification");
    }
  };
  const googleLoginHandler = async () => {
    try {
      googleLogin();
      authChangeState();
    } catch (err) {
      console.error(err);
    }
  };

  const logoutHandler = async () => {
    try {
      await logout();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2 text-xs sm:gap-4 sm:text-sm">
      <h1 className="select-none text-2xl font-extrabold uppercase sm:text-4xl">
        {isLoggingIn ? "Login" : "register"}
      </h1>
      <h1 className="select-none text-2xl font-extrabold uppercase sm:text-4xl">
        {currentUser ? `${currentUser.email}` : ""}
      </h1>
      <button
        className="select-none text-2xl font-extrabold uppercase sm:text-4xl"
        onClick={logoutHandler}
      >
        {currentUser ? `LOGOUT` : ""}
      </button>
      {error && (
        <div className="w-full max-w-[40ch] border border-solid border-rose-400 py-2 text-center text-rose-400">
          {error}
        </div>
      )}
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        className="w-full max-w-[40ch] border-b-2 border-solid border-gray-400 p-2 text-slate-900 outline-none duration-300 focus:border-[#A7E4AF]"
      />

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="w-full max-w-[40ch] border-b-2 border-solid border-gray-400 p-2 text-slate-900 outline-none duration-300 focus:border-[#A7E4AF]"
      />

      <button
        onClick={submitHandler}
        className="relative w-full max-w-[40ch] overflow-hidden border border-solid border-[#A7E4AF] py-2 uppercase duration-300 after:absolute after:right-full after:top-0 after:z-10 after:h-full after:w-full after:bg-[#A7E4AF] after:duration-300 hover:text-slate-900 hover:after:translate-x-full"
      >
        <h2 className="relative z-20">SUBMIT</h2>
      </button>
      <button onClick={googleLoginHandler}>
        <div className="relative w-full max-w-[40ch] overflow-hidden border border-solid border-[#A7E4AF] py-2 uppercase duration-300 after:absolute after:right-full after:top-0 after:z-10 after:h-full after:w-full after:bg-[#A7E4AF] after:duration-300 hover:text-slate-900 hover:after:translate-x-full">
          Sign In With Google 🔥
        </div>
      </button>
      <h2
        className="cursor-pointer select-none duration-300 hover:scale-110"
        onClick={() => setIsLoggingIn(!isLoggingIn)}
      >
        {!isLoggingIn ? "Login" : "Register"}
      </h2>
      <a href="#" className="font-semibold text-lime-500 hover:text-lime-400">
        Forgot password?
      </a>
    </div>
  );
}
