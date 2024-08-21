import React, { useState } from "react";
import Layout from "../utils/Layout";
import { Link, useNavigate } from "react-router-dom";
import CourseCard from "@/components/courseCard/CourseCard";
import { CourseData } from "@/context/courseContext";

import { Button } from "@/components/ui/button";
import AddCourseDialog from "./AddCourseDialog";

const AdminCourses = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.role !== "admin") return navigate("/");

  const [open, setOpen] = useState(false);

  const { courses, fetchCourses } = CourseData();

  return (
    <Layout>
      <div class="flex justify-center flex-wrap w-full right-28">
        <div class="w-2/3 mx-auto mt-[-700px] mb-[155px] ml-96 ">
          <h1 className="block w-full font-semibold text-4xl py-10 text-transparent bg-clip-text leading-12  bg-[#7a1d8f]">
            All Courses
          </h1>

          <div className="flex flex-row flex-wrap justify-center items-center py-10  ">
            {courses && courses.length > 0 ? (
              courses.map((e) => {
                return <CourseCard key={e._id} course={e} />;
              })
            ) : (
              <p className="block w-full font-semibold text-4xl py-10 text-transparent bg-clip-text leading-12  bg-[#7a1d8f]  ">
                No Courses Uplaoded Yet!
              </p>
            )}
          </div>

          <Button
            onClick={() => setOpen(true)}
            className="flex w-fit bg-[#b046c8] hover:bg-[#9625af] text-white  ml-[400px]  text-lg cursor-pointer mt-5  rounded py-4"
          >
            Add Courses
          </Button>
        </div>
        <AddCourseDialog open={open} setOpen={setOpen} />
      </div>
    </Layout>
  );
};

export default AdminCourses;
