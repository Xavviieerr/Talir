import DashboardSideBar from "../components/layout/DashboardSideBar";
import { SignOutButton } from "@clerk/clerk-react";
import { type SideBarItemType } from "../types/dashboardTypes";
import { FileText, Home, User } from "lucide-react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();

  const sideBarItemProps: SideBarItemType[] = [
    { label: "Dashboard", href: "/dashboard/home", icon: <Home /> },
    {
      label: "my Applicatons",
      href: "/dashboard/applications",
      icon: <FileText />,
    },
    {
      label: "profile",
      href: "/dashboard/profile",
      icon: <User />,
    },
  ].map((item) => ({
    ...item,
    active: location.pathname === item.href,
  }));

  return (
    <div className="flex">
      <DashboardSideBar items={sideBarItemProps} />
      <div className="w-full h-screen ">
        <nav className="flex justify-between h-[9%] shadow-md">
          <h1 className="text-xl font-bold">Job Application Assistant bot</h1>
          <SignOutButton redirectUrl="/" />
        </nav>
        <main className="h-[88%]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
