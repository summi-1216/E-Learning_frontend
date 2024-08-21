import Footer from "@/components/footer/Footer";
import Testimonials from "@/components/testimonials/Testimonials";
import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section class="pt-24 bg-white">
      <div class="px-12 mx-auto max-w-7xl">
        <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 class="mb-8 text-2xl font-semibold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
            <span>"Empowering Growth Through Learning:</span>{" "}
            <span class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-[#7a1d8f] lg:inline">
             SkillWave
            </span>{" "}
            <span>- Your Gateway to Knowledge, Skills, and Success."</span>
          </h1>
          <p class="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
            We are dedicating to providing high quality online courses to help
            individuals learn and grow in their desired fields. Our experienced
            instruction ensure that each course is tailord for effective
            learning and practical applications.
          </p>
          <div class="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <Button
              onClick={() => navigate("/courses")}
              class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-[#9625af] rounded-2xl sm:w-auto sm:mb-0"
            >
              {" "}
              Get Started
              <svg
                class="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Button>
            <Button
                onClick={() => navigate("/about")}
              class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-200 rounded-2xl sm:w-auto sm:mb-0"
            >
              Learn More
              <svg
                class="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>
      <Testimonials />
    </section>

    // {/*
    //     // <div className="flex bg-[#f5f5f5] justify-center text-center flex-col flex-auto py-32 pb-0 ">
    //     //   <div className="flex flex-col gap-5 my-auto">
    //     //     <h1 className="text-5xl font-bold ">
    //     //       Welcome to our <span className="text-[#9625af]">E-Learning</span>{" "}
    //     //       Program
    //     //     </h1>
    //     //     <span className=" mx-auto px-4 py-2 rounded-full bg-gray-100  font-medium">
    //     //       Learn, Grow & <span className="text-[#F83002]">Excel </span> your
    //     //       skills
    //     //     </span>
    //     //     <div className="p-7 text-center min-h-10">
    //     //     <p  className='text-lg text-[#333] leading-6' >
    //     //       We are dedicating to providing high quality online courses to help
    //     //       individuals learn and grow in their desired fields. Our experienced
    //     //       instruction ensure that each course is tailord for effective learning
    //     //       and practical applications.
    //     //     </p>
    //     //     </div>

    //     //     <div className="mx-auto">
    //     //       <Button
    //     //         onClick={() => navigate("/courses")}
    //     //         className="flex w-fit bg-[#b046c8] hover:bg-[#9625af]  cursor-pointer mt-4  rounded-xl py-4 text-white"
    //     //       >
    //     //         {" "}
    //     //         Get Started
    //     //         {/* <Search className='h-5 w-5' />       [#f5f5f5]*/}
    //     //       </Button>
    //     //     </div>

    //     //     <Testimonials />
    //     //   </div>
    //     // </div> */}
  );
};

export default Home;
