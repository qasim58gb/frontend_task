import { useState } from "react";

function Stepper() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <div className="flex space-x-4">
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-full text-white bg-blue-500 ${
              currentStep === 1 ? "ring-4 ring-blue-500" : ""
            }`}
          >
            <span className="text-xl font-bold">1</span>
          </div>
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-full text-white bg-blue-500 ${
              currentStep === 2 ? "ring-4 ring-blue-500" : ""
            }`}
          >
            <span className="text-xl font-bold">2</span>
          </div>
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-full text-white bg-blue-500 ${
              currentStep === 3 ? "ring-4 ring-blue-500" : ""
            }`}
          >
            <span className="text-xl font-bold">3</span>
          </div>
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-full text-white bg-blue-500 ${
              currentStep === 4 ? "ring-4 ring-blue-500" : ""
            }`}
          >
            <span className="text-xl font-bold">4</span>
          </div>
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-full text-white bg-blue-500 ${
              currentStep === 5 ? "ring-4 ring-blue-500" : ""
            }`}
          >
            <span className="text-xl font-bold">5</span>
          </div>
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-full text-white bg-gray-200 ${
              currentStep === 6 ? "ring-4 ring-blue-500" : ""
            }`}
          >
            <span className="text-xl font-bold">6</span>
          </div>
        </div>

        <div className="mt-8">
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Vehicle Information</h2>
              {/* Add your vehicle information form here */}
            </div>
          )}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              {/* Add your features form here */}
            </div>
          )}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Rental Information</h2>
              {/* Add your rental information form here */}
            </div>
          )}
          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Insurance Info</h2>
              {/* Add your insurance information form here */}
            </div>
          )}
          {currentStep === 5 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Damages</h2>
              {/* Add your damages form here */}
            </div>
          )}
          {currentStep === 6 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Others</h2>
              {/* Add your others form here */}
            </div>
          )}
        </div>

        <div className="mt-6 flex space-x-4">
          {currentStep > 1 && (
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              onClick={handlePrevious}
            >
              Previous
            </button>
          )}
          {currentStep < 6 && (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Stepper;
