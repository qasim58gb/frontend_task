import React, { useEffect, useState } from "react";
import car from "../../Asset/Layer_1 (1).png";
import Dashboard from "../../Asset/sidebar/Group 58.png";
import Calendar from "../../Asset/sidebar/Group 73.png";
import Customers from "../../Asset/sidebar/Group 61.png";
import Reservations from "../../Asset/sidebar/Group 62.png";
import Vehicles from "../../Asset/sidebar/Group 63.png";
import Tracking from "../../Asset/sidebar/Layer_1 (2).png";
import OfferGenerator from "../../Asset/sidebar/Layer_1 (3).png";

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const [isVehiclesOpen, setIsVehiclesOpen] = useState(false);

  const toggleVehiclesMenu = () => {
    setIsVehiclesOpen(!isVehiclesOpen);
  };

  const menuItems = [
    { label: "Dashboard", icon: Dashboard },
    { label: "Calendar", icon: Calendar },
    { label: "Customers", icon: Customers },
    { label: "Reservations", icon: Reservations },
    {
      label: "Vehicles",
      icon: Vehicles,
      subItems: [
        { label: "All Vehicles" },
        { label: "Add New Vehicle" },
        { label: "Configuration" },
      ],
    },
    { label: "Tracking", icon: Tracking },
    { label: "Offer Generator", icon: OfferGenerator },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-full">
      {/* Logo Section */}
      <div className="h-[94px] flex justify-center items-center px-2 md:px-0 border-b-2 border-r-2 border-[#D9D9D9]">
        <img src={car} alt="logo" />
      </div>

      <div className="h-full bg-white border-r-2 ">
        <ul className="list-none pt-[20px] md:pt-[48px] md:px-[20px] lg:px-[38px] px-[15px]  ">
          {menuItems.map((item, index) => (
            <li key={index} className="mb-4">
              <div
                className={`flex items-center cursor-pointer md:hover:border-[#242E69] md:hover:border-2 md:hover:rounded-md py-[5px] font-[18px] ${
                  item.subItems && isVehiclesOpen ? "text-[#242E69]" : ""
                }`}
                onClick={item.subItems ? toggleVehiclesMenu : undefined}
              >
                <div
                  className={`${
                    !isCollapsed
                      ? "ml-2 mr-0 md:ml-[14px] md:mr-[10px]"
                      : "mx-auto"
                  }`}
                >
                  <img
                    className="size-3 md:size-4"
                    src={item.icon}
                    alt={item.label}
                  />
                </div>
                {!isCollapsed && (
                  <span className="text-[11px] md:text-[14px]">
                    {item.label}
                  </span>
                )}
              </div>
              {item.subItems && isVehiclesOpen && !isCollapsed && (
                <ul className="list-none md:ml-14 ml-3 mt-2">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="mb-2">
                      <span className="text-[11px] md:text-[14px] hover:bg-[#242E69] hover:text-white hover:p-1 hover:rounded-md">
                        {subItem.label}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
