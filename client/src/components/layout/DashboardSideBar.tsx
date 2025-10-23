import React, { useState } from "react";
import DashboardSideBarItem from "../DashboardSideBarItem";
import type { SideBarItemType } from "../../types/dashboardTypes";
import Logo from "../Logo";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

interface dashboardSideBarProps {
  items: SideBarItemType[];
}
const DashboardSideBar: React.FC<dashboardSideBarProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleOpenandClose = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <aside
      className={`h-screen shadow-[10px_0_10px_0_rgba(0,0,0,0.2)] backdrop-blur-lg
    ${
      isOpen ? "w-[21%]" : "w-[5%]"
    } transition-all duration-500 overflow-hidden`}
    >
      <div className="flex bg-blue-200 justify-between py-4 px-[3%] ">
        {isOpen && <Logo />}
        <button onClick={handleOpenandClose}>
          {isOpen ? <ArrowBigLeft /> : <ArrowBigRight />}
        </button>
      </div>
      <nav className=" p-3 mt-10">
        {items.map((item) => (
          <DashboardSideBarItem key={item.href} item={item} open={isOpen} />
        ))}
      </nav>
      <div></div>
    </aside>
  );
};

export default DashboardSideBar;
