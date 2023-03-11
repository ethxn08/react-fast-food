import { useState } from "react";
import {
  RiAddLine,
  RiMenu3Fill,
  RiUserLine,
  RiPieChartLine,
  RiCloseLine,
  RiSearch2Line,
  RiArrowDownLine,
} from "react-icons/ri";
import SideBar from "./components/shared/SideBar";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <SideBar showMenu={showMenu} />
      {/*Menu mobile*/}
      <nav className="lg:hidden bg-[#1F1D2B] fixed w-full bottom-0 left-0 text-3xl text-gray-400 p-4 flex items-center justify-between py-4 px-8 rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUserLine />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button className="p-2">
          <RiPieChartLine />
        </button>
        <button className="text-white p-2" onClick={toggleMenu}>
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>

      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
        <div className="lg:col-span-6">
          {/* Header */}
          <header className="p-4">
            <div className="flex flex-col gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300">JEager Resto</h1>
                <h1 className="text-gray-500">10 Marzo 2022</h1>
              </div>
              <form>
                <div className="w-full relative">
                  <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    type="text"
                    className="bg-[#1F1D2B] w-full py-2 pl-8 pr-4 rounded-lg text-gray-300 outline-none"
                    placeholder="Search for food..."
                  />
                </div>
              </form>
            </div>
            {/* Tabs */}

            <nav className="text-gray-300 grid grid-cols-4 text-center items-center justify-between">
              <a
                href="#"
                className="border-b py-2 pr-4 border-[#ec7c6a] text-[#ec7c6a]"
              >
                Hot Dishes
              </a>
              <a href="#" className="border-b py-2 pr-4">
                Cold Dishes
              </a>
              <a href="#" className="border-b py-2 pr-4">
                Hot Soup
              </a>
              <a href="#" className="border-b py-2 pr-4">
                BBQ Grill
              </a>
            </nav>

            <div className="flex items-center justify-between  mt-4">
              <h2 className="text-xl text-gray-300">Chose Dishes</h2>
              <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
                <RiArrowDownLine /> Dine in
              </button>
            </div>
          </header>
        </div>
        <div className="lg:col-span-2 fixed lg:static right-0">Carrito</div>
      </main>
    </div>
  );
}

export default App;
