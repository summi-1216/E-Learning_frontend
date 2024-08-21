import { UserData } from "@/context/userContext";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const { btnLoading, verifyOtp } = UserData();
  const [show, setShow] = useState(false)
  const navigate = useNavigate();

  
function onChange(value) {
  console.log("Captcha value:", value);
  setShow(true)
}

  const submitHandler = async (e) => {
    e.preventDefault();
    await verifyOtp(Number(otp), navigate);
  };

  return (
    <div className="py-28">
      <div class="max-w-md mx-auto text-center bg-slate-50 px-4 sm:px-8 py-10 rounded-xl shadow">
        <header class="mb-8">
          <h1 class="text-2xl font-bold mb-1">Email Id Verification</h1>
          <p class="text-[15px] text-slate-500">
            Enter the 6-digit verification code that was sent to your email id.
          </p>
        </header>
        <form id="otp-form" onSubmit={submitHandler}>
          <div class="flex items-center justify-center gap-3">
            <input
              type="number"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              class="w-44 h-14 text-center text-2xl  text-slate-900 bg-slate-200 border border-transparent hover:border-slate-300 appearance-none rounded p-4 outline-none focus:bg-white focus:border-[#9625af] focus:ring-2 focus:ring-[#9625af]"
              pattern="[0-9]"
              maxlength="6"
            />
          </div>
     <div class="max-w-[260px] mx-auto mt-4">
  
     <ReCAPTCHA
    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
    onChange={onChange}
  />
          {  show && (<button
              type="submit"
              disabled={btnLoading}
              class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-[#9625af] px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-[#974ca8] focus:outline-none focus:ring focus:ring-[#9625af] focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
            >
              {
                btnLoading?"Verifying...":"Verify Account"
              }
            </button>)}

            <p class="text-sm !mt-8 text-center text-gray-800">
              Go to
              <Link
                to={"/login"}
                className="text-[#9625af] font-semibold hover:underline ml-1 whitespace-nowrap"
              >
                Login{" "}
              </Link>{" "}
              Page
            </p>
          </div>
        </form>
      
      </div>
    </div>
  );
};

export default Verify;
