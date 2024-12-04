import React, { useState } from 'react'
import heart2 from '../assets/heart2.png'
import search from '../assets/search.png'
import user from '../assets/user.png'
import bag from '../assets/shopping-bag.png' 
import language from '../assets/language.png'
import {useCart} from './cartContext'

const Cart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => {
    return sum + (item.promotion || item.price) * item.quantity;
  }, 0);

  return (
    <div className="container">
      <div className="p-8">
        <div className="navbar fixed top-0 left-0 w-full bg-white shadow-md z-50 flex items-center ">
          <img
            src="https://th.bing.com/th/id/OIP.FPqaiQ5CFCAcFMvmnlxcDwHaE4?rs=1&pid=ImgDetMain"
            className="w-16 h-auto mx-8 my-5"
            alt="Logo"
          />

          <ul className="flex space-x-6">
            <li>
              <a href="/" className="">
                ผู้หญิง
              </a>
            </li>
            <li>
              <a href="/" className="">
                ผู้ชาย
              </a>
            </li>
            <li>
              <a href="/" className="">
                เด็กอ่อน
              </a>
            </li>
            <li>
              <a href="/" className="">
                เด็ก
              </a>
            </li>
            <li>
              <a href="/" className="">
                Sport
              </a>
            </li>
            <li>
              <a href="/" className="">
                Home
              </a>
            </li>
          </ul>
          <div className="flex space-x-6 items-center ml-auto mr-8">
            <a href="/">
              <img src={search} className="h-5 w-5" />
            </a>
            <a href="/">
              <img src={user} className="h-5 w-5" />
            </a>
            <a href="/">
              <img src={heart2} className="h-5 w-5" />
            </a>
            <div className='relative'> 
            <a href="./cart">
              <img src={bag} className="h-5 w-5" />
            </a>
            {totalItems > 0 &&(
              <span className='absolute right-1.5 text-xs font-bold text-center'>
                  {totalItems}
              </span>
            )}
            </div>
            <div className="flex items-center space-x-1">
              <img src={language} className="h-5 w-5" alt="Language Icon" />
              <select className="bg-white">
                <option>TH</option>
                <option>ENG</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold mt-10 mb-4 ml-5">ตะกร้าสินค้า</h1>
      {cart.length === 0 ? (
        <p className="text-xl ml-5">ไม่มีสินค้าในกระเป๋าช้อปปิ้งของคุณ!</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="p-4 bg-white shadow-md flex justify-between">
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p>
                    ${item.promotion || item.price}
                  </p>
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
          <div className="mt-6 pt-4">
            <h2 className="text-xl font-bold ml-5 mb-10">Total Price: ${totalPrice.toFixed(2)}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

