import React, { useState } from "react";
import carOutline from "../../Asset/Group 353.png";
import exteriorIMg from "../../Asset/_Ð»Ð¾Ð¹_2.png";
import interiorImg from "../../Asset/_Ð»Ð¾Ð¹_2 (1).png";
import { useDispatch } from "react-redux";
import { saveScreen5Data } from "../redux/formSlice";

const VehicleDamageReport = (props) => {
  const [viewMode, setViewMode] = useState("exterior");
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(saveScreen5Data({ viewMode: viewMode }));
    props.setActive(props.active + 1);
  };

  const handleBackClick = () => {
    props.setActive(props.active - 1);
    console.log("back");
  };

  return (
    <div className="w-[95%] mt-4 mx-auto p-4">
      <div className="flex justify-between bg-white px-4 border border-[#D9D9D9] rounded-lg">
        {/* Vehicle Outline and Mode Toggle */}
        <div className="w-1/2 px-6 py-10">
          <div className="flex justify-center space-x-4 mb-4">
            <label className="flex items-center space-x-2 p-2 border-[#D9D9D9] border rounded-lg bg-[#F9F9F9]">
              <input
                type="radio"
                name="viewMode"
                value="exterior"
                checked={viewMode === "exterior"}
                onChange={() => setViewMode("exterior")}
                className="form-radio text-blue-600 sr-only"
              />
              <img src={exteriorIMg} alt="Exterior View" />
              <span
                className={`pr-3 text-[1rem] ${
                  viewMode === "exterior" ? "text-[#242E69]" : "text-gray-400"
                }`}
              >
                Exterior
              </span>
            </label>
            <label className="flex items-center space-x-2 p-2 border-[#D9D9D9] border rounded-lg bg-[#F9F9F9]">
              <input
                type="radio"
                name="viewMode"
                value="interior"
                checked={viewMode === "interior"}
                onChange={() => setViewMode("interior")}
                className="sr-only"
              />
              <img src={interiorImg} alt="Interior View" />
              <span
                className={`pr-3 text-[1rem] ${
                  viewMode === "interior" ? "text-[#242E69]" : "text-gray-400"
                }`}
              >
                Interior
              </span>
            </label>
          </div>

          <div className="relative flex justify-center">
            <img src={carOutline} alt="Car Outline" draggable={false} />
          </div>
        </div>

        {/* Damage Report */}
        <div className="w-1/2 border-l border-gray-300 px-6 py-10">
          <ul>
            <li className="flex justify-between mb-2 text-[10px] md:text-[16px] font-medium">
              <span>No</span>
              <span>Damage Type</span>
              <span>Degree</span>
            </li>
          </ul>
          <p className="text-gray-500 flex justify-center items-center text-[10px] md:text-[16px] font-normal mt-[50%]">
            Tap on the vehicle's part to add damage
          </p>
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
            onClick={onSubmit}
          >
            Save and Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleDamageReport;
