import React from 'react';
import { useFavorites } from './favContext';
import { useCart } from './cartContext';
import Nav from './navbar';
function Favorites() {
    const { favorites } = useFavorites();

//     return (
     
//         <div className="container"> <Nav/>
//             <h1 className=" text-3xl font-bold mt-10 mb-4 ml-5">Favorites</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
//               {favorites.length === 0 ? (
//                  <p>No fav</p> 
//               ) : (
//                 // {favorites.map((product) => (
//                 //   <div className="bg-white rounded-xl flex flex-col p-4 shadow-md" key={product.id}>
//                 //       <img src={product.img} alt={product.name} />
//                 //       <h3 className="font-semibold text-lg mt-2">{product.name}</h3>
//                 //       <h3 className="text-lg font-bold text-black">${product.price}</h3>
//                 //   </div>
//                 // ))} 
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 {favorites.map((product) => (
//                   <div
//                     key={product.id}
//                     className="relative border p-4 rounded shadow hover:shadow-lg"
//                   >
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-40 object-cover rounded mb-4"
//                     />
//                     <h2 className="text-lg font-semibold">{product.name}</h2>
//                     <div className="text-gray-600">
//                       <span>${product.promoPrice || product.price}</span>
//                     </div>
//                   </div>
//               )}
                
//             </div>
//         </div>
//     );
// }
console.log("Fav", favorites);
return (
  <div className="container mx-auto p-4">
    <Nav/>
    <h1 className="text-2xl font-bold mb-4 mt-8">Your Favorites</h1>
    {favorites.length === 0 ? (
      <p>No favorite products yet.</p>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {favorites.map((product) => (
          <div
            key={product.id}
            className="relative border p-4 rounded shadow hover:shadow-lg"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <div className="text-gray-600">
              <span>${product.promoPrice || product.price}</span>
            </div>
          </div>
        ))}
      </div>
      
    )}
    
  </div>
  
);

};

export default Favorites;
