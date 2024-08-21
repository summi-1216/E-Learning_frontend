import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { CourseData } from "@/context/courseContext";
import { server } from "@/main";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const categories = [
  "Web Development",
  "App Development",
  "Game Development",
  "Data Science",
  "Intelligence",
  "Python Learning",
  "Java",
  "MERN Full stack",
  "Javascript",
  "PHP"
];

const AddCourseDialog = ({ open, setOpen }) => {
  const { courses, fetchCourses } = CourseData();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePreview(reader.result);
      setImage(file);
    };
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setBtnLoading(true);

    const myForm = new FormData();

    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("category", category);
    myForm.append("price", price);
    myForm.append("createdBy", createdBy);
    myForm.append("duration", duration);
    myForm.append("file", image);

    try {
      const { data } = await axios.post(`${server}/api/course/new`, myForm, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      toast.success(data.message);
      setBtnLoading(false);
      await fetchCourses();
      setImage("");
      setTitle("");
      setDescription("");
      setDuration("");
      setCreatedBy("");
      setPrice("");
      setImagePreview("");
      setCategory("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="bg-white sm:max-w-[555px]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle className=" font-semibold text-2xl text-transparent bg-clip-text leading-12  bg-[#7a1d8f] ">
              Add Course
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="grid gap-2 py-1 font-sans">
              <div className="grid grid-cols-4 items-center gap-4 ">
                <label
                  htmlFor="text"
                  className="text-right font-semibold text-[#49275d]"
                >
                  Title
                </label>
                <Input
                  className="col-span-3 rounded-xl "
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="text"
                  className="text-right font-semibold text-[#49275d]"
                >
                  Description
                </label>
                <Input
                  type="text"
                  className="col-span-3 rounded-xl"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="text"
                  className="text-right font-semibold text-[#49275d]"
                >
                  Price
                </label>
                <Input
                  type="number"
                  className="col-span-3 rounded-xl"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="text"
                  className="text-right font-semibold text-[#49275d]"
                >
                  Duration
                </label>
                <Input
                  type="number"
                  className="col-span-3 rounded-xl"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="text"
                  className="text-right font-semibold text-[#49275d]"
                >
                  Created-By
                </label>
                <Input
                  type="text"
                  value={createdBy}
                  className="col-span-3 rounded-xl"
                  onChange={(e) => setCreatedBy(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="text"
                  className="text-right font-semibold text-[#49275d]"
                >
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="col-span-3 rounded-xl h-10"
                >
                  <option
                    value={""}
                    className="bg-slate-300 rounded"
                    // className=" font-semibold text-[#49275d] col-span-3"
                  >
                   Select Category
                  </option>
                  {categories.map((e) => (
                    <option value={e} key={e}
                    className="bg-slate-300 rounded">
                      {e}
                   
                    </option>
                  ))}
                </select>
              </div>

              {/* <div className="grid grid-cols-4 items-center gap-4">
                <Select onChange={(e) => setCategory(e.target.value)}>
                  <label
                    htmlFor="text"
                    className="text-right font-semibold text-[#49275d]"
                  >
                    Course Type
                  </label>
                  <SelectTrigger className=" col-span-3 rounded-xl ">
                    <SelectValue placeholder="Select Course Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-300 rounded">
                    <SelectItem value="App Development">
                   
                      App Development
                    </SelectItem>
                    <SelectItem value="App Development">
                      App Development
                    </SelectItem>
                    <SelectItem value="Data Science">Data Science</SelectItem>
                    <SelectItem value="Game Development">
                      Game Development
                    </SelectItem>
                    <SelectItem value="Intelligence">Intelligence</SelectItem>
                    <SelectItem value="Python Learning">
                      Python Learning
                    </SelectItem>
                    <SelectItem value="Java">Java</SelectItem>
                    <SelectItem value="MERN Full stack">
                      MERN Full stack
                    </SelectItem>
                    <SelectItem value="Javascript">Javascript</SelectItem>
                  </SelectContent>
                </Select>
              </div> */}
              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="text"
                  className="text-right font-semibold text-[#49275d]"
                >
                  Thumbnail
                </label>
                <Input
                  type="file"
                  className="col-span-3 rounded-xl"
                  required
                  onChange={changeImageHandler}
                />
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt=""
                    width={300}
                    className="ml-48"
                  />
                )}
              </div>

              <DialogFooter>
                <Button
                  type="submit"
                  disabled={btnLoading}
                  className="flex w-fit bg-[#b046c8] hover:bg-[#9625af] text-white items-center  text-lg cursor-pointer mt-5  rounded py-4"
                >
                  {btnLoading ? "Please Wait..." : "Add Course"}
                </Button>
              </DialogFooter>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddCourseDialog;
