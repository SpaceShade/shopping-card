import React from 'react';
import Nav from './navbar';
const User = () => {
  return (
    <div className="container">
      <Nav />
      <div className="flex items-center justify-center h-screen ">
        <div className=" max-w-lg p-6 bg-white ">
          <h1 className="text-3xl font-bold mb-4 text-left">ลงชื่อเข้าใช้</h1>
          <p className="text-sm mb-6 text-left">
            หากคุณมีบัญชี H&M ออนไลน์อยู่แล้ว เพียงใช้อีเมลที่เคยลงทะเบียนไว้ในการเข้าสู่ระบบสมาชิกของคุณได้ทันที
          </p>
          <div className="flex flex-col space-y-4">
          <div>
          <a href="/phone">
            <button className="w-full h-14 py-2 border border-black ">
            เข้าสู่ระบบด้วยเบอร์โทรศัพท์</button>
          </a>
            </div>
          <a href="/email">  
            <button className="w-full h-14 py-2 border border-black ">
            เข้าสู่ระบบด้วยอีเมล </button>
          </a>
           
          </div>
          <p className="mt-10 text-center ">
           <a href="/sign-up">สมัครสมาชิก</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
