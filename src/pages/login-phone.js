import React from 'react'
import Nav from './navbar'
import flag from '../assets/thailand.png'
const Phone = () => {
  return (
    <div className="container">
    <Nav />
    <div className="flex items-center justify-center h-screen mt-8">
      <div className=" max-w-lg p-6 bg-white  rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-left">เข้าสู่ระบบด้วยเบอร์โทรศัพท์</h1>
        <p className="text-sm mb-6 text-left">
            หากคุณมีบัญชี H&M ออนไลน์อยู่แล้ว เพียงใช้อีเมลที่เคยลงทะเบียนไว้ในการเข้าสู่ระบบสมาชิกของคุณได้ทันที
        </p>
        <div className="flex flex-col space-y-4">
        <h5 className='text-sm'>หมายเลขโทรศัพท์</h5>
            <div className='flex justify-between'>
                <div className="w-1/6 h-14 py-2 border border-black p-4"><img src={flag} alt='flag' className='h-10 w-10'/></div>                
                <input type='text' placeholder='09X-XXX-XXXX' className="w-4/5 h-14 py-2 border border-black p-4">
                </input >                
            </div>
        
          <h5 className='text-sm'>รหัสผ่านปัจจุบัน</h5>
          <input type='text' className="w-full h-14 py-2 border border-black p-4">
        </input>
        <div className='flex justify-between'>
            <div className='flex '>
            <input type='checkbox' className='h-7 w-7'></input>
            <h5 className='mx-3 text-sm'>จดจำฉัน</h5>
            </div>
            <h5 className='text-sm'>ลืมรหัสผ่านหรือไม่</h5>
        </div>
        <button className='w-full h-14 py-2 border border-black bg-black text-white'>ลงชื่อเข้าใช้</button>
        <h5 className='text-center'>หรือ</h5>
        <a href='/email'><button className='w-full h-14 py-2 border border-black '>เข้าสู่ระบบด้วยอีเมล</button></a>
        </div>
        <h5 className='text-center m-8 text-sm text-bold'><a href='/sign-up'>สมัครสมาชิก</a></h5>
        <h5 className='text-center m-8 text-sm text-bold'>ข้อมูลสมาชิก</h5>
      </div>
    </div>
  </div>
  )
}

export default Phone
