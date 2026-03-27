import { ROUTES } from "@/constants";
import { NavLink } from "react-router-dom";
import { CaretLeftIcon, ChartBarIcon, ListIcon } from "@phosphor-icons/react";
import imglogo from "../../assets/finances-logo.png";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const navItems = [
    {
      to: ROUTES.HOME,
      label: "Home",
      icon: <ChartBarIcon size={20} />,
    },
  ];

  return (
    <aside
      className={`bg-blue-400 text-white h-screen p-4 ${isOpen ? "w-60" : "w-20"} transition-all duration-300`}
    >
      <div className={`flex ${isOpen ? "justify-end" : "justify-center"} mb-2`}>
        <button
          onClick={toggleSidebar}
          className="text-black hover:text-white transition"
        >
          {isOpen ? <CaretLeftIcon size={24} /> : <ListIcon size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="flex justify-center mb-4">
          <img src={imglogo} alt="Logo financias" className="h-20 w-auto" />
        </div>
      )}

      <nav>
        <ul className="flex flex-col gap-2 text-black hover:text-white">
          {navItems.map(({ to, label, icon }) => (
            <li key={to}>
              <NavLink to={to} className="block p-2 rounded bg-blue-500">
                <div
                  className={`flex gap-2 ${isOpen ? "justify-start" : "justify-center"}`}
                >
                  {icon}
                  {isOpen && <span>{label}</span>}
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export { Sidebar };
