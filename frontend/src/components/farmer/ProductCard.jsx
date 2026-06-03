import { Pencil, Trash2, Package } from "lucide-react";

function ProductCard({ product, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">

      {/* Product Image Placeholder */}
      <div className="h-48 bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center">
        <Package size={60} className="text-white" />
      </div>

      <div className="p-5">

        <h3 className="text-xl font-bold text-gray-800">
          {product.product_name}
        </h3>

        <p className="text-gray-500 mt-1">
          Category: {product.category}
        </p>

        <div className="mt-4 space-y-2">

          <div className="flex justify-between">
            <span className="text-gray-500">Price</span>
            <span className="font-semibold text-green-700">
              ₹{product.price}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Quantity</span>
            <span className="font-semibold">
              {product.quantity}
            </span>
          </div>

        </div>

        <div className="flex gap-3 mt-6">

          <button
            onClick={() => onEdit(product.id)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg flex items-center justify-center gap-2"
          >
            <Pencil size={18} />
            Edit
          </button>

          <button
            onClick={() => onDelete(product.id)}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg flex items-center justify-center gap-2"
          >
            <Trash2 size={18} />
            Delete
          </button>

        </div>

      </div>
    </div>
  );
}

export default ProductCard;