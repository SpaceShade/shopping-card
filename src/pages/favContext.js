import React, { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem("favorites");
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (product) => {
        setFavorites((prevFavorites) => {
            if (!prevFavorites.some((item) => item.id === product.id)) {
                return [...prevFavorites, product];
            }
            return prevFavorites;
        });
    };
    // const removeFromFavorites = (id) => {
    //     setFavorites((prevFavorites) =>
    //         prevFavorites.filter((item) => item.id !== id)
    //     );
    // };
    const removeFromFavorites = (id) => {
        setFavorites((prevFavorites) => {
            const updatedFavorites = prevFavorites.filter((item) => item.id !== id);
            return updatedFavorites;
        });
    };
    
    
    // const removeFromFavorites = (id) => {
    //     setFavorites(favorites.filter((item) => item.id !== id));
    // };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};
