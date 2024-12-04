import React from 'react'
import Navbar from './navbar';
import {useCart} from './cartContext'

const Cart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => {
    return sum + (item.promotion || item.price) * item.quantity;
  }, 0);

  return (
    <div className="container">
      <Navbar/>
      <h1 className="text-3xl font-bold mt-10 mb-4 ml-5">ตะกร้าสินค้า</h1>
      {cart.length === 0 ? (
        <p className="text-xl ml-5">ไม่มีสินค้าในกระเป๋าช้อปปิ้งของคุณ!</p>
      ) : (
        <div>
          <ul className="space-y-4 p-4">
            {cart.map((item) => (
              <li key={item.id} className="p-4 bg-white shadow-md flex justify-between ">
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <div className="flex items-center space-x-2">
                    {item.promotion ? (
                      <>
                        <p className="text-red-500 ">${item.promotion}</p>
                        <p className="text-gray-500 line-through ">${item.price}</p>
                      </>
                    ) : (
                      <p>${item.price}</p>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 mt-2">
                    <button
                      onClick={() => decrementQuantity(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded"
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span className="font-bold text-center">{item.quantity}</span>
                    <button
                      onClick={() => incrementQuantity(item.id)}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 h-10 w-auto mt-8 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-4 items-center flex flex-col">
            <h2 className="text-xl font-bold mb-5">ราคารวมสินค้า: ${totalPrice.toFixed(2)}</h2>
            <button className='w-48 h-auto bg-black text-white rounded-sm py-2 text-lg mb-5'>
              ดำเนินการชำระเงิน
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

