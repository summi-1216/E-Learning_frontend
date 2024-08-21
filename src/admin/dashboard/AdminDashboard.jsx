import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../utils/Layout";
import axios from "axios";
import { server } from "@/main";

const AdminDashboard = ({ user }) => {
  const navigate = useNavigate();


  if (user && user.role !== "admin") return navigate("/");

  const [stats, setStats] = useState([]);
  async function fetchStats() {
    try {
      const { data } = await axios.get(`${server}/api/stats`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setStats(data.stats);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(()=>{
    fetchStats()
  },[])
  return (

   
    <div class="flex flex-col w-full right-28">
      <Layout>


      <div class="w-2/3 mx-auto mt-[-600px] mb-[355px] ml-96">
  <div class="bg-white shadow-md rounded my-6">
    <table class="text-left w-full border-collapse bg-[#ece4f1] cursor-pointer shadow-xl border-gray-500"> 
      <thead>
        <tr>
          <th class="py-4 px-6 bg-grey-lightest font-bold  border-gray-900 uppercase text-sm text-grey-dark border-b border-grey-light">Your Actions</th>
          <th class="py-4 px-6 bg-grey-lightest font-bold border-gray-900 uppercase text-sm text-grey-dark border-b border-grey-light">Your Stats</th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-grey-lighter">
          <td class="py-4 px-6 border-b border-grey-light">Total <span class="text-[#802b93] font-bold"> Courses</span></td>
          <td class="py-4 px-6 border-b border-grey-light text-[#802b93] font-bold">
            {stats.totalCourses}
          </td>
        </tr>
        <tr class="hover:bg-grey-lighter">
          <td class="py-4 px-6 border-b border-grey-light">Total  <span class="text-[#802b93] font-bold"> Lectures</span></td>
          <td class="py-4 px-6 border-b border-grey-light text-[#802b93] font-bold">
          {stats.totalLectures}
          </td>
        </tr>
        <tr class="hover:bg-grey-lighter">
          <td class="py-4 px-6 border-b border-grey-light">Total  <span class="text-[#802b93] font-bold"> Learners</span></td>
          <td class="py-4 px-6 border-b border-grey-light text-[#802b93] font-bold">
          {stats.totalUser}
          </td>
        </tr>
      
      </tbody>
    </table>
  </div>
</div>























        
        {/* <div>
            <div>
                <p>Total Courses</p>
                <p>{stats.totalCourses}</p>
            </div>
            <div>
                <p>Total Lecture</p>
                <p>{stats.totalLectures}</p>
            </div>
            <div>
                <p>Total Users</p>
                <p>{stats.totalUser}</p>
            </div>
        </div> */}
      </Layout>
    </div>
    
    
  );
};

export default AdminDashboard;
