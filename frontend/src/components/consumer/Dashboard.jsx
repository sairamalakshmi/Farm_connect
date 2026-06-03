import { ShoppingCart, Package, Heart, User } from "lucide-react";

function ConsumerDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen bg-gray-50 p-8">

      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-3xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold">
          Welcome, {user?.name} 👋
        </h1>
        <p className="mt-2 text-green-100">
          Buy fresh farm products directly from farmers.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mt-8">

        <div className="bg-white p-6 rounded-2xl shadow">
          <Package className="text-green-600 mb-3" />
          <h3 className="text-gray-500">Products</h3>
          <h1 className="text-3xl font-bold">250+</h1>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <ShoppingCart className="text-blue-600 mb-3" />
          <h3 className="text-gray-500">Orders</h3>
          <h1 className="text-3xl font-bold">15</h1>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <Heart className="text-red-600 mb-3" />
          <h3 className="text-gray-500">Wishlist</h3>
          <h1 className="text-3xl font-bold">8</h1>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <User className="text-purple-600 mb-3" />
          <h3 className="text-gray-500">Farmers</h3>
          <h1 className="text-3xl font-bold">40+</h1>
        </div>

      </div>

      
      </div>
  );
}

export default ConsumerDashboard;