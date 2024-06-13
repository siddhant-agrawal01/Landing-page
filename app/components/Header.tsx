"use client";
import Image from "next/image";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import logo from "../assets/Logo.png";
import { useState } from "react";

const Sidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const menuItems = ["Home", "About Us", "Pricing", "Features"];

  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 left-0 h-screen w-[30%] bg-black text-white border-r border-gray-700 transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="text-white">
          <IoMdClose size={24} />
        </button>
      </div>
      <ul className="p-4 font-[ClashDisplay-medium]">
        {menuItems.map((item) => (
          <li key={item} className="hover:text-[#f37a5c] hover:cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const menuItems = ["Home", "About Us", "Pricing", "Features"];

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="max-w-[1050px] mx-auto overflow-hidden">
      <div className="flex w-full pt-8 px-4 justify-between">
        <div className="flex gap-12 items-center">
          <Image src={logo} alt="Logo" className="hover:cursor-pointer" />
          <div className="hidden md:flex gap-6 font-[ClashDisplay-medium] leading-6 text-xl text-black">
            {menuItems.map((item) => (
              <h1
                key={item}
                className="hover:text-[#f37a5c] hover:cursor-pointer"
              >
                {item}
              </h1>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <button className="bg-black text-white font-[ClashDisplay-Regular] px-10 py-3 rounded">
            Download
          </button>
        </div>
        <div onClick={handleSidebarToggle} className="block md:hidden">
          {isSidebarOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};

export default Header;
