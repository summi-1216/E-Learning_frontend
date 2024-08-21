import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Header = ({isAuth}) => {




  return (
    <div className="bg-white w-screen ">
      <div className="flex  items-center  justify-between  w-screen h-16  relative shadow ">
        <div className="ml-5 max-lg:ml-6">
          <h1 className=" text-2xl font-bold">
            Skill<span className="text-[#9625af]">wave</span>
          </h1>
        </div>
        <div className="flex items-center gap-12 mr-8 ">
          <ul className="flex font-medium items-center gap-5 ">
            <li className="hover:text-[#9625af]"><Link to={"/"}>Home</Link></li>
            <li className="hover:text-[#9625af]"><Link to={"/courses"}>Courses</Link></li>
            <li className="hover:text-[#9625af]"><Link to={"/about"}>About</Link></li>
            {
              isAuth?( <Link to="/account"><Button className="bg-[#5a46be] hover:bg-[#2e2c90] rounded text-white" >My Profile</Button></Link>
              // <li className="hover:text-[#9625af]"><Link to={"/account"}>Account</Link></li>
            ):(
                <div className="flex items-center gap-4">
                    <Link to="/login"><Button className="bg-[#a846be] hover:bg-[#7c2c90] rounded text-white" >Login</Button></Link>
                
                <Link to="/register"><Button className="bg-[#a846be] hover:bg-[#7c2c90] rounded text-white" >SignUp</Button></Link>
                </div>
                
              )
            }
           
           
            {/* <li className="hover:text-[#9625af]"><Link to={"/account"}>Account</Link></li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
