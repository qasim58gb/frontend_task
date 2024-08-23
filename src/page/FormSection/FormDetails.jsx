import React, { useState } from "react";

import Progress from "../../component/Progress";
import AddNewVehicle from "../../component/Screen1/AddNewVehicle";
import CheckboxForm from "../../component/Screen2/CheckboxForm";
import PriceInput from "../../component/Screen3/PriceInput";
import InsuranceInput from "../../component/Screen4/InsuranceInput";
import VehicleDamageReport from "../../component/Screen5/VehicleDamageReport";
import AdditionalNote from "../../component/Screen6/AdditionalNote";
import Complete from "../../component/complete/complete";
const FormDetails = () => {
  const [active, setActive] = useState(0);

  console.log("activeis>>>>>>>>>", active);

  return (
    <>
      <div className="w-full mx-auto mt-9">
        <div
          className="ml-[1rem] md:ml-[2rem] lg:ml-[3rem]
      "
        >
          <h1 className="text-2xl font-rubik font-semibold ">
            Add New Vehicle
          </h1>
          <p className="text-[#808080]">Vehicle/Add New Vehicle</p>
        </div>
        <div className="w-[93%] mx-auto bg-[#F9F9F9] border-[1px] rounded-lg border-[#D9D9D9] my-8">
          <div className="mx-auto w-[90%]">
            <Progress active={active} setActive={setActive} />
          </div>
          <div>
            {active === 0 && (
              <AddNewVehicle active={active} setActive={setActive} />
            )}
            {active === 1 && (
              <CheckboxForm active={active} setActive={setActive} />
            )}
            {active === 2 && (
              <PriceInput active={active} setActive={setActive} />
            )}
            {active === 3 && (
              <InsuranceInput active={active} setActive={setActive} />
            )}
            {active === 4 && (
              <VehicleDamageReport active={active} setActive={setActive} />
            )}
            {active === 5 && (
              <AdditionalNote active={active} setActive={setActive} />
            )}
          </div>
        </div>
      </div>
      {active === 6 && <Complete active={active} setActive={setActive} />}
    </>
  );
};

export default FormDetails;
