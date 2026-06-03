import {
  LayoutDashboard,
  ShoppingBag,
  User,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";



function Sidebar({ activeSection, setActiveSection }) {

    const navigate = useNavigate();

const handleLogout = () => {
  localStorage.clear();

  alert("Logged Out Successfully");

  navigate("/login");
};

  const menuItems = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      key: "Products",
      label: "Products",
      icon: ShoppingBag,
    },
    {
      key: "Profile",
      label: "Profile",
      icon: User,
    },
  ];

  return (
    <div className="w-64 h-screen bg-green-800 text-white flex flex-col p-6 shadow-lg">
      
      {/* Logo / Title */}
      <h1 className="text-2xl font-bold mb-10 tracking-wide">
        🌾 FarmConnect
      </h1>

      {/* Menu */}
      <nav className="flex flex-col gap-2 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.key;

          return (
            <button
              key={item.key}
              onClick={() => setActiveSection(item.key)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                ${
                  isActive
                    ? "bg-green-600 shadow-md"
                    : "hover:bg-green-700"
                }`}
            >
              <Icon size={20} />
              <span className="text-sm font-medium">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <button
  onClick={handleLogout}
  className="flex items-center gap-3 px-4 py-3 mt-6 rounded-lg hover:bg-red-500 transition"
>
  <LogOut size={20} />
  <span className="text-sm font-medium">Logout</span>
</button>
    </div>
  );
}

export default Sidebar;