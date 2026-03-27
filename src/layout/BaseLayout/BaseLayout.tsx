import { AnimatePresence } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";

const BaseLayout = () => {
  const location = useLocation();

  return (
    <div className="flex h-screen w-full relative ">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex-1 p-6 overflow-auto relative">
          <AnimatePresence>
            <Outlet key={location.pathname} />
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export { BaseLayout };
