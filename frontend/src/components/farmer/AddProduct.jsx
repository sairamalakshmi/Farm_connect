import { useState } from "react";
import axios from "axios";

function AddProduct() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [formData, setFormData] = useState({
    product_name: "",
    category: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const {name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/products/add",
        {
          ...formData,
          farmer_id: user.id,
          price:Number(formData.price),
          quantity:Number(formData.quantity)
        }
      );

      alert("Product Added Successfully");

      setFormData({
        product_name: "",
        category: "",
        price: "",
        quantity: "",
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-green-700">
        Add Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="product_name"
          placeholder="Product Name"
          value={formData.product_name}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />


        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />


        <button
          type="submit"
          className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-800 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;