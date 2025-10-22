import React from "react";
import { SignOutButton } from "@clerk/clerk-react";

const Dashboard = () => {
  return (
    <nav className="flex justify-between p-4 shadow-md">
      <h1 className="text-xl font-bold">Job Application Assistant</h1>
      <SignOutButton redirectUrl="/" />
    </nav>
  );
};

export default Dashboard;
