import { Button } from "@/components/ui/button";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io"
import { UserData } from "@/context/userContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Account = ({ user }) => {

  const {setisAuth, setUser} = UserData();

  const navigate = useNavigate()

  const logoutHandler=()=>{
      localStorage.clear()
      setUser([])
      setisAuth(false)
      toast.success("Logged Out Successfully")
      navigate("/login")
  }


  return (

<>
{
      user && (
        <div class="h-screen  pt-16 ">

        <div class="max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden  ">
            <div class="border-b px-4 pb-6">
                <div class="text-center my-10">
                <img
              src="https://cdn-icons-png.flaticon.com/512/7915/7915522.png"
              alt=""
              class="w-32 md:w-32 rounded-full mx-auto"
            />
                    <div class="py-2">
                        <h3 class="font-bold text-2xl text-gray-800 dark:text-white mb-1">{user.name}</h3>
                        <div class="inline-flex text-gray-700 dark:text-gray-300 items-center">
                          
                        {user.email}
                        </div>
                      
                    </div>
                </div>
                <div class="flex gap-2 px-2">

                  
                <Button 
              onClick={()=>navigate(`/${user._id}/dashboard`)}
            className="flex-1 rounded-full  bg-[#b046c8] hover:bg-[#9625af] text-white dark:text-white antialiased font-bold  px-4 py-4">
                <MdDashboard />
                Dashboard
              </Button>

              
             {
            user.role === "admin" && (
                 <Button 
                 onClick={()=>navigate(`/admin/dashboard`)}
                 className="flex-1 rounded-full  w-fit bg-[#b046c8] hover:bg-[#9625af] text-white dark:text-white antialiased font-bold  px-4 py-4">
                   <MdDashboard />
                 Admin Dashboard
                 </Button>
               )
              }
                   
              <Button 
             onClick={logoutHandler}
               className="flex-1 rounded-full  w-fit bg-[#f04046] hover:bg-[#b83939] text-white dark:text-white antialiased font-bold  px-4 py-4">
                 <IoIosLogOut />
                 LogOut
               </Button>
                </div>
            </div>
            <div class="px-4 py-4">
                <div class="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
                  
                    <span>Start Your Learning Journey with <span className="text-[#6d3a97] font-bold">SkillWave:</span>  Unlock skills, achieve success, and shape your future with expert-led courses and interactive learning. Transform your potential into limitless possibilities</span>

                </div>
          
            </div>
        </div>
     
   

</div>
      )
    }
</>


 );
}

export default Account;



