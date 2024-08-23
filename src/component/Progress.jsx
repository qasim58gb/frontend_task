import React from "react";

const Progress = ({ active, setActive }) => {
  const steps = [
    "Vehicle Info",
    "Features",
    "Rental Info",
    "Insurance Info",
    "Damages",
    "Others",
  ];
  return (
    <>
      <div className="flex items-center mt-8 mb-3 relative  ">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Step box */}
            <div
              className={`relative  z-10 md:w-12 md:h-12 h-8 w-8 rounded-full border border-[#D9D9D9]  flex items-center justify-center  md:text-[1rem] text-[.7rem] font-bold ${
                index <= active ? "bg-[#242E69] text-white" : "bg-white"
              }`}
              // onClick={() => setActive(index)}
            >
              {index + 1}
            </div>

            {/* Connecting line */}
            {index < steps.length - 1 && (
              <div
                className={`flex-1 w-10 md:p-1 p-[2px] border border-[#D9D9D9] ${
                  index < active ? "bg-[#242E69]" : "bg-white"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-between mb-5">
        {steps.map((step, index) => (
          <span key={step}>{step}</span>
        ))}
      </div>
    </>
  );
};

export default Progress;
