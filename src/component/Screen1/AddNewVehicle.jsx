import React, { useState } from "react";
import { useForm } from "react-hook-form";
import uploadImage from "../../Asset/Paper Upload.png";
import deleteIcon from "../../Asset/Vector.png";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { saveScreen1Data } from "../redux/formSlice";

const AddNewVehicle = (props) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  const [selectedInfo, setSelectedInfo] = useState(null);
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  // Watch for country selection to dynamically update city options
  const selectedCountry = watch("country");

  const countriesWithCities = {
    Pakistan: ["Jaranwala", "Lahore", "Karachi", "Islamabad"],
    USA: ["New York", "Los Angeles", "Chicago", "Houston"],
    Canada: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
  };

  // Form field configurations
  const formFields = [
    {
      name: "vehicleId",
      label: "Vehicle ID",
      type: "text",
      placeholder: "123456",
      defaultValue: "123456",
      validation: { required: "Vehicle ID is required" },
    },
    {
      name: "make",
      label: "Make*",
      type: "select",
      options: ["Select", "Audi", "BMW"],
      validation: { required: "Make is required" },
    },
    {
      name: "model",
      label: "Model*",
      type: "select",
      options: ["Select", "2012", "2013", "2014", "2015"],
      validation: { required: "Model is required" },
    },
    {
      name: "type",
      label: "Type*",
      type: "select",
      options: ["Select", "Auto", "Manual"],
      validation: { required: "Type is required" },
    },
    {
      name: "year",
      label: "Year*",
      type: "text",
      placeholder: "2024",
      defaultValue: "2024",
      validation: {
        required: "Year is required",
        pattern: {
          value: /^\d{4}$/,
          message: "Year must be a 4-digit number",
        },
      },
    },
    {
      name: "registrationNo",
      label: "Registration No*",
      type: "text",
      placeholder: "123456",
      defaultValue: "123456",
      hasInfoIcon: true,
      infoText: "Enter the registration number of the vehicle.",
      validation: { required: "Registration No is required" },
    },
    {
      name: "color",
      label: "Color*",
      type: "color",
      defaultValue: "#FF0000",
      validation: { required: "Color is required" },
    }, // Red color
    {
      name: "fuelType",
      label: "Fuel Type*",
      type: "select",
      options: ["Petrol", "Diesel"],
      validation: { required: "Fuel Type is required" },
    },
    {
      name: "transmission",
      label: "Transmission*",
      type: "select",
      options: ["Auto"],
      validation: { required: "Transmission is required" },
    },
    {
      name: "odometer",
      label: "Odometer (KMPH)*",
      type: "text",
      placeholder: "KMPH",
      hasInfoIcon: true,
      infoText: "Enter the current odometer reading.",
      validation: {
        required: "Odometer is required",
        pattern: {
          value: /^\d+$/,
          message: "Odometer must be a number",
        },
      },
    },
    {
      name: "passengers",
      label: "Passengers*",
      type: "select",
      options: ["Select", "4", "5", "7"],
      hasInfoIcon: true,
      infoText: "Select the number of passengers.",
      validation: { required: "Passengers are required" },
    },
    {
      name: "country",
      label: "Country*",
      type: "select",
      options: ["Select", "Pakistan", "USA", "Canada"],
      validation: { required: "Country is required" },
    },
    {
      name: "city",
      label: "City*",
      type: "select",
      options:
        selectedCountry && selectedCountry !== "Select"
          ? countriesWithCities[selectedCountry]
          : ["Select"],
      validation: { required: "City is required" },
    },
  ];

  // Handle form submission
  const onSubmit = (data) => {
    const screen1Data = {
      vehicleId: data.vehicleId,
      make: data.make,
      model: data.model,
      type: data.type,
      year: data.year,
      registrationNo: data.registrationNo,
      color: data.color,
      fuelType: data.fuelType,
      transmission: data.transmission,
      odometer: data.odometer,
      passengers: data.passengers,
      country: data.country,
      city: data.city,
      image: images,
    };
    console.log(screen1Data);

    dispatch(saveScreen1Data(screen1Data));
    props.setActive(props.active + 1);
  };

  const handleInfoClick = (index) => {
    setSelectedInfo(selectedInfo === index ? null : index);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    setError("");
    if (files.length + images.length > 6) {
      setError("You can only upload a maximum of 6 images.");
      return;
    }

    const newImages = files.map((file) => ({
      id: URL.createObjectURL(file),
      src: URL.createObjectURL(file),
      file,
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDelete = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div className="p-4 mx-auto top-4 w-[95%]">
      <form
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 bg-white p-8 border-[1px] rounded-lg border-[#D9D9D9]"
        onSubmit={handleSubmit(onSubmit)}
      >
        {formFields.map((field, index) => (
          <div key={index}>
            <label className="mb-1 md:text-[.88rem] text-[.6rem] flex items-center justify-between pr-2">
              {field.label}
              {field.hasInfoIcon && (
                <IoIosInformationCircleOutline
                  className="ml-2 hover:text-blue-700 cursor-pointer"
                  onClick={() => handleInfoClick(index)}
                />
              )}
            </label>
            {field.type === "text" && (
              <input
                type="text"
                className="w-full md:p-[6.5px] py-1 px-2 md:text-[1rem] text-[.8rem] border border-[#D9D9D9] hover:border-blue-700 rounded-md bg-[#F9F9F9]"
                placeholder={field.placeholder}
                {...register(field.name, field.validation)}
              />
            )}
            {field.type === "color" && (
              <input
                type="color"
                className="w-full p-2 md:p-[18.2px] border border-[#D9D9D9] hover:border-blue-700 rounded-md bg-[#F9F9F9]"
                defaultValue={field.defaultValue}
                {...register("color", field.validation)}
              />
            )}
            {field.type === "select" && (
              <select
                className={`w-full md:p-2 border py-[5.2px] px-2 md:text-[1rem] text-[.8rem] ${
                  errors[field.name]
                    ? "border-red-500"
                    : "border-[#D9D9D9] hover:border-blue-700"
                } rounded-md bg-[#F9F9F9]`}
                onChange={
                  field.label === "Country*"
                    ? (e) => {
                        setValue("country", e.target.value);
                      }
                    : undefined
                }
                {...register(field.name, field.validation)}
              >
                {field.options.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
            {selectedInfo === index && (
              <div className="mt-2 p-2 bg-blue-100 border-l-4 border-blue-500 text-blue-700 text-sm rounded">
                {field.infoText}
              </div>
            )}
            {errors[field.name] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[field.name].message}
              </p>
            )}
          </div>
        ))}
      </form>

      {/* Image upload */}
      <div className="mt-8 bg-white p-8 border-[1px] rounded-lg border-[#D9D9D9]">
        <div>
          <p className="font-semibold text-[1.25rem] mb-4">Add Vehicle Image</p>
          <div
            className="border-[1px] border-dashed border-[#D9D9D9] rounded-lg px-6 py-10 cursor-pointer flex justify-center items-center flex-col"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <img
              src={uploadImage}
              alt="upload"
              className="size-[1rem] md:size-[2rem]"
            />
            <p className="text-center font-semibold text-[.6rem] md:text-[.88rem]">
              Drag & drop or&nbsp;
              <span>
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer text-[#156CF7]  hover:text-[#0d5ac4]"
                >
                  choose file&nbsp;
                </label>
              </span>
              to upload
            </p>

            <p className="text-[#515978] text-[.6rem] md:text-[.88rem]">
              Select JPG or PNG
            </p>

            <input
              id="file-upload"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
          <div className="flex justify-center items-center gap-4 text-[.88rem] py-[1.3rem]">
            <hr className="text-[#D9D9D9] w-[22.22%] border-1" />
            OR
            <hr className="text-[#D9D9D9] w-[22.22%] border-1" />
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <div className="flex flex-wrap gap-2 mt-4">
            {images.map((image) => (
              <div key={image.id} className="relative mx-2">
                <img
                  src={image.src}
                  alt="Upload Preview"
                  className="w-[64px] h-[64px] object-cover rounded-[1rem] border border-gray-300"
                />
                <button
                  onClick={() => handleDelete(image.id)}
                  className="absolute top-0 right-0 p-1 transform translate-x-1/2 -translate-y-1/2"
                >
                  <img src={deleteIcon} alt="Delete" className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end my-[2.7rem]">
        <button
          className="bg-[#242E69] text-[#fff] font-medium py-2 px-2 md:px-6 rounded-lg text-[.7rem] md:text-[1rem]"
          onClick={handleSubmit(onSubmit)}
        >
          Save and Continue
        </button>
      </div>
    </div>
  );
};

export default AddNewVehicle;
