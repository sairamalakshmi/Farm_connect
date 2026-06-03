import { useState } from "react";

import Sidebar from "../components/farmer/Sidebar";
import DashboardHome from "../components/farmer/DashboardHome";
import AddProduct from "../components/farmer/AddProduct";
import MyProducts from "../components/farmer/MyProducts";

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

        {activeSection === "addProduct" && (
          <AddProduct />
        )}

        {activeSection === "myProducts" && (
          <MyProducts />
        )}

      </div>

    </div>
  );
}

export default FarmerDashboard;