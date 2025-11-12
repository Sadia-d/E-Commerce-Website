
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { AppContext } from "../Context/AppContext";
import { Link } from "react-router";
import toast from "react-hot-toast";


const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(AppContext)
 
  const handleprocess = () =>{
    toast.success('successfully proceed to checkout ')
  }

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-200 p-10">
      <h1 className="text-3xl font-bold mb-10 text-center">Shopping Cart</h1>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Left: Cart Items */}
        <div className="md:col-span-2 space-y-6">
          {cart.length === 0 ? (
           <div className="text-center ">
              <p className="text-center py-6 text-2xl text-gray-600">Your cart is empty 🛍️</p>
           <Link to={'/'} className="px-8 border bg-blue-600 text-white rounded-xl text-lg py-1.5"> Continue shoping </Link>
           </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-5 rounded-xl shadow-md"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={item.image}
                    
                    className="w-20 h-20 object-contain rounded-lg"
                  />
                  <div>
                    <h3 className="font-bold text-2xl">{item.title}</h3>
                    <p className="text-gray-600 text-lg">${item.price.toFixed(2)}</p>
                  </div>
                </div>

                 <div>
                  
                       {item.stock <= 0 ? (
                      <p className="text-red-600 text-xl font-semibold">Stock Out</p>
                    ) : (
                      <p className="text-xl text-gray-800">Stock: {item.stock}</p>
                    )}
                 
                </div>
                    
                <div className="flex items-center gap-4">
                  {/* Quantity */}
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

        {/*  Order Summary */}
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
              onClick={handleprocess}
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
