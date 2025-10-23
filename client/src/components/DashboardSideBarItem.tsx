import { Link } from "react-router-dom";
import type { SideBarItemType } from "../types/dashboardTypes";

interface sideBarItemProps {
  item: SideBarItemType;
}

const DashboardSideBarItem: React.FC<sideBarItemProps> = ({ item }) => {
  return (
    <li>
      <Link to={item.href} className="">
        {item.icon && <span>{item.icon}</span>}
        <span>{item.label}</span>
      </Link>
    </li>
  );
};

export default DashboardSideBarItem;
