import { useState } from "react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineHome } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

const BtnNav = ({ scrollPosition }) => {
  const navigate = useNavigate();
  const onClickBtn = () => {
    navigate(-1);
  };
  const bgColor = scrollPosition >= 250 ? "bg-white" : "transparent";

  return (
    <div className="flex justify-center">
      <div
        className={`${bgColor} w-[386px] flex justify-between items-center pt-4 pb-2 px-6 fixed z-20`}
      >
        <HiOutlineArrowSmLeft size={24} onClick={onClickBtn} />

        <Link to={"/"}>
          <HiOutlineHome size={24} />
        </Link>
      </div>
    </div>
  );
};

export default BtnNav;
