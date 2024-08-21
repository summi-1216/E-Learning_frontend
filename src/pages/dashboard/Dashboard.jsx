import CourseCard from "@/components/courseCard/CourseCard";
import { CourseData } from "@/context/courseContext";
import React from "react";
import { FaBook, FaHome, FaUserAlt } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";

const Dashboard = ({user}) => {
  const { mycourse } = CourseData();

  return (

<body class="font-poppins antialiased">
    <div
      id="view"
      class="h-full w-screen flex flex-row"
      x-data="{ sidenav: true }"
    >

      <div
        id="sidebar"
        class="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
        x-show="sidenav"
        // @click.away="sidenav = false"
      >
        <div class="space-y-6 md:space-y-10 mt-10">
         
          <h1 class="hidden md:block font-bold text-sm md:text-xl text-center">User 
         <span class="text-[#9625af]"> Dashboard.</span>
          </h1>
          <div id="profile" class="space-y-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7915/7915522.png"
              alt="Avatar user"
              class="w-10 md:w-16 rounded-full mx-auto"
            />
            <div>
              <h2
                class="font-medium text-xs md:text-sm text-center text-[#9625af]"
              >
               {user.name}
              </h2>
              <p class="text-xs text-gray-500 text-center">Learner</p>
            </div>
          </div>
      
          <div id="menu" class="flex flex-col space-y-2">

          <ul>
				<li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#9625af] duration-150">
				<FaHome/>
                    <Link to={"/"}><span class="font-semibold">Home</span></Link>
					
				</li>

        <li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#9625af] duration-150">
					<FaUserAlt   />
                    <Link to={"/account"}><span class="font-semibold">My Profile</span></Link>
				</li>
		
				<li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#9625af] duration-150">
				
          <FaBook/>
          <Link to="/courses"> <span class="font-semibold">All Courses</span></Link>
				</li>
	
			
                <li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#9625af] duration-150">
				
                 <IoLogOut />
					<Link to={"/account"}><span class="font-semibold">Logout</span></Link>
				</li>
				<Link to={"/about"}><button class="w-full mt-10  rounded-full py-1.5    bg-[#a846be] hover:bg-[#7c2c90]  text-white">About</button></Link>
			</ul>
          </div>
        </div>
      </div>




      <div class="flex flex-col w-full">
        <div class="text-white bg-[#d05eea]  flex flex-shrink-0 flex-col">
          <div class="flex relative items-center p-4 h-12">
            <span class="text-2xl tracking-wide font-semibold">Your Enrolled Courses</span>
          </div>
        </div>

        <div className=" flex flex-wrap gap-10 mt-20 justify-around">
          {" "}
          {mycourse && mycourse.length > 0 ? (
            mycourse.map((e) => <CourseCard key={e._id} course={e} />)
          ) : (
            <p>No course Enrolled Yet!</p>
          )}
        </div>
      </div>
    



     
    </div>
  </body>






























    // <div class="flex min-h-screen ">
    //   <nav class="w-64 flex-shrink-0 ">
    //     <div class="flex-auto bg-gray-900 h-full ">
    //       <div class="flex flex-col overflow-y-auto">
    //         <ul class="relative m-0 p-0 list-none h-full">
    //           <li class=" text-[#5a46be] font-bold text-xl p-3 w-full flex relative shadow-sm justify-start bg-gray-100 border-b-2 border-gray-700">
    //             {user.name}
    //           </li>
    //           <li class=" p-3 w-full flex relative shadow-sm justify-start bg-gray-300 border-b-2 border-gray-400 ">
    //             <div class="mr-4 flex-shrink-0 my-auto">
    //               {/* <svg class="fill-current w-5 h-5" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg> */}
    //             </div>
    //             <div class="flex-auto my-1">
    //               <span>Start Your Journey</span>
    //             </div>
    //           </li>
    //           <li class="p-4 w-full flex relative shadow-sm">
    //             <div class="flex-auto my-1">
    //               <span class="text-white font-medium">Dashboard</span>
    //             </div>
    //           </li>

    //           <div class="text-blue-400 flex relative px-4 hover:bg-gray-700 cursor-pointer">
    //             <div class="mr-4 my-auto">
    //               <svg
    //                 class="fill-current h-5 w-5"
    //                 focusable="false"
    //                 viewBox="0 0 24 24"
    //                 aria-hidden="true"
    //               >
    //                 <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
    //               </svg>
    //             </div>
    //             <div class="flex-auto my-1">
    //             <Link to="/account"><span>Your Profile</span></Link>
    //             </div>
    //           </div>

    //           <div class="text-gray-400 flex relative px-4 hover:bg-gray-700 cursor-pointer">
    //             <div class="mr-4 my-auto">
    //               <svg
    //                 class="fill-current h-5 w-5"
    //                 focusable="false"
    //                 viewBox="0 0 24 24"
    //                 aria-hidden="true"
    //               >
    //                 <path d="M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 3H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
    //               </svg>
    //             </div>
    //             <div class="flex-auto my-1">
    //             <Link to="/"><span>Home</span></Link>
    //             </div>
    //           </div>

    //           <div class="text-gray-400 flex relative px-4 hover:bg-gray-700 cursor-pointer">
    //             <div class="mr-4 my-auto">
    //               <svg
    //                 class="fill-current h-5 w-5"
    //                 focusable="false"
    //                 viewBox="0 0 24 24"
    //                 aria-hidden="true"
    //               >
    //                 <path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z"></path>
    //               </svg>{" "}
    //             </div>
    //             <div class="flex-auto my-1">
    //             <Link to="/courses"> <span>All Courses</span></Link>
    //             </div>
    //           </div>

    //           <div class="text-gray-400 flex relative px-4 hover:bg-gray-700 cursor-pointer">
    //             <div class="mr-4 my-auto">
    //               <svg
    //                 class="fill-current h-5 w-5"
    //                 focusable="false"
    //                 viewBox="0 0 24 24"
    //                 aria-hidden="true"
    //               >
    //                 <path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path>
    //               </svg>
    //             </div>
    //             <div class="flex-auto my-1">
    //             <Link to="/about"><span>About</span></Link>
    //             </div>
    //           </div>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>

    //   <div class="flex flex-col w-full">
    //     <div class="text-white bg-[#d05eea]  flex flex-shrink-0 flex-col">
    //       <div class="flex relative items-center p-4 h-28">
    //         <span class="text-2xl tracking-wide font-semibold">All Enrolled Courses</span>
    //       </div>
    //     </div>

    //     <div className=" flex flex-wrap gap-10 mt-20 justify-around">
    //       {" "}
    //       {mycourse && mycourse.length > 0 ? (
    //         mycourse.map((e) => <CourseCard key={e._id} course={e} />)
    //       ) : (
    //         <p>No course Enrolled Yet!</p>
    //       )}
    //     </div>
    //   </div>
    // </div>


  );
};

export default Dashboard;
