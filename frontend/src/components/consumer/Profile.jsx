import { User, Mail, Shield } from "lucide-react";
import { useState } from "react";
import axios from "axios";

const API = "https://farm-connect-2-21us.onrender.com";
function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = async () => {
    try {
        console.log("Sending:", formData);

      const res = await axios.put(
        `${API}/api/auth/update/${user.id}`,
        formData,
      );

      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Profile Updated Successfully");

      setIsEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-xl p-8">
        <div className="text-center">
          <div className="w-28 h-28 bg-green-600 rounded-full mx-auto flex items-center justify-center">
            <User size={50} className="text-white" />
          </div>

          {isEditing ? (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded-lg p-2 mt-4 w-full"
            />
          ) : (
            <h1 className="text-3xl font-bold mt-4">{user?.name}</h1>
          )}

          <p className="text-gray-500">Consumer Account</p>
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-4 border p-4 rounded-xl">
            <Mail className="text-green-600" />
            <div>
              <p className="text-gray-500">Email</p>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border rounded-lg p-2 w-full"
                />
              ) : (
                <p>{user?.email}</p>
              )}

            </div>
            
          </div>

          <div className="flex items-center gap-4 border p-4 rounded-xl">
            <Shield className="text-green-600" />
            <div>
              <p className="text-gray-500">Role</p>
              <p>{user?.role}</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => (isEditing ? saveProfile() : setIsEditing(true))}
          className="w-full mt-8 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700"
        >
          {isEditing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
}

export default Profile;
