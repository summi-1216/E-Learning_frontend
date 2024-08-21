import { server } from "@/main";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../utils/Layout";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { UserData } from "@/context/userContext";

const AdminUsers = ({ user }) => {

  const navigate = useNavigate();

  if (user && user.mainrole !== "superadmin") return navigate("/");

  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      const { data } = await axios.get(`${server}/api/users`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const updateRole = async (id) => {
    if (confirm("Are you sure? You want to update this user role. Then refresh the page")) {
      try {
        const { data } = axios.put(
          `${server}/api/user/${id}`,
          {},
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );
        toast.success(data.message)
          fetchUsers();
         
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <Layout>
      <div class="flex justify-center flex-wrap w-full right-28">
        <div class="w-2/3 mx-auto mt-[-700px] mb-[155px] ml-96 ">
          <h1 className="block w-full font-semibold text-4xl py-10 mb-10 text-transparent bg-clip-text leading-12  bg-[#7a1d8f]">
            All Courses
          </h1>
          <table class="min-w-full bg-white shadow-md rounded-xl">
            <thead>
              <tr class="bg-blue-gray-100 text-gray-700">
                <th class="py-3 px-4 text-left">S.No</th>
                <th class="py-3 px-4 text-left">Name</th>
                <th class="py-3 px-4 text-left">E-Mail</th>
                <th class="py-3 px-4 text-left">Role</th>
                <th class="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            {users &&
              users.map((e, i) => (
                <tbody class="text-blue-gray-900">
                  <tr class="border-b border-blue-gray-200">
                    <td class="py-3 px-4">{i + 1}</td>
                    <td class="py-3 px-4">{e.name}</td>
                    <td class="py-3 px-4">{e.email}</td>
                    <td class="py-3 px-4">{e.role}</td>
                    <td class="py-3 px-4">
                      <Button
                      
                        onClick={() => {
                          updateRole(e._id);
                        }}
                       
                        className="flex  bg-[#b046c8] hover:bg-[#9625af] text-white text-md cursor-pointer  rounded py-4"
                      >
                        Update Role
                      </Button>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
          <div class="w-full pt-5 px-4 mb-8 mx-auto ">
            <div class="text-sm text-gray-700 py-1 text-center">
              Fetching all{" "}
              <span className="text-[#8a4abf] font-semibold">Active</span>{" "}
              users.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminUsers;
