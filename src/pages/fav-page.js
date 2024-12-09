import React from 'react';
import Navbar from './navbar';
import { useFavorites } from './favContext';

const Fav = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div className="container">
      <Navbar />
      <h1 className="text-3xl font-bold mt-10 mb-4 ml-5">Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-xl ml-5">No favorites added yet!</p>
      ) : (
        <div>
          <ul className="space-y-4 p-4">
            {favorites.map((item) => (
              <li key={item.id} className="p-4 bg-white shadow-md flex justify-between">
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <div className="flex items-center space-x-2">
                    {item.promotion ? (
                      <>
                        <p className="text-red-500">${item.promotion}</p>
                        <p className="text-gray-500 line-through">${item.price}</p>
                      </>
                    ) : (
                      <p>${item.price}</p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => removeFromFavorites(item.id)}
                  className="bg-red-500 text-white px-4 py-2 h-10 w-auto mt-8 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Fav;
