import React, { useState } from 'react';
import shoppingcart from '../assets/shopping-cart.png';
import heart from '../assets/heart.png';
import heartFilled from '../assets/heartFilled.png';
import { useCart } from './cartContext';
// import { useFavorites } from './favContext';
import Navbar from './navbar';
import { BrowserView, MobileView } from 'react-device-detect';
import Footer from './footer';
import Button from '../component/button';
function Card() {
    const { addToCart, toggleFavorite ,favorites } = useCart();
    // const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
    const [products, setProducts] = useState([
        { id: 1, name: 'Line-Pattern Zipper Sweatshirt', price: 200, type: 'NEW', img: 'https://th.bing.com/th/id/OIP.mkcNrFTGIuIH9gm4WZ0oTQHaLH?w=1200&h=1801&rs=1&pid=ImgDetMain', isFavorite: false },
        { id: 2, name: 'Black Fantasy Sweatshirt', price: 200, img: 'https://th.bing.com/th/id/OIP.wbBjnw1bwiOocTkzBT45WQHaLG?w=1200&h=1799&rs=1&pid=ImgDetMain', isFavorite: false },
        { id: 3, name: 'Brooklyn-NYC Sweatshirt', price: 420, promotion: 200, type: 'BEST SELLER', img: 'https://th.bing.com/th/id/OIP.I5qnGfHzTtmbwBgkwk82zgHaLH?w=1200&h=1800&rs=1&pid=ImgDetMain', isFavorite: false },
        { id: 4, name: 'Basic Plain Shirt', price: 420, promotion: 200, type: 'HOT PROMO', img: 'https://cdnp.sanmar.com/medias/sys_master/images/images/h1b/h55/10363107475486/437-SOrange-1-18600SOrangeModelFront1-1200W.jpg', isFavorite: false },
        { id: 5, name: 'Basic Orange Sweatshirt', price: 200, type: 'NEW', img: 'https://th.bing.com/th/id/OIP.APr__6cZBw0iDSZkM4XQrQHaLH?w=1200&h=1801&rs=1&pid=ImgDetMain', isFavorite: false },
        { id: 6, name: 'Alui Sweatshirt X Alvent G', price: 200, img: 'https://th.bing.com/th/id/OIP.VJr-j-zaVxtf1nIIFT9FoQHaLH?w=1200&h=1800&rs=1&pid=ImgDetMain', isFavorite: false },
        { id: 7, name: 'Flowers Printed Sweatshirt', price: 420, promotion: 200, type: 'HOT PROMO', img: 'https://cdn.shopify.com/s/files/1/0459/0781/products/437-SafetyGreen-1-18600SafetyGreenModelFront1-1200W_0fede556-c5b4-4901-974f-b3888cf94d0d.jpg?v=1595584028', isFavorite: false },
        { id: 8, name: 'Relaxed Fit Printed Sweatshirt', price: 200, type: 'NEW', img: 'https://th.bing.com/th/id/OIP.ZCkSfDd7G8p9VmQ80ViU1QHaLH?w=1200&h=1800&rs=1&pid=ImgDetMain', isFavorite: false },
        { id: 9, name: 'Letter Pattern Knitted Vest', price: 200, img: 'https://th.bing.com/th/id/OIP.vr_ip6LSpKZDNQDEWOTXTQHaLH?w=1200&h=1800&rs=1&pid=ImgDetMain', isFavorite: false },
    ]);

    const isFavorite = (id) => favorites.some((fav) => fav.id === id);

    return (
        <div className="container">
            <Navbar />
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10 w-9/12 h-auto">
                    {products.map((product) => (
                        <div className="bg-white rounded-xl flex flex-col p-4 shadow-md relative" key={product.id}>
                            <BrowserView>
                                {product.type && (
                                    <button className="absolute w-20 h-auto bg-purple-200 text-purple-700 font-bold rounded-md p-2">
                                        {product.type}
                                    </button>
                                )}
                            </BrowserView>
                            <MobileView>
                                {product.type && (
                                    <button className="absolute left-1 top-1 w-14 h-auto bg-purple-200 text-purple-700 font-bold text-xs rounded-md p-2">
                                        {product.type}
                                    </button>
                                )}
                            </MobileView>
                            <img
                                src={isFavorite(product.id) ? heartFilled : heart}
                                alt="heart"
                                className="h-8 w-8 absolute right-6 top-6 cursor-pointer"
                                onClick={() => toggleFavorite(product)}
                            />
                            <img src={product.img} alt={product.name} />
                            <h3 className="font-semibold text-lg mt-2">{product.name}</h3>
                            <h5 className="text-gray-500 text-sm mt-5">Price</h5>
                            <div className="flex items-center justify-between space-x-3">
                                <div className="flex items-center space-x-3">
                                    {product.promotion ? (
                                        <>
                                            <h3 className="text-lg font-bold text-black">${product.promotion}</h3>
                                            <h3 className="text-gray-500 text-sm line-through">${product.price}</h3>
                                        </>
                                    ) : (
                                        <h3 className="text-lg font-bold text-black">${product.price}</h3>
                                    )}
                                </div>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="bg-blue-700 rounded-lg w-12 h-12 flex justify-center items-center -mt-6"
                                >
                                    <img src={shoppingcart} alt="cart" className="h-10 w-10 p-2" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <h1 class="mx-8 mb-3 text-sm">ผู้ชาย</h1>
      <p class="mx-8 mb-3 text-sm" >ให้คุณผู้ชายอัปเดตสไตล์ใหม่ ๆ ประจำซีซันไปกับ H&M ค้นพบไอเทมที่สามารถเลือกสวมใส่ในชีวิตประจำวันมากมาย เช่น เสื้อและเสื้อยืดหลากหลายสไตล์ หรือชุดสวมใส่อยู่บ้านและชุดชั้นในผู้ชายที่สวมใส่สบาย หากคุณกำลังมองหาสไตล์เป็นทางการสำหรับงานเลี้ยงที่กำลังมาถึง ต้องมาเลือกช้อปเสื้อเบลเซอร์และชุดสูทสุดเนี้ยบ สามารถแมตช์คู่กับกางเกงชิโน่ กางเกงจ็อกเกอร์ และกางเกงคาร์โก้ที่มีหลากหลายสีสันให้เลือก หรือใครกำลังมองหาไอเทมเดนิมสุดชิค เราก็รวบรวมกางเกงยีนส์ผู้ชายหลากหลายดีไซน์เพื่อให้เหมาะกับสไตล์ของคุณ ครบครันทั้งทรงสกินนี่ ทรงตรง และทรงขาสอบ และอื่น ๆ อีกมากมาย แมตช์คู่กับเสื้อเชิ้ตทรงหลวมสุดอินเทรนด์หรือเสื้อเชิ้ตเดนิม หรือในวันที่มีอากาศสบาย ๆ เราก็มัดรวมเสื้อแจ็คเก็ตและเสื้อโค้ท อย่างแจ็คเก็ตพัฟเฟอร์ และเสื้อแจ็คเก็ตบอมเบอร์ในโทนสีประจำซีซัน 
      </p>
        <div className='my-16 mx-8 flex space-x-3'>
        <Button text={"Print"}/>
        <Button text={"Utility"}/>
        <Button text={"Pastel colours"}/>
        <Button text={"Embroidered"}/>
        <Button text={"Graphic"}/>
        <Button text={"Tie-dye"}/>
        <Button text={"Sequin"}/>
        <Button text={"Grunge"}/>
        </div>
        <div className='flex space-x-1 mx-8 '> 
        <a href='/' className='my-16 text-sm'>HM.com</a>
        <h1 className='my-16 text-sm'>/ผู้ชาย</h1>
        </div>
            <Footer/>
        </div>
    );
}

export default Card;
