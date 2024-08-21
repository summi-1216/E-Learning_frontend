import { Button } from "@/components/ui/button";
import { CourseData } from "@/context/courseContext";
import { server } from "@/main";
import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const CourseStudy = ({ user }) => {
  const params = useParams();
  const { fetchCourse, course } = CourseData();
  const navigate = useNavigate();

  if (user && user.role !== "admin" && !user.subscription.includes(params.id))
    return navigate("/");

  useEffect(() => {
    fetchCourse(params.id);
  }, []);

  return (
    <>
      {course && (
      <div className="items-center  justify-center flex mb-20 mt-20">
 <div class=" max-w-sm bg-white border border-gray-200 rounded-xl shadow-2xl  dark:bg-gray-800 dark:border-gray-700">
          <img
            className="w-[400px]  "
            src={`${server}/${course.image}`}
            alt=""
          />
          <div class="p-5">
          
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {course.title}
              </h5>
            
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {course.description}
            </p>
            <h5>Duration - {course.duration} weeks</h5>
            <Link to={`/lectures/${course._id}`}>
              <Button className="flex  bg-[#963cab] hover:bg-[#773985] text-white text-md cursor-pointer mt-4 rounded py-4">
                Start Learning
              </Button>
            </Link>
          </div>
        </div>
      
      </div>
       )}
    </>
    // <>
    //   {course && (
    //     <div>
    //       <img
    //         className="w-[350px]  "
    //         src={`${server}/${course.image}`}
    //         alt=""
    //       />
    //       <h2>{course.title}</h2>
    //       <h1>{course.description}</h1>
    //       <h5>by - {course.createdBy}</h5>
    //       <h5>duration - {course.duration} weeks</h5>
    //       <Link to={`/lectures/${course._id}`}>
    //         <h2>Lectures</h2>
    //       </Link>
    //     </div>
    //   )}
    // </>
  );
};

export default CourseStudy;
