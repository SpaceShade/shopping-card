import React from 'react'
import heart2 from '../assets/heart2.png'
import search from '../assets/search.png'
import user from '../assets/user.png'
import bag from '../assets/shopping-bag.png' 
import language from '../assets/language.png'
import { useCart } from './cartContext'
import { MobileView, BrowserView } from 'react-device-detect';
function Navbar (){
    const {totalItems } = useCart();
  return (
    <><BrowserView>
      <div className="container">
        <div className="p-8">
          <div className="navbar fixed top-0 left-0 w-full bg-white shadow-md z-50 flex items-center ">
            <img
              src="https://th.bing.com/th/id/OIP.FPqaiQ5CFCAcFMvmnlxcDwHaE4?rs=1&pid=ImgDetMain"
              className="w-16 h-auto mx-8 my-5"
              alt="Logo" />
            <ul className="flex space-x-6">
              <li><a href="/" className="">ผู้หญิง</a></li>
              <li><a href="/" className="">ผู้ชาย</a></li>
              <li><a href="/" className="">เด็กอ่อน</a></li>
              <li><a href="/" className="">เด็ก</a></li>
              <li><a href="/" className="">Sport</a></li>
              <li><a href="/" className="">Home</a></li>
            </ul>
            <div className="flex space-x-6 items-center ml-auto mr-8">
              <a href="/"><img src={search} className="h-5 w-5" alt='search' /></a>
              <a href="/"><img src={user} className="h-5 w-5" alt='user' /></a>
              <a href="/"><img src={heart2} className="h-5 w-5" alt='heart2' /></a>
              <div className='relative'>
                <a href="./cart">
                  <img src={bag} alt='bag' className="h-5 w-5" />
                </a>
                {totalItems > 0 && (
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
      </div>
    </BrowserView><MobileView>
        <div className="container">
          <div className="p-8">
            <div className="navbar fixed top-0 bg-white left-0 w-full z-50 flex items-center ">
              <img
                src="https://th.bing.com/th/id/OIP.FPqaiQ5CFCAcFMvmnlxcDwHaE4?rs=1&pid=ImgDetMain"
                className="w-10 h-auto mx-6 my-5"
                alt="Logo" />
              
              <div className="flex space-x-5 items-center ">
                <a href="/"><img src={search} className="h-5 w-5" alt='search' /></a>
                <a href="/"><img src={user} className="h-5 w-5" alt='user' /></a>
                <a href="/"><img src={heart2} className="h-5 w-5" alt='heart2' /></a>
                <div className='relative'>
                  <a href="./cart">
                    <img src={bag} alt='bag' className="h-5 w-5" />
                  </a>
                  {totalItems > 0 && (
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
              <div className="absolute -z-50 bg-white top-11 left-0 w-full  shadow-md">
                    <ul className="flex p-4 text-sm font-medium justify-between">
                      <li><a href="/" >ผู้หญิง</a></li>
                      <li><a href="/" >ผู้ชาย</a></li>
                      <li><a href="/" >เด็กอ่อน</a></li>
                      <li><a href="/" >เด็ก</a></li>
                      <li><a href="/" >SPORT</a></li>
                      <li><a href="/" >HOME</a></li>
                    </ul>
                  </div>

            </div>
          </div>
        </div>
      </MobileView></>
  )
}

export default Navbar
