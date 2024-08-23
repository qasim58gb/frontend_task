import React from "react";
import { useForm } from "react-hook-form";
import { saveScreen6Data } from "../redux/formSlice";
import { useDispatch, useSelector } from "react-redux";

const AdditionalNote = (props) => {
  const { register, handleSubmit } = useForm();
  const formData = useSelector((state) => state);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    console.log(data);
    await dispatch(saveScreen6Data(data));
    props.setActive(props.active + 1);

    console.log(formData);
  };

  const handleBackClick = () => {
    props.setActive(props.active - 1);
    console.log("back");
  };

  return (
    <form className="flex flex-col">
      <div className="p-4 mx-auto  w-[95%]">
        <div className="flex flex-col items-center px-4 bg-white border border-[#D9D9D9] rounded-lg mx-auto mt-[2rem]">
          <div className="flex flex-col w-[93%] mx-auto my-[2rem] md:my-[3rem]">
            <label className="mb-1 md:text-[1rem] text-[.7rem]">
              Any Additional Notes
            </label>
            <textarea
              placeholder="Any Additional Notes...."
              className="w-full p-2 border md:text-[1rem] text-[.7rem] outline-none border-[#D9D9D9] hover:border-blue-700 rounded-md bg-[#F9F9F9] h-32"
              {...register("notes")}
            />
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <div className="my-[2.7rem]">
            <button
              type="button"
              className="bg-[#F9F9F9] border-[#D9D9D9] border text-[#242E69] font-medium py-2 md:px-14 px-4 text-[.7rem] md:text-[1rem] rounded-lg"
              onClick={handleBackClick}
            >
              Back
            </button>
          </div>

          <div className="my-[2.7rem]">
            <button
              type="button"
              className="bg-[#242E69] text-[#fff] font-medium py-2 px-2 md:px-6 rounded-lg text-[.7rem] md:text-[1rem]"
              onClick={handleSubmit(onSubmit)}
            >
              Save and Continue
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AdditionalNote;
