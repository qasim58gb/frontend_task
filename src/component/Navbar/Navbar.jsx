import React from "react";
import menu from "../../Asset/Layer_1.png";
import user from "../../Asset/Group 348.png";
import bell from "../../Asset/Group 349.png";

const Navbar = ({ toggleCollapse }) => {
  return (
    <>
      <div className="flex w-full items-center bg-[#ffffff] border-b-2 border-[#D9D9D9] h-[94px]">
        {/* Menu and Icons Section */}
        <div className="flex flex-1 justify-between items-center py-[26px] cursor-pointer">
          <div className="ml-[13px]" onClick={toggleCollapse}>
            <img src={menu} alt="menu_icon" />
          </div>
          <div className="flex md:gap-[21px] gap-[10px] md:mr-[50px] lg:mr-[70px] mr-[30px]">
            <div>
              <img src={bell} alt="bell-icon" />
            </div>
            <div>
              <img src={user} alt="user-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
