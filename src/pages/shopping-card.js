import React from 'react'
import cart from '../assets/shopping-cart.png'
import heart from '../assets/heart.png'
function Card() {
  return (
    <div className='flex justify-center items-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10 w-9/12 h-auto ' >
            <div className='bg-white rounded-xl flex flex-col p-4 shadow-md relative'>
                <button className='absolute w-20 h-10 bg-purple-200 text-purple-700 font-bold rounded-md'>NEW</button>
                <img src={heart} className='h-8 w-8 absolute right-6 top-6 '/>
                <img src='https://th.bing.com/th/id/OIP.mkcNrFTGIuIH9gm4WZ0oTQHaLH?w=1200&h=1801&rs=1&pid=ImgDetMain' className=''/>
                <h3 className='font-semibold text-lg mt-2'>Line-Pattern Zipper Sweatshirt</h3>
                <h5 className='text-gray-500 text-sm mt-5'>Price</h5>
                <div className="flex items-center justify-between space-x-3">
                <h3 className='text-lg font-bold text-black'>$200</h3>
                    <button className='bg-blue-700 rounded-lg w-12 h-12 flex justify-center items-center -mt-6 '>
                    <img src={cart} alt="cart" className='h-10 w-10 p-2'/>
                    </button>
                </div>
            </div>
            <div className='bg-white rounded-xl flex flex-col p-4 shadow-md relative'>
                <img src={heart} className='h-8 w-8 absolute right-6 top-6 '/>
                <img src='https://th.bing.com/th/id/OIP.wbBjnw1bwiOocTkzBT45WQHaLG?w=1200&h=1799&rs=1&pid=ImgDetMain'></img>
                <h3 className='font-semibold text-lg mt-2'>Black Fantasy Sweatshirt</h3>
                <h5 className='text-gray-500 text-sm mt-5'>Price</h5>
                <div className="flex items-center justify-between space-x-3">
                <h3 className='text-lg font-bold text-black'>$200</h3>
                    <button className='bg-blue-700 rounded-lg w-12 h-12 flex justify-center items-center -mt-6 '>
                    <img src={cart} alt="cart" className='h-10 w-10 p-2'/>
                    </button>
                </div>
            </div>
            <div className='bg-white rounded-xl flex flex-col p-4 shadow-md relative'>
            <img src={heart} className='h-8 w-8 absolute right-6 top-6 '/>
                <button className='absolute w-28 h-10 bg-purple-200 text-purple-700 font-bold rounded-md p-1'>BEST SELLER</button>
                <img src='https://th.bing.com/th/id/OIP.I5qnGfHzTtmbwBgkwk82zgHaLH?w=1200&h=1800&rs=1&pid=ImgDetMain'></img>
                <h3 className='font-semibold text-lg mt-2'>Brooklyn-NYC Sweatshirt</h3>
                <h5 className='text-gray-500 text-sm mt-5'>Price</h5>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <h3 className="text-lg font-bold text-black">$200</h3>
                        <h5 className="text-gray-500 text-sm line-through">$420</h5>
                    </div>
                        <button className="bg-blue-700 rounded-lg w-12 h-12 flex justify-center items-center -mt-6">
                        <img src={cart} alt="cart" className="h-10 w-10 p-2" />
                        </button>
                </div>
            </div>
            <div className='bg-white rounded-xl flex flex-col p-4 shadow-md relative'>
                <button className='absolute w-28 h-10 bg-purple-200 text-purple-700 font-bold rounded-md'>HOT PROMO</button>
                <img src={heart} className='h-8 w-8 absolute right-6 top-6 '/>
                <img src='https://cdnp.sanmar.com/medias/sys_master/images/images/h1b/h55/10363107475486/437-SOrange-1-18600SOrangeModelFront1-1200W.jpg'></img>
                <h3 className='font-semibold text-lg mt-2'>Basic Plain Shirt</h3>
                <h5 className='text-gray-500 text-sm mt-5'>Price</h5>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <h3 className="text-lg font-bold text-black">$200</h3>
                        <h5 className="text-gray-500 text-sm line-through">$420</h5>
                    </div>
                        <button className="bg-blue-700 rounded-lg w-12 h-12 flex justify-center items-center -mt-6">
                        <img src={cart} alt="cart" className="h-10 w-10 p-2" />
                        </button>
                </div>
            </div>
            <div className='bg-white rounded-xl flex flex-col p-4 shadow-md relative'>
                <button className='absolute w-20 h-10 bg-purple-200 text-purple-700 font-bold rounded-md'>NEW</button>
                <img src={heart} className='h-8 w-8 absolute right-6 top-6 '/>
                <img src='https://th.bing.com/th/id/OIP.APr__6cZBw0iDSZkM4XQrQHaLH?w=1200&h=1801&rs=1&pid=ImgDetMain'></img>
                <h3 className='font-semibold text-lg mt-2'>Basic Orange Sweatshirt</h3>
                <h5 className='text-gray-500 text-sm mt-5'>Price</h5>
                <div className="flex items-center justify-between space-x-3">
                <h3 className='text-lg font-bold text-black'>$200</h3>
                    <button className='bg-blue-700 rounded-lg w-12 h-12 flex justify-center items-center -mt-6 '>
                    <img src={cart} alt="cart" className='h-10 w-10 p-2'/>
                    </button>
                </div>
            </div>
            <div className='bg-white rounded-xl flex flex-col p-4 shadow-md relative'>
                <img src={heart} className='h-8 w-8 absolute right-6 top-6 '/>
                <img src='https://th.bing.com/th/id/OIP.VJr-j-zaVxtf1nIIFT9FoQHaLH?w=1200&h=1800&rs=1&pid=ImgDetMain'></img>
                <h3 className='font-semibold text-lg mt-2'>Alui Sweatshirt X Alvent G</h3>
                <h5 className='text-gray-500 text-sm mt-5'>Price</h5>
                <div className="flex items-center justify-between space-x-3">
                <h3 className='text-lg font-bold text-black'>$200</h3>
                    <button className='bg-blue-700 rounded-lg w-12 h-12 flex justify-center items-center -mt-6 '>
                    <img src={cart} alt="cart" className='h-10 w-10 p-2'/>
                    </button>
                </div>
            </div>
            <div className='bg-white rounded-xl flex flex-col p-4 shadow-md relative'>
                <button className=' absolute w-28 h-10 bg-purple-200 text-purple-700 font-bold rounded-md'>HOT PROMO</button>
                <img src={heart} className='h-8 w-8 absolute right-6 top-6 '/>
                <img src='https://cdn.shopify.com/s/files/1/0459/0781/products/437-SafetyGreen-1-18600SafetyGreenModelFront1-1200W_0fede556-c5b4-4901-974f-b3888cf94d0d.jpg?v=1595584028'></img>
                <h3 className='font-semibold text-lg mt-2'>Flowers Printed Sweatshirt</h3>
                <h5 className='text-gray-500 text-sm mt-5'>Price</h5>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <h3 className="text-lg font-bold text-black">$200</h3>
                        <h5 className="text-gray-500 text-sm line-through">$420</h5>
                    </div>
                        <button className="bg-blue-700 rounded-lg w-12 h-12 flex justify-center items-center -mt-6">
                        <img src={cart} alt="cart" className="h-10 w-10 p-2" />
                        </button>
                </div>
            </div>
            <div className='bg-white rounded-xl flex flex-col p-4 shadow-md relative'>
                <button className='absolute w-20 h-10 bg-purple-200 text-purple-700 font-bold rounded-md'>NEW</button>
                <img src={heart} className='h-8 w-8 absolute right-6 top-6 '/>
                <img src='https://th.bing.com/th/id/OIP.ZCkSfDd7G8p9VmQ80ViU1QHaLH?w=1200&h=1800&rs=1&pid=ImgDetMain'></img>
                <h3 className='font-semibold text-lg mt-2'>Relaxed Fit Printed Sweatshirt</h3>
                <h5 className='text-gray-500 text-sm mt-5'>Price</h5>
                <div className="flex items-center justify-between space-x-3">
                <h3 className='text-lg font-bold text-black'>$200</h3>
                    <button className='bg-blue-700 rounded-lg w-12 h-12 flex justify-center items-center -mt-6 '>
                    <img src={cart} alt="cart" className='h-10 w-10 p-2'/>
                    </button>
                </div>
            </div>
            <div className='bg-white rounded-xl flex flex-col p-4 shadow-md relative'>
                <img src={heart} className='h-8 w-8 absolute right-6 top-6 '/>
                <img src='https://th.bing.com/th/id/OIP.vr_ip6LSpKZDNQDEWOTXTQHaLH?w=1200&h=1800&rs=1&pid=ImgDetMain'></img>
                <h3 className='font-semibold text-lg mt-2'>Letter Pattern Knitted Vest</h3>
                <h5 className='text-gray-500 text-sm mt-5'>Price</h5>
                <div className="flex items-center justify-between space-x-3">
                <h3 className='text-lg font-bold text-black'>$200</h3>
                    <button className='bg-blue-700 rounded-lg w-12 h-12 flex justify-center items-center -mt-6 '>
                    <img src={cart} alt="cart" className='h-10 w-10 p-2'/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
