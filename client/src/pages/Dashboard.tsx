import DashboardSideBar from "../components/layout/DashboardSideBar";
import { SignOutButton } from "@clerk/clerk-react";
import { type SideBarItemType } from "../types/dashboardTypes";
import { FileText, Home, User } from "lucide-react";
import { Outlet } from "react-router-dom";

const sideBarItemProps: SideBarItemType[] = [
  { label: "Dashboard", href: "/dashboard", icon: <Home />, active: true },
  {
    label: "my Applicatons",
    href: "/dashboard/applications",
    icon: <FileText />,
    active: false,
  },
  {
    label: "profile",
    href: "/dashboard/profile",
    icon: <User />,
    active: true,
  },
];

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-1/5">
        <DashboardSideBar items={sideBarItemProps} />
      </div>
      <div className="w-full">
        <nav className="flex justify-between p-4 shadow-md">
          <h1 className="text-xl font-bold">Job Application Assistant bot</h1>
          <SignOutButton redirectUrl="/" />
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
