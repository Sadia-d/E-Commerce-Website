import { useContext } from "react";

import { FaTrash } from "react-icons/fa";
import { AppContext } from "../Context/AppContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity }
  =useContext(AppContext);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold mb-10 text-center">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Left: Cart Items */}
        <div className="md:col-span-2 space-y-6">
          {cart.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty 🛍️</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-5 rounded-xl shadow-md"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-500">${item.price.toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* Quantity buttons */}
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-2 py-1 border rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right: Order Summary */}
        <div className="bg-white p-6 rounded-xl shadow-md h-fit">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </div>
          <button
            disabled={cart.length === 0}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold disabled:bg-gray-300"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
