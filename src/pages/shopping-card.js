import React, { useState } from 'react'
import shoppingcart from '../assets/shopping-cart.png'
import heart from '../assets/heart.png'
import heart2 from '../assets/heart2.png'
import search from '../assets/search.png'
import user from '../assets/user.png'
import bag from '../assets/shopping-bag.png' 
import language from '../assets/language.png'
import {useCart} from './cartContext'
function Card() {
    const {addToCart}= useCart();
    const [products]=useState([
        {id:1, name:"Line-Pattern Zipper Sweatshirt", price :200, type:"NEW", img:'https://th.bing.com/th/id/OIP.mkcNrFTGIuIH9gm4WZ0oTQHaLH?w=1200&h=1801&rs=1&pid=ImgDetMain'},
        {id:2, name:"Black Fantasy Sweatshirt", price :200, img:'https://th.bing.com/th/id/OIP.wbBjnw1bwiOocTkzBT45WQHaLG?w=1200&h=1799&rs=1&pid=ImgDetMain' },
        {id:3, name:"Brooklyn-NYC Sweatshirt", price :420, promotion:200 ,type:"BEST SELLER", img:'https://th.bing.com/th/id/OIP.I5qnGfHzTtmbwBgkwk82zgHaLH?w=1200&h=1800&rs=1&pid=ImgDetMain'},
        {id:4, name:"Basic Plain Shirt", price :420, promotion:200,type:"HOT PROMO", img:'https://cdnp.sanmar.com/medias/sys_master/images/images/h1b/h55/10363107475486/437-SOrange-1-18600SOrangeModelFront1-1200W.jpg'},
        {id:5, name:"Basic Orange Sweatshirt", price :200,type:"NEW", img:'https://th.bing.com/th/id/OIP.APr__6cZBw0iDSZkM4XQrQHaLH?w=1200&h=1801&rs=1&pid=ImgDetMain' },
        {id:6, name:"Alui Sweatshirt X Alvent G", price :200, img:'https://th.bing.com/th/id/OIP.VJr-j-zaVxtf1nIIFT9FoQHaLH?w=1200&h=1800&rs=1&pid=ImgDetMain' },
        {id:7, name:"Flowers Printed Sweatshirt", price :420, promotion:200,type:"HOT PROMO", img:'https://cdn.shopify.com/s/files/1/0459/0781/products/437-SafetyGreen-1-18600SafetyGreenModelFront1-1200W_0fede556-c5b4-4901-974f-b3888cf94d0d.jpg?v=1595584028' },
        {id:8, name:"Relaxed Fit Printed Sweatshirt", price :200,type:"NEW", img:'https://th.bing.com/th/id/OIP.ZCkSfDd7G8p9VmQ80ViU1QHaLH?w=1200&h=1800&rs=1&pid=ImgDetMain' },
        {id:9, name:"Letter Pattern Knitted Vest", price :200, img:'https://th.bing.com/th/id/OIP.vr_ip6LSpKZDNQDEWOTXTQHaLH?w=1200&h=1800&rs=1&pid=ImgDetMain' }
    ])
    const [cart, setCart] = useState([]);
  return (
    <div className='container'>
        <div className='p-8'>
        <div className='navbar fixed top-0 left-0 w-full bg-white shadow-md z-50 flex items-center '>
    <img 
      src="https://th.bing.com/th/id/OIP.FPqaiQ5CFCAcFMvmnlxcDwHaE4?rs=1&pid=ImgDetMain" 
      className='w-16 h-auto mx-8 my-5'
      alt='Logo'
    />
        
    <ul className='flex space-x-6'>
      <li>
        <a href='/' className=''>ผู้หญิง</a>
      </li>
      <li>
        <a href='/' className=''>ผู้ชาย</a>
      </li>
      <li>
        <a href='/' className=''>เด็กอ่อน</a>
      </li>
      <li>
        <a href='/' className=''>เด็ก</a>
      </li>
      <li>
        <a href='/' className=''>Sport</a>
      </li>
      <li>
        <a href='/' className=''>Home</a>
      </li>
    </ul>
            <div className='flex space-x-6 items-center ml-auto mr-8'>
            <a href='/'><img src={search} className='h-5 w-5'/></a>
            <a href='/'><img src={user} className='h-5 w-5'/></a>
            <a href='/'><img src={heart2} className='h-5 w-5'/></a>
            <a href='./cart'><img src={bag} className='h-5 w-5'/></a>
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

    <div className='flex justify-center items-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10 w-9/12 h-auto ' >
            {products.map((product)=>(
                <div className='bg-white rounded-xl flex flex-col p-4 shadow-md relative'>
                {product.type &&( 
                    <button className='absolute w-auto h-10 bg-purple-200 text-purple-700 font-bold rounded-md p-2

                    }'>{product.type}</button>
                )}
                
                <img src={heart} className='h-8 w-8 absolute right-6 top-6 '/>
                <img src={product.img}/>
                <h3 className='font-semibold text-lg mt-2'>{product.name}</h3>
                <h5 className='text-gray-500 text-sm mt-5'>Price</h5>
                <div className="flex items-center justify-between space-x-3">
                <div className="flex items-center space-x-3">
                {product.promotion ?(
                    <>
                    <h3 className='text-lg font-bold text-black'>${product.promotion}</h3>
                    <h3 className='text-gray-500 text-sm line-through'>${product.price}</h3>
                    </>
                ):(
                    <h3 className='text-lg font-bold text-black'>${product.price}</h3>
                )}
                </div>
                    <button onClick={()=> addToCart(product)} className='bg-blue-700 rounded-lg w-12 h-12 flex justify-center items-center -mt-6 '>
                    <img src={shoppingcart} alt="cart" className='h-10 w-10 p-2'/>
                    </button>
                </div>
            </div>
        ))}
        </div>
    </div>
    </div>
  )
}

export default Card
