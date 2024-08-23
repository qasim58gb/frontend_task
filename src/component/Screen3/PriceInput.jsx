import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { saveScreen3Data } from "../redux/formSlice";

const PriceInput = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  // List of options for the number inputs
  const priceOptions = [
    {
      name: "hourPrice",
      label: "Rental Price Per Hour",
      placeholder: "$0.00",
      validation: {
        required: "Hourly price is required",
        min: { value: 0, message: "Price cannot be negative" },
      },
    },
    {
      name: "dayPrice",
      label: "Rental Price Per Day",
      placeholder: "$0.00",
      validation: {
        required: "Daily price is required",
        min: { value: 0, message: "Price cannot be negative" },
      },
    },
    {
      name: "weekPrice",
      label: "Rental Price Per Week",
      placeholder: "$0.00",
      validation: {
        required: "Weekly price is required",
        min: { value: 0, message: "Price cannot be negative" },
      },
    },
    {
      name: "monthPrice",
      label: "Rental Price Per Month",
      placeholder: "$0.00",
      validation: {
        required: "Monthly price is required",
        min: { value: 0, message: "Price cannot be negative" },
      },
    },
  ];

  const onSubmit = (data) => {
    console.log(data);
    dispatch(saveScreen3Data(data));
    props.setActive(props.active + 1);
  };

  const handleBackClick = () => {
    props.setActive(props.active - 1);
    console.log("back");
  };

  return (
    <form className="flex flex-col">
      <div className="p-4 mx-auto top-4 w-[95%]">
        <div className="flex flex-wrap gap-4 md:gap-6 items-center justify-around py-[2rem] md:py-[3.5rem] px-4 bg-white border border-[#D9D9D9] rounded-lg mx-auto mt-[2rem]">
          {priceOptions.map((option, index) => (
            <div key={index} className="flex flex-col w-[181px]">
              <label className="block mb-1  md:text-[.88rem] text-[.6rem]">
                {option.label}
              </label>
              <input
                type="number"
                placeholder={option.placeholder}
                className={`w-full md:p-[6.5px] py-1 px-2 md:text-[1rem] text-[.8rem] border rounded-md bg-[#F9F9F9] ${
                  errors[option.name]
                    ? "border-red-500"
                    : "border-[#D9D9D9] hover:border-blue-700"
                }`}
                {...register(option.name, option.validation)}
              />
              {errors[option.name] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors[option.name].message}
                </p>
              )}
            </div>
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
              onClick={handleSubmit(onSubmit)}
              type="submit"
              className="bg-[#242E69] text-[#fff] font-medium py-2 px-2 md:px-6 rounded-lg text-[.7rem] md:text-[1rem]"
            >
              Save and Continue
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PriceInput;
