import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { UserData } from "@/context/userContext";
import { CourseData } from "@/context/courseContext";

const Login = () => {

  const navigate = useNavigate()
  const {btnLoading, loginUser} = UserData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {fetchMyCourse} = CourseData()

  const submitHandler = async (e) =>{
    e.preventDefault();

    await loginUser(email,password, navigate,fetchMyCourse )

  }

  return (
    <div class="font-[sans-serif]">
      <div class="min-h-screen flex fle-col items-center justify-center px-4">
        <div class="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
          <div class="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form class="space-y-4" onSubmit={submitHandler}>
              <div class="mb-8">
                <h3 class="text-[#9625af] text-2xl font-bold">Log In</h3>
                <p class="text-gray-500 text-sm mt-4 leading-relaxed">
                  Welcome Back to your account and explore a world of
                  possibilities. Your journey begins here.
                </p>
              </div>

              <div>
                <label class="text-gray-800 text-sm mb-2 block">Email</label>
                <div class="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    class="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-[#9625af]"
                    placeholder="Enter email name"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    class="w-[18px] h-[18px] absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="10"
                      cy="7"
                      r="6"
                      data-original="#000000"
                    ></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>
              <div>
                <label class="text-gray-800 text-sm mb-2 block">Password</label>
                <div class="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    class="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-[#9625af]"
                    placeholder="Enter password"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    class="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                    viewBox="0 0 128 128"
                  >
                    <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>

              <div class="flex flex-wrap items-center justify-between gap-4">
                <div class="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    class="h-4 w-4 shrink-0 text-[#9625af] focus:ring-[#9625af] border-gray-300 rounded"
                  />
                  <label
                    for="remember-me"
                    class="ml-3 block text-sm text-[#9625af]"
                  >
                    Remember me
                  </label>
                </div>

                <div class="text-sm">
                <Link
                     to={"/forgot"}
                    class="text-[#9625af] hover:underline font-semibold"
                  >
                    Forgot your password?
                </Link>
                </div>
              </div>

              <div class="!mt-8">
                <button
                  disabled={btnLoading}
                  type="submit"
                  class="w-full shadow-xl py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-[#9625af] hover:bg-[#a954bc] focus:outline-none"
                >

                  {btnLoading?"Please Wait...":"Login Here"}
                  
                </button>
              </div>

              <p class="text-sm !mt-8 text-center text-gray-800">
                Don't have an account?{" "}
                <Link
                  to={"/register"}
                  className="text-[#9625af] font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Register here{" "}
                </Link>
             
              </p>
            </form>
          </div>
          <div class="lg:h-[400px] md:h-[300px] max-md:mt-8">
            <img
              src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg"
              class="w-full h-full max-md:w-4/5 mx-auto block object-cover"
              alt="Dining Experience"
            />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;
