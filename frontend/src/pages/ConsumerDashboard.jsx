import {
  LayoutDashboard,
  ShoppingBag,
  User,
  LogOut,
  Search,
} from "lucide-react";

function ConsumerDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const products = [
    {
      id: 1,
      name: "Tomatoes",
      price: 40,
      farmer: "Ravi",
    },
    {
      id: 2,
      name: "Potatoes",
      price: 30,
      farmer: "Suresh",
    },
    {
      id: 3,
      name: "Rice",
      price: 60,
      farmer: "Kiran",
    },
  ];

  return (
    <div className="flex min-h-screen bg-green-50">

      {/* Sidebar */}
      <div className="w-64 bg-green-700 text-white p-6">

        <h1 className="text-2xl font-bold mb-10">
          🌾 FarmConnect
        </h1>

        <ul className="space-y-6">

          <li className="flex items-center gap-3">
            <LayoutDashboard size={20} />
            Dashboard
          </li>

          <li className="flex items-center gap-3">
            <ShoppingBag size={20} />
            Products
          </li>

          <li className="flex items-center gap-3">
            <User size={20} />
            Profile
          </li>

          <li className="flex items-center gap-3">
            <LogOut size={20} />
            Logout
          </li>

        </ul>
      </div>

      {/* Main */}
      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold text-green-700">
          Welcome, {user?.name} 🛒
        </h1>

        {/* Search */}
        <div className="bg-white p-4 rounded-xl shadow mt-8 flex items-center">

          <Search className="text-gray-500" />

          <input
            type="text"
            placeholder="Search Products..."
            className="w-full ml-3 outline-none"
          />

        </div>

        {/* Products */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">

          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h2 className="text-2xl font-bold">
                {product.name}
              </h2>

              <p className="text-gray-600 mt-2">
                ₹{product.price}/kg
              </p>

              <p className="mt-2">
                Farmer: {product.farmer}
              </p>

              <button className="bg-green-600 text-white px-4 py-2 rounded-lg mt-4">
                Contact Farmer
              </button>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ConsumerDashboard;