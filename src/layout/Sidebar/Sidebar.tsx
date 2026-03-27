import { ROUTES } from "@/constants";
import { NavLink } from "react-router-dom";
import { CaretLeftIcon, ChartBarIcon } from "@phosphor-icons/react";
import imglogo from "../../assets/finances-logo.png";

const Sidebar = () => {
  const navItems = [
    {
      to: ROUTES.HOME,
      label: "Home",
      icon: <ChartBarIcon size={20} />,
    },
  ];

  return (
    <aside className="bg-blue-400 text-white h-screen p-4 w-60">
      <div className="flex justify-end mb-2">
        <button className="text-black hover:text-white">
          {<CaretLeftIcon size={24} />}
        </button>
      </div>

      <div className="flex justify-center mb-4">
        <img src={imglogo} alt="Logo financias" className="h-20 w-auto" />
      </div>

      <nav>
        <ul className="flex flex-col gap-2">
          {navItems.map(({ to, label, icon }) => (
            <li key={to}>
              <NavLink to={to} className="block p-2 rounded bg-blue-500">
                <div className="flex gap-2 items-center text-black hover:text-white">
                  {icon}
                  {label}
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
