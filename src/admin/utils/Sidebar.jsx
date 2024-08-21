import React from "react";
import { FaBook, FaHome, FaUserAlt } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";
import AdminDashboard from "../dashboard/AdminDashboard";
import { MdDashboardCustomize } from "react-icons/md";
import { UserData } from "@/context/userContext";

const Sidebar = () => {
  const { user } = UserData();
  return (
    <body class="font-poppins antialiased">
      <div
        id="view"
        class="h-full w-screen flex flex-row "
        x-data="{ sidenav: true }"
      >
        <div
          id="sidebar"
          class="bg-white h-screen md:block shadow-2xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
          x-show="sidenav"
          // @click.away="sidenav = false"
        >
          <div class="space-y-6 md:space-y-10 mt-10">
            <h1 class="hidden md:block font-bold text-sm md:text-xl text-center">
              Admin
              <span class="text-[#9625af]">Dashboard.</span>
            </h1>
            <div id="profile" class="space-y-3">
              <img
                src="https://t3.ftcdn.net/jpg/04/85/80/58/360_F_485805886_vJ53NqxOhg8ldmuTvDO5uZkxteMVQxzB.jpg"
                alt="Avatar user"
                class="w-10 md:w-16 rounded-full mx-auto"
              />
              <div>
                <h2 class="font-medium text-xs md:text-sm text-center text-[#9625af]">
                  {user.name}
                </h2>

                
                <p class="text-xs text-gray-500 text-center">
                {user && user.mainrole === "superadmin" ?"Adminstrator":"Mentor"}
                  </p>
              </div>
            </div>

            <div id="menu" class="flex flex-col space-y-2">
              <ul>
                <li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#9625af] duration-150">
                  <FaHome />
                  <Link to={"/"}>
                    <span class="font-semibold">Home</span>
                  </Link>
                </li>
                <li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#9625af] duration-150">
                  <FaBook />
                  <Link to={"/admin/course"}>
                    <span class="font-semibold">Courses</span>
                  </Link>
                </li>
                {user && user.mainrole === "superadmin" && (
                  <li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#9625af] duration-150">
                    <FaUserAlt />
                    <Link to={"/admin/users"}>
                      <span class="font-semibold">Users</span>
                    </Link>
                  </li>
                )}

                <li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#9625af] duration-150">
                  <MdDashboardCustomize />
                  <Link to={"/admin/dashboard"}>
                    <span class="font-semibold">Dashboard</span>
                  </Link>
                </li>

                <li class="flex space-x-2 mt-10 cursor-pointer hover:text-[#9625af] duration-150">
                  <IoLogOut />
                  <Link to={"/account"}>
                    <span class="font-semibold">Logout</span>
                  </Link>
                </li>
                <Link to={"/about"}>
                  <button class="w-full mt-10  rounded-full py-1.5    bg-[#a846be] hover:bg-[#7c2c90]  text-white">
                    About
                  </button>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Sidebar;
