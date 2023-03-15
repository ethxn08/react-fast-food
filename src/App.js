import { useState } from "react";
import {
  RiAddLine,
  RiMenu3Fill,
  RiUserLine,
  RiPieChartLine,
  RiCloseLine,
  RiSearch2Line,
  RiArrowDownLine,
  RiDeleteBin2Line,
} from "react-icons/ri";
import SideBar from "./components/shared/SideBar";
import hamburguesa from "./assets/hamburguesa.png";
import espirales from "./assets/espirales.png";
import marisco_ensalada from "./assets/marisco_ensalada.png";
import pancake from "./assets/pancake.png";
import papas from "./assets/papas.png";
import pez from "./assets/pez.png";

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
      {/*
      <nav className="lg:hidden bg-[#1F1D2B] fixed w-full bottom-0 left-0 text-3xl text-gray-400 p-4 flex items-center justify-between py-4 px-8 rounded-tl-xl rounded-tr-xl z-50 ">
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
      */}

      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8 mb-16 h-full">
        <div className="lg:col-span-6 ml-2 h-full">
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

            <div className="flex items-center justify-between mb-8 mt-4">
              <h2 className="text-xl text-gray-300">Chose Dishes</h2>
              <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
                <RiArrowDownLine /> Dine in
              </button>
            </div>
            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Card */}
              <div className="p-8 relative">
                <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-4 ">
                  <img src={hamburguesa} className="w-50 h-50 object-contain" />
                  <p className="mb-2">Hamburguer and Chips</p>
                  <button className="rounded-xl bg-[#ec7c6a] text-white text-center p-2">
                    Add To Cart
                  </button>
                </div>
                <div className="w-20 h-10 top-4 right-2 absolute rounded-xl bg-[#ec7c6a] text-white text-center p-1">
                  <p className="text-xl">$4.99</p>
                </div>
              </div>
              {/* Card */}
              <div className="p-8 relative">
                <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-4 ">
                  <img src={espirales} className="w-50 h-50 object-contain" />
                  <p className="mb-2">Honey Cheddar Cheese Swirls</p>
                  <button className="rounded-xl bg-[#ec7c6a] text-white text-center p-2">
                    Add To Cart
                  </button>
                </div>
                <div className="w-20 h-10 top-4 right-2 absolute rounded-xl bg-[#ec7c6a] text-white text-center p-1">
                  <p className="text-xl">$4.20</p>
                </div>
              </div>
              {/* Card */}
              <div className="p-8 relative">
                <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-4 ">
                  <img
                    src={marisco_ensalada}
                    className="w-50 h-50 object-contain"
                  />
                  <p className="mb-2">Seafood salad</p>
                  <button className="rounded-xl bg-[#ec7c6a] text-white text-center p-2">
                    Add To Cart
                  </button>
                </div>
                <div className="w-20 h-10 top-4 right-2 absolute rounded-xl bg-[#ec7c6a] text-white text-center p-1">
                  <p className="text-xl">$6.90</p>
                </div>
              </div>
              {/* Card */}
              <div className="p-8 relative">
                <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-4 ">
                  <img src={pancake} className="w-40 h-40 object-contain" />
                  <p className="mb-2">Pancakes</p>
                  <button className="rounded-xl bg-[#ec7c6a] text-white text-center p-2">
                    Add To Cart
                  </button>
                </div>
                <div className="w-20 h-10 top-4 right-2 absolute rounded-xl bg-[#ec7c6a] text-white text-center p-1">
                  <p className="text-xl">$3.82</p>
                </div>
              </div>
              {/* Card */}
              <div className="p-8 relative">
                <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-4 ">
                  <img src={papas} className="w-50 h-50 object-contain" />
                  <p className="mb-2">Chips</p>
                  <button className="rounded-xl bg-[#ec7c6a] text-white text-center p-2">
                    Add To Cart
                  </button>
                </div>
                <div className="w-20 h-10 top-4 right-2 absolute rounded-xl bg-[#ec7c6a] text-white text-center p-1">
                  <p className="text-xl">$4.99</p>
                </div>
              </div>
              {/* Card */}
              <div className="p-8 relative">
                <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-4 ">
                  <img src={pez} className="w-50 h-50 object-contain" />
                  <p className="mb-2">Fish</p>
                  <button className="rounded-xl bg-[#ec7c6a] text-white text-center p-2">
                    Add To Cart
                  </button>
                </div>
                <div className="w-20 h-10 top-4 right-2 absolute rounded-xl bg-[#ec7c6a] text-white text-center p-1">
                  <p className="text-xl">$8.99</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        {/* Orders */}
        <div className="lg:col-span-2 fixed lg:static right-0 top-0 bg-[#1F1D2B] w-full h-full">
          {/* Orders Header */}
          <div className="relative pt-2 text-gray-300 h-full overflow-y-scroll">
            <div className="p-8">
              <RiCloseLine className="absolute right-0 top-0 box-content text-gray-300 bg-[#26283785] p-3 m-4 rounded-full text-xl" />
              <h1 className="text-2xl my-4">Order #142537</h1>
              {/* Order Location */}
              <div className="flex items-center gap-4 flex-wrap mb-8">
                <button className="bg-[#ec7c6a] text-white py-2 px-2 rounded-xl">
                  Dine In
                </button>
                <button className="text-[#ec7c6a] py-2 px-2 border border-gray-500 rounded-xl">
                  To Go
                </button>
                <button className="text-[#ec7c6a] py-2 px-2 border border-gray-500 rounded-xl">
                  Delivery
                </button>
              </div>
            </div>

            {/* Order Info*/}
            <div>
              <div className="p-8">
                <div className="grid grid-cols-6 mb-6 items-center">
                  <h5 className="col-span-4 ">Item</h5>
                  <h5>Qty</h5>
                  <h5>Price</h5>
                </div>
                {/* Order Card*/}
                <div className="bg-[#262837] p-2 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    {/* Product Description */}
                    <div className="col-span-4 flex items-center gap-2">
                      <img
                        src={hamburguesa}
                        className="w-14 h-14 object-contain"
                      />
                      <div>
                        <h5 className="text-sm">Hamburguer and Chips</h5>
                        <p className="text-xs text-gray-400 mt-2">$4.99</p>
                      </div>
                    </div>
                    {/* Product Qty  */}
                    <div className="">
                      <span>2</span>
                    </div>

                    {/* Product Price  */}
                    <div>
                      <span>$9.98</span>
                    </div>
                  </div>
                  {/*Note */}
                  <div className="grid grid-cols-6 items-center gap-12">
                    <form className="col-span-4">
                      <input
                        type="text"
                        className="bg-[#1F1D2B] py-1 px-4 rounded-lg"
                        placeholder="Order now..."
                      />
                    </form>
                    <div className="col-span-2 text-center">
                      <button className="border border-[#ec7c6a] rounded-lg  p-2">
                        <RiDeleteBin2Line />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Submit payment */}
            <div className="bg-[#262837] absolute bottom-0 p-4 w-full">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">Discount</span>
                <span>0$</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">Subtotal</span>
                <span>9.98$</span>
              </div>
              <div>
                <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">
                  Continue To Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
