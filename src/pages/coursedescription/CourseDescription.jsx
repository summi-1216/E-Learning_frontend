import Loading from "@/components/loading/Loading";
import { Button } from "@/components/ui/button";
import { CourseData } from "@/context/courseContext";
import { UserData } from "@/context/userContext";
import { server } from "@/main";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const CourseDescription = ({ user }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setloading] = useState(false);

  const { fetchCourse, course , fetchCourses, fetchMyCourse} = CourseData();

  const {fetchUser} = UserData()

  useEffect(() => {
    fetchCourse(params.id);
  }, []);

  const checkoutHandler = async () => {
    const token = localStorage.getItem("token");
    setloading(true);

    const {
      data: { order },
    } = await axios.post(`${server}/api/course/checkout/${params.id}`,
      {},
      {
        headers: { token, },
      }
    );

    const options = {
      key: "rzp_test_1mXLKKmPc9086s", // Enter the Key ID generated from the Dashboard
      amount: order.id, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "SkillWave", //your business name
      description: "Congratulations! Learn with us",

      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1

      handler: async function (response) {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
          response;
        try {
          const { data } = await axios.post(
            `${server}/api/verification/${params.id}`,
            {
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature,
            },
            {
                headers:{
                    token,
                }
            }
          );

          await fetchUser();
          await fetchCourses();
          await fetchMyCourse();
          toast.success(data.message);
          setloading(false)
          navigate(`/payment-success/${razorpay_payment_id}`)
        } catch (error) {
          toast.error(error.response.data.message);
          setloading(false);
        }
      },
      theme:{
        color:"#8a4baf"
      }
    };

    const razorpay = new window.Razorpay(options)

    razorpay.open()
  };
  return (
    <>{
        loading ? <Loading/> :
        <>
      {course && (
        <div className="p-24 text-center min-h-[55vh]">
          <div className="flex items-center justify-center flex-wrap gap-10 mb-16">
            <img
              className="w-48 h-28 object-cover rounded-xl"
              src={`${server}/${course.image}`}
              alt=""
            />
            <div className="text-left">
              <h2 className="text-2xl text-[#9625af] font-semibold">
                {course.title}
              </h2>
              <p className="text-lg text-gray-600 m-[5px]">
                Instructor : {course.createdBy}
              </p>
              <p className="text-lg text-gray-600 m-[5px]">
                Duration : {course.duration} weeks
              </p>
            </div>
          </div>
          <p className="text-lg text-center max-w-[800px] m-auto mb-6">
          {course.description}
            
          </p>
          <p className="text-lg text-center max-w-[800px] m-auto mb-6">
            Let's get started with this course At{" "}
            <span className="text-green-600 font-semibold">
              ₹{course.price}
            </span>
          </p>

          {user && user.subscription.includes(course._id) ? (
            <Button
              class=" shadow-xl py-3 px-4 text-sm tracking-wide font-semibold rounded text-white bg-[#9625af] hover:bg-[#a954bc] focus:outline-none mb-24"
              onClick={() => navigate(`/course/study/${course._id}`)}
            >
              Study
            </Button>
          ) : (
            <Button
              class=" shadow-xl py-3 px-4 text-sm tracking-wide font-semibold rounded text-white bg-[#9625af] hover:bg-[#a954bc] focus:outline-none mb-24"
              onClick={checkoutHandler}
            >
              Buy Now
            </Button>
          )}
        </div>
      )}
    </>
    }
    </>
  );
};

export default CourseDescription;
