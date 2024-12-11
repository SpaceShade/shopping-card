import React from 'react'
import Nav from './navbar'
import flag from '../assets/thailand.png'
import step1 from '../assets/step1.png'
const SignUp = () => {
  return (
    <div className="container">
    <Nav />
    <div className="flex items-center justify-center h-screen ">
      <div className=" max-w-lg p-6 bg-white  rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-left">เข้าสู่ระบบด้วยเบอร์โทรศัพท์</h1>
        <p className="text-sm mb-6 text-left">
        หากคุณมีบัญชี H&M ออนไลน์อยู่แล้ว เพียงใช้อีเมลที่เคยลงทะเบียนไว้ในการเข้าสู่ระบบสมาชิกของคุณได้ทันที
        </p>
        <img src={step1} alt='step1'></img>
        <div className="flex flex-col space-y-4 mt-4">
        <h5 className='text-sm'>หมายเลขโทรศัพท์</h5>
            <div className='flex justify-between'>
                <div className="w-1/6 h-14 py-2 border border-black p-4"><img src={flag} alt='flag' className='h-10 w-10'/></div>                
                <input type='text' placeholder='09X-XXX-XXXX' className="w-4/5 h-14 py-2 border border-black p-4">
                </input >                
            </div>
        <button className='w-full h-14 py-2 border border-black bg-black text-white'>สมัครสมาชิก</button>
        <a href='/user'><button className='w-full h-14 py-2 border border-black '>ลงชื่อเข้าใช้</button></a>
        </div>
        <h5 className='text-center m-8 text-sm text-bold'>ข้อมูลสมาชิก</h5>
      </div>
    </div>
  </div>
  )
}

export default SignUp
