import React from "react";
import {
  Leaf,
  IndianRupee,
  Truck,
  Handshake,
  Users,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-3xl font-bold text-green-700">
          🌾 FarmConnect
        </h1>

        <div className="space-x-4">
          <Link to="/login">
            <button className="px-5 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-100">
              Login
            </button>
          </Link>

        <Link to="/register">
          <button className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Register
          </button>
        </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 md:px-20 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl font-bold text-green-800 mb-6">
              Connecting Farmers Directly With Consumers
            </h1>

            <p className="text-lg text-gray-700 mb-8">
              Buy fresh products directly from farmers and help create a
              transparent agricultural marketplace without middlemen.
            </p>

            <div className="flex gap-4">
            <Link to="/register">
              <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700">
                Get Started
              </button>
              </Link>

              <button className="border border-green-600 text-green-600 px-6 py-3 rounded-xl hover:bg-green-100">
                Browse Products
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              <div className="bg-white p-4 rounded-xl shadow">
                <h2 className="font-bold text-2xl text-green-700">1000+</h2>
                <p>Farmers</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow">
                <h2 className="font-bold text-2xl text-green-700">5000+</h2>
                <p>Consumers</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow">
                <h2 className="font-bold text-2xl text-green-700">50+</h2>
                <p>Categories</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow">
                <h2 className="font-bold text-2xl text-green-700">24/7</h2>
                <p>Support</p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
              alt="Farmer"
              className="rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-8 md:px-20 bg-white">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
          Why Choose FarmConnect?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-green-50 p-6 rounded-xl shadow hover:scale-105 transition">
            <Leaf className="text-green-600 mb-4" size={40} />
            <h3 className="font-bold text-xl mb-2">
              Fresh Farm Products
            </h3>
            <p>Directly sourced from farmers.</p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow hover:scale-105 transition">
            <IndianRupee className="text-green-600 mb-4" size={40} />
            <h3 className="font-bold text-xl mb-2">
              Fair Prices
            </h3>
            <p>Better earnings for farmers and savings for consumers.</p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow hover:scale-105 transition">
            <Truck className="text-green-600 mb-4" size={40} />
            <h3 className="font-bold text-xl mb-2">
              Direct Delivery
            </h3>
            <p>Fast and transparent delivery process.</p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow hover:scale-105 transition">
            <Handshake className="text-green-600 mb-4" size={40} />
            <h3 className="font-bold text-xl mb-2">
              No Middlemen
            </h3>
            <p>Connect directly with farmers.</p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-8 md:px-20">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-4xl mb-4">👨‍🌾</div>
            <h3 className="font-bold">Farmer Registers</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="font-bold">Upload Products</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="font-bold">Browse Products</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="font-bold">Direct Delivery</h3>
          </div>
        </div>
      </section>

      {/* Farmer & Consumer Section */}
      <section className="py-20 px-8 md:px-20 bg-white">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-green-100 p-8 rounded-2xl">
            <Users size={50} className="text-green-700 mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              For Farmers
            </h2>

            <ul className="space-y-3">
              <li>✔ Add Products</li>
              <li>✔ Manage Inventory</li>
              <li>✔ Track Orders</li>
              <li>✔ Increase Profits</li>
            </ul>

           <Link to="/login">
            <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl">
              Start Selling
            </button>
            </Link>
          </div>

          <div className="bg-yellow-100 p-8 rounded-2xl">
            <ShoppingCart size={50} className="text-yellow-700 mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              For Consumers
            </h2>

            <ul className="space-y-3">
              <li>✔ Browse Products</li>
              <li>✔ Fresh Produce</li>
              <li>✔ Direct Contact</li>
              <li>✔ Better Prices</li>
            </ul>
            
            <Link to="/login">
            <button className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded-xl">
              Start Shopping
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white text-center py-6">
        <h2 className="text-2xl font-bold mb-2">🌾 FarmConnect</h2>
        <p>Empowering Farmers • Delivering Freshness</p>
        <p className="mt-2">
          © 2026 FarmConnect. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;