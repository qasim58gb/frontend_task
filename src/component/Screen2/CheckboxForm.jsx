import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { saveScreen2Data } from "../redux/formSlice";

const CheckboxForm = (props) => {
  const { register, handleSubmit, watch } = useForm();

  const dispatch = useDispatch();

  const selectedOptions = watch();

  const options = [
    { name: "gps", label: "GPS" },
    { name: "airConditioning", label: "Air Conditioning" },
    { name: "bluetooth", label: "Bluetooth" },
    { name: "childSeat", label: "Child Seat" },
  ];

  const onSubmit = (data) => {
    dispatch(saveScreen2Data(data));
    props.setActive(props.active + 1);
  };

  const handleBackClick = () => {
    props.setActive(props.active - 1);
    console.log("back");
  };

  return (
    <form className="flex flex-col">
      <div className="p-4 mx-auto top-4 w-[95%]">
        <div className="flex flex-wrap gap-3 items-center justify-around py-[2rem] md:py-[3.5rem] bg-white border border-[#D9D9D9] rounded-lg mx-auto mt-[2rem]">
          {options.map((option, index) => (
            <label
              key={index}
              className={`w-[180px] text-center py-2 rounded-lg border border-[#D9D9D9] ${
                selectedOptions[option.name]
                  ? "bg-[#242E69] text-white"
                  : "bg-[#F9F9F9]"
              }`}
            >
              <input
                type="checkbox"
                className="hidden"
                {...register(option.name)}
              />
              {option.label}
            </label>
          ))}
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

export default CheckboxForm;
