import { useEffect, useState } from "react";
import axios from "axios";
import { ShoppingCart, Search } from "lucide-react";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = (product) => {
    const existingItem = cart.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      alert("Product already in cart");
      return;
    }

    setCart([...cart, { ...product, cartQty: 1 }]);

    alert(`${product.product_name} added to cart`);
  };

  const buyNow = (product) => {
    alert(
      `Order placed for ${product.product_name}`
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.product_name
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">

        <h1 className="text-4xl font-bold text-green-700">
          Fresh Farm Products
        </h1>

        <div className="bg-white px-5 py-3 rounded-xl shadow">
          🛒 Cart Items: {cart.length}
        </div>

      </div>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">

        <div className="relative flex-1">
          <Search
            className="absolute left-3 top-3 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="border p-3 rounded-xl"
        >
          <option value="All">All Categories</option>
          <option value="Vegetable">
            Vegetable
          </option>
          <option value="Fruit">Fruit</option>
          <option value="Grain">Grain</option>
        </select>

      </div>

      {/* Products */}
      <div className="grid md:grid-cols-3 gap-6">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300"
            >
              <div className="p-6">

                <h2 className="text-2xl font-bold text-gray-800">
                  {product.product_name}
                </h2>

                <p className="text-gray-500 mt-2">
                  Category: {product.category}
                </p>

                <p className="mt-4 text-green-700 font-bold text-2xl">
                  ₹{product.price}
                </p>

                <p className="text-gray-500 mt-2">
                  Quantity: {product.quantity}
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  Farmer: {product.farmer_name}
                </p>

                <div className="mt-4">
                  <label className="text-sm text-gray-600">
                    Quantity
                  </label>

                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-full border rounded-lg p-2 mt-1"
                  />
                </div>

                <div className="flex gap-3 mt-5">

                  <button
                    onClick={() =>
                      addToCart(product)
                    }
                    className="flex-1 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700"
                  >
                    Add Cart
                  </button>

                  <button
                    onClick={() =>
                      buyNow(product)
                    }
                    className="flex-1 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
                  >
                    Buy Now
                  </button>

                </div>

              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <h2 className="text-2xl font-semibold text-gray-500">
              No products found
            </h2>
          </div>
        )}

      </div>

    </div>
  );
}

export default Products;