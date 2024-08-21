import { server } from "@/main";
import React from "react";
import { Button } from "../ui/button";
import { UserData } from "@/context/userContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { CourseData } from "@/context/courseContext";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const { user, isAuth } = UserData();
  const {fetchCourses} = CourseData();

  const deleteHandler = async(id)=>{
  if(confirm("Are you sure? This course will be permanently deleted")){
    try {
      const {data} = await axios.delete(`${server}/api/course/${id}`,{
        headers:{
          token: localStorage.getItem("token")
        }
      });

      toast.success(data.message);
      fetchCourses();
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  }

  return (
    <div class=" group duration-500 mb-10 cursor-pointer shadow-xl group overflow-hidden relative text-gray-50 h-72 w-72  rounded-2xl hover:duration-700 mr-10">
      <img src={`${server}/${course.image}`} className="w-[100%] h-44" alt="" />
      {/* <div class="w-56 h-20  text-gray-800"/> */}

      <div class="flex flex-row justify-between"></div>

      <div class="absolute  -bottom-40 w-72  p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500 bg-[#f2eef3]">
        <h3 class="text-[#9625af] font-semibold text-xl">{course.title}</h3>

        <span class="text-gray-800 font-semibold text-xl">
          <p>Instructor - {course.createdBy}</p>
        </span>
        <p className="text-gray-900"> {course.description}</p>
        <p className="text-gray-900">Duration - {course.duration} weeks</p>
        <p className="text-gray-900">Price - ₹ {course.price}</p>
        {isAuth ? (
          <>
            {user && user.role !== "admin" ? (
              <>
                {user.subscription.includes(course._id) ? (
                  <Button
                    onClick={() => navigate(`/course/study/${course._id}`)}
                    class=" inline-flex items-center justify-center w-5 px-2 py-3 mb-1 text-sm text-white bg-[#9625af] rounded-2xl sm:w-auto  sm:mb-0"
                  >
                    Let's Begin
                  </Button>
                ) : (
                  <Button
                    onClick={() => navigate(`/course/${course._id}`)}
                    class="inline-flex items-center justify-center w-5 px-2 py-3 mb-1 text-sm text-white bg-[#9625af] rounded-2xl sm:w-auto sm:mb-0"
                  >
                    Get Started
                  </Button>
                )}
              </>
            ) : (
              <Button
                onClick={() => navigate(`/course/study/${course._id}`)}
                class="inline-flex items-center justify-center w-5 px-2 py-3 mb-1 text-sm text-white bg-[#9625af] rounded-2xl sm:w-auto sm:mb-0"
              >
                Let's Begin
              </Button>
            )}
          </>
        ) : (
          <Button
            onClick={() => navigate("/login")}
            class="inline-flex items-center justify-center w-5 px-2 py-3 mb-1 text-sm text-white bg-[#9625af] rounded-2xl sm:w-auto sm:mb-0"
          >
            Get Started
          </Button>
        )}
        {
          user && user.role === "admin" && 
          <Button 
          onClick={()=>deleteHandler(course._id)}
          class="inline-flex items-center justify-center w-5 px-2 py-3 mb-1 text-sm text-white bg-[#da464b] hover:bg-[#be3f43] rounded-2xl sm:w-auto sm:mb-0">Delete</Button>
        }
      </div>
    </div>

    // <div>
    //     <img className=""src={`${server}/${course.image}`} alt="" />
    //     <h3>{course.title}</h3>
    //     <p>Instructor - {course.createdBy}</p>
    //     <p>Duration - {course.duration}</p>
    //     <p>Price - {course.price}</p>

    //     <Button>
    //         Get Started
    //     </Button>
    // </div>
  );
};

export default CourseCard;
