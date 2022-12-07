import { useState } from "react";
import {
  RiAddLine,
  RiPieChart2Fill,
  RiMenu3Fill,
  RiCloseLine,
  RiUser3Line,
  RiArrowDownLine,
} from "react-icons/ri";
import Card from "./components/shared/Card";
import Cart from "./components/shared/Cart";
import Header from "./components/shared/Header";
import Sidebar from "./components/shared/Sidebar";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrder = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
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
        <button onClick={toggleOrder} className="p-2">
          <RiPieChart2Fill />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 pb-20 lg:pr-[300px]">
        {/* CONTENT */}
        <div className="p-4 md:p-8">
          {/* HEADER */}
          <Header />
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
            <Card
              img="dish.png"
              description="Speacy seasoned seafefood nodles"
              price="5"
              inventory="20"
            />
            <Card
              img="comida.png"
              description="Speacy seasoned seafefood nodles"
              price="5"
              inventory="20"
            />
            <Card
              img="comida.png"
              description="Speacy seasoned seafefood nodles"
              price="5"
              inventory="20"
            />
            <Card
              img="comida.png"
              description="Speacy seasoned seafefood nodles"
              price="5"
              inventory="20"
            />
            <Card
              img="comida.png"
              description="Speacy seasoned seafefood nodles"
              price="5"
              inventory="20"
            />
            <Card
              img="comida.png"
              description="Speacy seasoned seafefood nodles"
              price="5"
              inventory="20"
            />
          </div>
        </div>

        {/* ORDERS */}
        <Cart showOrder={showOrder} setShowOrder={setShowOrder} />
      </main>
    </div>
  );
}

export default App;
