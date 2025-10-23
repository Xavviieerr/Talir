import React from "react";
import DashboardSideBarItem from "../DashboardSideBarItem";
import type { SideBarItemType } from "../../types/dashboardTypes";

interface dashboardSideBarProps {
  items: SideBarItemType[];
}
const DashboardSideBar: React.FC<dashboardSideBarProps> = ({ items }) => {
  return (
    <aside>
      <div>
        <h2>TAilr</h2>
      </div>
      <nav>
        {items.map((item) => (
          <DashboardSideBarItem key={item.href} item={item} />
        ))}
      </nav>
    </aside>
  );
};

export default DashboardSideBar;
