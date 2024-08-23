import React from "react";
import { useSelector } from "react-redux";

const Complete = ({ active, setActive }) => {
  const formData = useSelector((state) => state);
  console.log("Registration Successful:", formData);

  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold text-green-600">
          Registration Successful!
        </h2>
        <p className="mt-2 text-gray-700">Your registration was successful.</p>
        {formData && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Registered Data:</h3>
            <pre className="bg-gray-100 p-4 rounded-lg">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Complete;
