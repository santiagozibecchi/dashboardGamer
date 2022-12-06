import { useState } from "react";
import {
  RiAddLine,
  RiPieChart2Fill,
  RiMenu3Fill,
  RiCloseLine,
  RiUser3Line,
  RiSearch2Line,
  RiArrowDownLine,
} from "react-icons/ri";
import Sidebar from "./components/shared/Sidebar";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/* Menu móvil */}
      <nav className="bg-[#1F1D28] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 flex justify-around items-center px-8 py-2 rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button className="p-2">
          <RiPieChart2Fill />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
        {/* CONTENT */}
        <div className="lg:col-span-6 md:p-8">
          {/* HEADER */}
          <header className="">
            {/* TITLE AND SEARCH */}
            <div className="flex flex-col gap-4 mb-6 md:flex-row md:justify-between md:items-center ">
              <div>
                <h1 className="text-gray-300 text-2xl">Jeager Resto</h1>
                <p className="text-gray-500">5 Diciembre 2022</p>
              </div>
              <form>
                <div className="w-full relative">
                  <RiSearch2Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    placeholder="Search..."
                    type="text"
                    className="bg-[#1F1D28] w-full py-2 pl-8 pr-4 rounded-lg text-gray-300 outline-none"
                  />
                </div>
              </form>
            </div>
            {/* TABS */}
            <nav className="flex items-center text-gray-300 justify-between border-gray-400 border-b-[2px] mb-5 md:justify-start md:gap-10">
              <a
                href="#"
                className="relative py-2 before:absolute before:w-1/2 text-[#ec7c6a] before:h-[2px]  before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[2px]"
              >
                Hot dishes
              </a>

              <a href="#" className="py-2">
                Cold dogs
              </a>

              <a href="#" className="py-2">
                Soup
              </a>

              <a href="#" className="py-2">
                Grill
              </a>
            </nav>
          </header>
          {/* Title content */}
          <div className="text-gray-300 flex items-center justify-between mb-16">
            <h2>Show Dishes</h2>
            <button className="flex items-center gap-4 bg-[#1F1D28] py-2 px-4 rounded-lg">
              <RiArrowDownLine /> Dine in
            </button>
          </div>
          {/* CONTENT */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Card */}
            <div className="bg-[#1F1D28] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-2">
              <img
                src="comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafefood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls avaible</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D28] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-2">
              <img
                src="comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafefood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls avaible</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D28] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-2">
              <img
                src="comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafefood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls avaible</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D28] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-2">
              <img
                src="comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafefood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls avaible</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D28] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-2">
              <img
                src="comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafefood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls avaible</p>
            </div>
            {/* Card */}
            <div className="bg-[#1F1D28] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-2">
              <img
                src="comida.png"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Speacy seasoned seafefood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls avaible</p>
            </div>
          </div>
        </div>

        {/* ORDERS */}
        <div className="bg-[#1F1D28] lg:col-span-2 lg:static fixed right-0 top-0 w-full h-full">
          <div className="relative pt-16 text-gray-300 p-8">
            <RiCloseLine className="absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-2xl" />
            <h1 className="text-2xl my-4">Order #513454</h1>
            <div className="flex items-center flex-wrap gap-4">
              <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl ">
                Dine In
              </button>

              <button className="border border-gray-500 text-[#ec7c6a] py-2 px-4 rounded-xl ">
                To Go
              </button>

              <button className="border border-gray-500 text-[#ec7c6a] py-2 px-4 rounded-xl ">
                Delibery
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
