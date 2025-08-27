import { useState } from "react";
import { IoMoon } from "react-icons/io5";
import { FiSun } from "react-icons/fi";

export default function ToggleBtn() {
  const [isOn, setIsOn] = useState(false);

  const handleButton = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`cursor-pointer rounded-md p-2 w-28 
            ${isOn ? "bg-green-200" : "bg-red-100"}`}
            onClick={handleButton}>
        <div
          className={`rounded-md p-3 aspect-square w-1/2 border-2 ${
            isOn
              ? "bg-gradient-to-r from-green-400 to-green-600 border-green-600 tansform translate-x-full duration-200 ease-in-out scale-100"
              : "bg-gradient-to-r from-red-400 to-orange-500 border-red-600 transform duration-200 ease-in-out scale-95"
          }`}
        >
          <p className="text-black text-center font-semibold aspect-square w-full">
            {isOn ? <FiSun className="text-2xl"/> : <IoMoon className="text-2xl"/>}
          </p>
        </div>
      </div>
    </div>
  );
}
