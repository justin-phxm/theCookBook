import { useAuth } from "@/context/AuthContext";
import React, { useState, useEffect } from "react";

export default function Login() {
  const { signup, login, logout, googleLogin, authChangeState, currentUser } =
    useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  const submitHandler = async () => {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }
    if (isLoggingIn) {
      try {
        await login(email, password);
        authChangeState();
      } catch (err) {
        console.log(err);
        setError("Incorrect email or password");
      }
      return;
    }
    try {
      await signup(email, password);
      authChangeState();
    } catch (err) {
      console.log(err);
      setError("Please check your email for verification");
    }
  };
  const googleLoginHandler = async () => {
    try {
      await googleLogin();
      authChangeState();
    } catch (err) {
      console.log(err);
    }
  };

  const logoutHandler = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4">
      <h1 className="font-extrabold select-none text-2xl sm:text-4xl uppercase">
        {isLoggingIn ? "Login" : "register"}
      </h1>
      <h1 className="font-extrabold select-none text-2xl sm:text-4xl uppercase">
        {currentUser ? `${currentUser.email}` : ""}
      </h1>
      <button
        className="font-extrabold select-none text-2xl sm:text-4xl uppercase"
        onClick={logoutHandler}
      >
        {currentUser ? `LOGOUT` : ""}
      </button>
      {error && (
        <div className="w-full max-w-[40ch] border-rose-400 border text-center border-solid text-rose-400 py-2">
          {error}
        </div>
      )}
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        className="outline-none duration-300 border-b-2 border-solid border-gray-400 focus:border-[#A7E4AF] text-slate-900 p-2 w-full max-w-[40ch]"
      />

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-300 border-gray-400 border-b-2 border-solid focus:border-[#A7E4AF]"
      />

      <button
        onClick={submitHandler}
        className="w-full max-w-[40ch] border border-[#A7E4AF] border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-[#A7E4AF] after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900"
      >
        <h2 className="relative z-20">SUBMIT</h2>
      </button>
      <button onClick={googleLoginHandler}>
        <div className="w-full max-w-[40ch] border border-[#A7E4AF] border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-[#A7E4AF] after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900">
          Sign In With Google 🔥
        </div>
      </button>
      <h2
        className="duration-300 hover:scale-110 cursor-pointer select-none"
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
