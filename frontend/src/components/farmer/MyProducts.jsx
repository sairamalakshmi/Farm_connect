import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Package } from "lucide-react";

const API = "https://farm-connect-2-21us.onrender.com";

function MyProducts() {
  const [products, setProducts] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
  product_name: "",
  category: "",
  price: "",
  quantity: "",
});

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `${API}/api/products/farmer/${user.id}`
      );

      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `${API}/api/products/delete/${id}`
      );

      setProducts((prev) =>
        prev.filter((p) => p.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  };


  const editProduct = (id) => {
    
    const product = products.find(
      (p) => p.id === id
    );

    setFormData({
    product_name: product.product_name,
    category: product.category,
    price: product.price,
    quantity: product.quantity,
  });

  setEditId(id);
  setIsEditing(true);
};

const updateProduct = async () => {
  try {
    await axios.put(
      `${API}/api/products/update/${editId}`,
      formData
    );

    alert("Product Updated Successfully");

    fetchProducts();

    setIsEditing(false);

  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="p-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <div>
          <h1 className="text-3xl font-bold text-green-700">
            My Products
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all your farm products
          </p>
        </div>

        <div className="bg-green-100 px-5 py-3 rounded-xl flex items-center gap-2">
          <Package className="text-green-700" />
          <span className="font-semibold">
            {products.length} Products
          </span>
        </div>

      </div>

      {/* Empty State */}
      {isEditing && (
  <div className="bg-white shadow-md rounded-xl p-6 mb-8">

    <h2 className="text-2xl font-bold text-green-700 mb-4">
      Edit Product
    </h2>

    <div className="grid md:grid-cols-2 gap-4">

      <input
        type="text"
        name="product_name"
        value={formData.product_name}
        onChange={handleChange}
        className="border p-3 rounded-lg"
      />

      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="border p-3 rounded-lg"
      />

      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        className="border p-3 rounded-lg"
      />

      <input
        type="number"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        className="border p-3 rounded-lg"
      />

    </div>

    <button
      onClick={updateProduct}
      className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg"
    >
      Update Product
    </button>

  </div>
)}
      {products.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-md p-12 text-center">

          <Package
            size={70}
            className="mx-auto text-gray-300"
          />

          <h2 className="text-2xl font-bold mt-4">
            No Products Found
          </h2>

          <p className="text-gray-500 mt-2">
            Start adding products to sell directly
            to consumers.
          </p>

        </div>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEdit={editProduct}
              onDelete={deleteProduct}
            />
          ))}

        </div>
      )}

    </div>
  );
}

export default MyProducts;