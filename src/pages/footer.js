import React from 'react'
import facebook from '../assets/facebook.png'
import ig from '../assets/instagram.png'
import line from '../assets/line.png'
import youtube from '../assets/youtube.png'
const Footer = () => {
  return (
    <div>
    
        <div className='grid grid-cols-4 gap-4 p-4 mx-4'>
            <div className='grid grid-cols-1 space-y-3'>
            <h1>ช้อป</h1>
            <a href='/'>ผู้หญิง</a>
            <a href='/'>ผู้ชาย</a>
            <a href='/'>เด็กอ่อน</a>
            <a href='/'>เด็ก</a>
            <a href='/'>Sport</a>
            <a href='/'>H&M HOME</a>
            </div>
            <div className='grid grid-cols-1 space-y-3'>
            <h1>ข้อมูลองค์กร</h1>
            <a href='/'>ร่วมงานกับ H&M</a>
            <a href='/'>เกี่ยวกับกลุ่มบริษัท H&M</a>
            <a href='/'>ความยั่งยืน</a>
            <a href='/'>ข่าวประชาสัมพันธ์</a>
            <a href='/'>นักลงทุนสัมพันธ์</a>
            <a href='/'>การกำกับดูแลกิจการ</a>
            </div>
            <div className='grid grid-cols-1 space-y-3'>
            <h1>ช่วยเหลือ</h1>
            <a href='/'>แผนกบริการลูกค้า</a>
            <a href='/'>H&M ของฉัน</a>
            <a href='/'>ที่ตั้งร้าน H&M</a>
            <a href='/'>กฎหมายและความเป็นส่วนตัว</a>
            <a href='/'>ติดต่อ</a>
            </div>
            <div className='grid grid-cols-1 space-y-3 '>
            <h1>ลงทะเบียนกับเรา</h1>
            <a href='/'>ลงทะเบียนและรับส่วนลด 20% สำหรับคำสั่งซื้อแรก!</a>
            <a href='/'>ลงทะเบียน</a>
            </div>
        </div>
        
        <img src='https://logodownload.org/wp-content/uploads/2014/04/h-m-logo.png' alt='logo' className='w-14 h-auto mx-8 my-12' />
        <div className='flex space-x-1 mx-8 '> 
        <a href='/' className=' text-sm'>Thailand</a>
        <h1 className=' text-sm'> | ฿</h1>
        </div>
        <div className='flex justify-between mr-8'>
        <p className='mx-8 mt-12 mb-16 text-sm w-4/6'>แนวคิดในการดำเนินธุรกิจของ H&M คือการนำเสนอแฟชั่นและคุณภาพในราคาคุ้มค่าด้วยวิธีการที่ยั่งยืน H&M ได้เติบโตขึ้นโดยเริ่มจากการก่อตั้งบริษัทขึ้นในปีค.ศ. 1947 จนกระทั่งกลายเป็นผู้นำด้านสินค้าแฟชั่นระดับโลกในปัจจุบัน ซึ่งเนื้อหาในไซต์นี้ได้รับการคุ้มครองลิขสิทธิ์และเป็นทรัพย์สินของ H&M Hennes & Mauritz AB</p>
        <div className='flex space-x-5 mt-14'>
        <img src={facebook} alt='facebook' className='w-8 h-8'/> 
        <img src={line} alt='facebook' className='w-8 h-8'/> 
        <img src={ig} alt='facebook' className='w-8 h-8'/> 
        <img src={youtube} alt='facebook' className='w-8 h-8'/> 
        </div>
        </div>
    </div>
  )
}

export default Footer
