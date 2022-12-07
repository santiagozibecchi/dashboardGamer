import React from "react";
import { RiCloseLine, RiDeleteBin6Line } from "react-icons/ri";

const Cart = ({ showOrder, setShowOrder }) => {
  return (
    <div
      className={`bg-[#1F1D28] lg:col-span-2 fixed lg:right-0 lg:w-[300px] top-0 w-full h-full  ${
        showOrder ? "right-0" : "-right-full"
      } transition-all z-50`}
    >
      <div className="relative pt-16 lg:pt-0 text-gray-300 p-8  h-full">
        <RiCloseLine
          onClick={() => setShowOrder(false)}
          className="absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-2xl lg:hidden"
        />
        <h1 className="text-2xl my-4">Order #513454</h1>
        {/* Pills */}
        <div className="flex items-center flex-wrap gap-4 mb-8">
          <button className="text-sm bg-[#ec7c6a] text-white py-2 px-2 rounded-xl ">
            Dine In
          </button>

          <button className="text-sm border border-gray-500 text-[#ec7c6a] py-2 px-2 rounded-xl ">
            To Go
          </button>

          <button className="text-sm border border-gray-500 text-[#ec7c6a] py-2 px-2 rounded-xl ">
            Delibery
          </button>
        </div>
        {/* Card */}
        <div>
          <div className="grid grid-cols-6 p-4">
            <h5 className="col-span-4">Item</h5>
            <h5>Qty</h5>
            <h5>Price</h5>
          </div>
          {/* Products */}
          <div className="h-[400px] lg:h-[270px] md:h-[750px] overflow-scroll scrollbar-hide">
            {/* Product */}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                {/* Product Description */}
                <div className="col-span-4 flex items-center gap-2">
                  <img src="comida.png" className="w-10 h-10 object-cover" />
                  <div>
                    <h5 className="text-sm">Spacy seasoned</h5>
                    <p className="text-xs text-gray-500">$123</p>
                  </div>
                </div>
                {/* Quantity */}
                <div className="col-span-1">
                  <span>2</span>
                </div>
                {/* Price */}
                <div className="col-span-1">
                  <span>$4.58</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    placeholder="Order note..."
                    className="bg-[#1F1D28] py-1 px-4 rounded-lg outline-none lg:max-w-[150px]"
                  />
                </form>
                <div className="col-span-1 text-center">
                  <button className="border border-red-500 p-2 text-red-500 rounded-lg">
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            </div>
            {/* Product */}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                {/* Product Description */}
                <div className="col-span-4 flex items-center gap-2">
                  <img src="comida.png" className="w-10 h-10 object-cover" />
                  <div>
                    <h5 className="text-sm">Spacy seasoned</h5>
                    <p className="text-xs text-gray-500">$123</p>
                  </div>
                </div>
                {/* Quantity */}
                <div className="col-span-1">
                  <span>2</span>
                </div>
                {/* Price */}
                <div className="col-span-1">
                  <span>$4.58</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    placeholder="Order note..."
                    className="bg-[#1F1D28] py-1 px-4 rounded-lg outline-none lg:max-w-[150px]"
                  />
                </form>
                <div className="col-span-1 text-center">
                  <button className="border border-red-500 p-2 text-red-500 rounded-lg">
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            </div>
            {/* Product */}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                {/* Product Description */}
                <div className="col-span-4 flex items-center gap-2">
                  <img src="comida.png" className="w-10 h-10 object-cover" />
                  <div>
                    <h5 className="text-sm">Spacy seasoned</h5>
                    <p className="text-xs text-gray-500">$123</p>
                  </div>
                </div>
                {/* Quantity */}
                <div className="col-span-1">
                  <span>2</span>
                </div>
                {/* Price */}
                <div className="col-span-1">
                  <span>$4.58</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    placeholder="Order note..."
                    className="bg-[#1F1D28] py-1 px-4 rounded-lg outline-none lg:max-w-[150px]"
                  />
                </form>
                <div className="col-span-1 text-center">
                  <button className="border border-red-500 p-2 text-red-500 rounded-lg">
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            </div>
            {/* Product */}
            <div className="bg-[#262837] p-4 rounded-xl mb-4">
              <div className="grid grid-cols-6 mb-4">
                {/* Product Description */}
                <div className="col-span-4 flex items-center gap-2">
                  <img src="comida.png" className="w-10 h-10 object-cover" />
                  <div>
                    <h5 className="text-sm">Spacy seasoned</h5>
                    <p className="text-xs text-gray-500">$123</p>
                  </div>
                </div>
                {/* Quantity */}
                <div className="col-span-1">
                  <span>2</span>
                </div>
                {/* Price */}
                <div className="col-span-1">
                  <span>$4.58</span>
                </div>
              </div>
              {/* Note */}
              <div className="grid grid-cols-6 items-center">
                <form className="col-span-5">
                  <input
                    type="text"
                    placeholder="Order note..."
                    className="bg-[#1F1D28] py-1 px-4 rounded-lg outline-none lg:max-w-[150px]"
                  />
                </form>
                <div className="col-span-1 text-center">
                  <button className="border border-red-500 p-2 text-red-500 rounded-lg">
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Payment */}
        <div className="bg-[#262837] absolute bottom-0 left-0 p-4 w-full">
          <div className="flex items-center justify-between mb-5">
            <span className="text-gray-400">Discount</span>
            <span>$0.00</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-400">Subtotal</span>
            <span>$19.00</span>
          </div>
          <div>
            <button className="bg-[#ec7c6a] w-full rounded-lg py-1">
              Continue Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
