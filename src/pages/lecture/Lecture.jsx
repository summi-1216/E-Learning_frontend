import Loading from "@/components/loading/Loading";
import { server } from "@/main";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./lecture.css";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { TiTick } from "react-icons/ti";
import { Progress } from "@/components/ui/progress";

const Lecture = ({ user }) => {
  const [lectures, setLectures] = useState([]);
  const [lecture, setLecture] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lecLoading, setLecLoading] = useState(false);
  const [show, setShow] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [videoPreview, setVideoPreview] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  if (user && user.role !== "admin" && !user.subscription.includes(params.id))
    return navigate("/");

  async function fetchLectures() {
    try {
      setLoading(true);
      const { data } = await axios.get(`${server}/api/lectures/${params.id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setLectures(data.lectures);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const changeVideoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setVideoPreview(reader.result);
      setVideo(file);
    };
  };

  const submitHandler = async (e) => {
    setBtnLoading(true);
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("file", video);

    try {
      const { data } = await axios.post(
        `${server}/api/course/${params.id}`,
        myForm,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      toast.success(data.message);
      setBtnLoading(false);
      setShow(false);
      fetchLectures();
      setTitle("");
      setDescription("");
      setVideo("");
      setVideoPreview("");
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnLoading(false);
    }
  };
  async function fetchLecture(id) {
    setLecLoading(true);
    const { data } = await axios.get(`${server}/api/lecture/${id}`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });

    setLecture(data.lecture);
    setLecLoading(false);

    try {
    } catch (error) {
      console.log(error);
      setLecLoading(false);
    }
  }

  const deleteHandler = async (id) => {
    if (confirm("Are you Sure?")) {
      try {
        const { data } = await axios.delete(`${server}/api/lecture/${id}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        });

        toast.success(data.message);
        fetchLectures();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  const [completedPercent, setCompletedPercent] = useState("");
  const [completedLecture, setCompletedLecture] = useState("");
  const [lectureLength, setlectureLength] = useState("");
  const [progress, setProgress] = useState([]);

  async function fetchProgress() {
    try {
      const { data } = await axios.get(
        `${server}/api/user/progress?course=${params.id}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      setCompletedPercent(data.courseProgressPercentage);
      setCompletedLecture(data.completedLectures);
      setlectureLength(data.allLectures);
      setProgress(data.progress);
    } catch (error) {
      console.log(error);
    }
  }

  const addProgress = async (id) => {
    try {
      const { data } = await axios.post(
        `${server}/api/user/progress?course=${params.id}&lectureId=${id}`,
        {},
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLectures();
    fetchProgress();
    // fetchLecture();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="progress w-full h-5 ">
            <progress
              value={completedPercent}
              max={100}
              className="w-full"
            ></progress>
          </div>
          Lecture Completed - {completedLecture} out of {lectureLength}
          <div className="lecture-page ">
            <div className="left">
              {lecLoading ? (
                <Loading />
              ) : (
                <>
                  {lecture.video ? (
                    <>
                      <video
                        src={`${server}/${lecture.video}`}
                        width={"100%"}
                        controls
                        controlsList="nodownload noremoteplayback"
                        disablePictureInPicture
                        disableRemotePlayback
                        autoPlay
                        onEnded={() => addProgress(lecture._id)}
                      ></video>
                      <h1>{lecture.title}</h1>
                      <h3>{lecture.description}</h3>
                    </>
                  ) : (
                    <h1 class="mb-4 text-base font-semibold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                      Choose{" "}
                      <span class="text-transparent bg-clip-text leading-16 bg-gradient-to-r from-green-400 to-[#7a1d8f]">
                        Your Lecture
                      </span>{" "}
                      and Start Learning.
                      <p class=" font-normal text-gray-500 lg:text-xl dark:text-gray-400 mt-8">
                        "Start Your Learning Journey with SkillWave: Unlock
                        Skills, Achieve Success, and Shape Your Future. Dive
                        into expert-led courses, embrace interactive learning,
                        and grow at your own pace. Whether you're advancing your
                        career or exploring new passions, SkillWave is your
                        partner in progress. Join us today and transform your
                        potential into limitless possibilities."
                      </p>
                    </h1>
                  )}
                </>
              )}
            </div>
            <div className="right mt-8">
              {user && user.role === "admin" && (
                <Button
                  onClick={() => setShow(!show)}
                  className="flex rounded  bg-[#8e20a7] hover:bg-[#622370] text-white dark:text-white antialiased font-bold   px-4 py-4"
                >
                  {show ? "Close" : "Add Lecture +"}
                </Button>
              )}

              {show && (
                <div className="lecture-form">
                  <h2>Add Lecture</h2>
                  <form onSubmit={submitHandler}>
                    <label htmlFor="text">Title</label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />

                    <label htmlFor="text">Description</label>
                    <input
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />

                    <input
                      type="file"
                      placeholder="choose video"
                      onChange={changeVideoHandler}
                      required
                    />

                    {videoPreview && (
                      <video
                        src={videoPreview}
                        alt=""
                        width={300}
                        controls
                      ></video>
                    )}

                    <Button
                      disabled={btnLoading}
                      type="submit"
                      className="flex rounded  bg-[#8e20a7] hover:bg-[#622370] text-white dark:text-white antialiased font-bold  px-4 py-4"
                    >
                      {btnLoading ? "Please Wait..." : "Add Lecture"}
                    </Button>
                  </form>
                </div>
              )}

              {lectures && lectures.length > 0 ? (
                lectures.map((e, i) => (
                  <>
                    <div
                      onClick={() => fetchLecture(e._id)}
                      key={i}
                      className={`lecture-number ${
                        lecture._id === e._id && "active"
                      }`}
                    >
                      {i + 1}. {e.title}
                      {/* {progress[0].completedLectures.includes(e._id) && ( <TiTick />)
                     
                      } */}
                    </div>
                    {user && user.role === "admin" && (
                      <Button
                        className="flex rounded mt-4 bg-[#f04046] hover:bg-[#b83939] text-white dark:text-white antialiased font-semibold  px-4 py-4"
                        onClick={() => deleteHandler(e._id)}
                      >
                        Delete {e.title}
                      </Button>
                    )}
                  </>
                ))
              ) : (
                <p>No Lectures Yet!</p>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Lecture;
