import {
  Package,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

function DashboardHome() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="space-y-8">

      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-3xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-2">
          Welcome back, {user?.name} 👨‍🌾
        </h1>

        <p className="text-green-100 text-lg">
          Manage your farm products and connect directly with consumers.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Total Products</p>
              <h2 className="text-3xl font-bold mt-2">12</h2>
            </div>

            <Package
              size={45}
              className="text-green-600"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Orders Received</p>
              <h2 className="text-3xl font-bold mt-2">25</h2>
            </div>

            <ShoppingCart
              size={45}
              className="text-blue-600"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Revenue</p>
              <h2 className="text-3xl font-bold mt-2">
                ₹12,500
              </h2>
            </div>

            <TrendingUp
              size={45}
              className="text-orange-500"
            />
          </div>
        </div>

      </div>

    </div>
  );
}

export default DashboardHome;