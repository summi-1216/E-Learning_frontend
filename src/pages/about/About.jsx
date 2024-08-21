import React from "react";

const About = () => {
  return (
    <div class="sm:flex items-center max-w-screen-xl">
      <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
          <img src="https://img.freepik.com/premium-photo/woman-stands-front-purple-purple-sign-that-says-word_910054-6324.jpg" />
        </div>
      </div>
      <div class="sm:w-1/2 p-5">
        <div class="text ml-10 mr-10">
          <span class="text-gray-500 border-b-2 border-[#9625af] uppercase">
            About <span className="font-bold text-gray-900">Skill</span>
            <span className="text-[#9625af] font-bold">wave</span>
          </span>
          <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">
            About <span class="text-[#9625af]">Our Company</span>
          </h2>
          <p class="text-gray-700">
            <span className="font-semibold">Skill</span>
            <span className="text-[#9625af] font-semibold">Wave</span> is an
            innovative e-learning platform committed to empowering individuals
            with the knowledge and skills needed to thrive in today's fast-paced
            world. We offer a diverse range of courses, meticulously crafted by
            industry experts to ensure you gain practical, real-world insights.
            Whether you're aiming to advance your career, learn a new skill, or
            explore a passion, our platform provides a flexible, accessible, and
            engaging learning experience tailored to your unique needs.
            <br />
            <br />
            At <span className="font-semibold">Skill</span>
            <span className="text-[#9625af] font-semibold">Wave</span>, we
            believe that education should be a lifelong journey. Our platform
            allows you to learn at your own pace, from anywhere, at any time.
            With interactive lessons, hands-on projects, and a vibrant community
            of learners, we make learning not just effective but enjoyable. Join
            us at
            <span className="font-semibold">Skill</span>
            <span className="text-[#9625af] font-semibold">Wave</span>, where
            your potential meets endless opportunities for growth and success.
          </p>
        </div>
      </div>
    </div>

    // <div className='p-56 text-center min-h-10'>
    //     <div className='max-w-5xl m-auto'>
    //         <h2 className='text-4xl font-bold text-[#9625af] mb-8'>About Us</h2>
    //         <p className='text-lg text-[#333] leading-6'>
    //             We are dedicating to providing high quality online courses to help individuals learn and grow in their desired
    //             fields. Our experienced instruction ensure that each course is tailord for effective learning and practical applications.
    //         </p>
    //     </div>
    //     </div>
  );
};

export default About;
