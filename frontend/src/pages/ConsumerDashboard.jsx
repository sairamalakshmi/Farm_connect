import { useState } from "react";

import Sidebar from "../components/consumer/Sidebar";
import DashboardHome from "../components/consumer/Dashboard";
import AddProduct from "../components/consumer/Products";
import MyProducts from "../components/consumer/Profile";

function FarmerDashboard() {
  const [activeSection, setActiveSection] =
    useState("dashboard");

  return (
    <div className="flex min-h-screen bg-green-50">

      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <div className="flex-1 p-8">

        {activeSection === "dashboard" && (
          <DashboardHome />
        )}

        {activeSection === "Products" && (
          <AddProduct />
        )}

        {activeSection === "Profile" && (
          <MyProducts />
        )}

      </div>

    </div>
  );
}

export default FarmerDashboard;