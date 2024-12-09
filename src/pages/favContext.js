import React, { createContext, useState, useContext } from "react";

// Create Favorites Context
const FavoritesContext = createContext();

// Favorites Provider Component
export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    // Add item to favorites
    const addFavorite = (item) => {
        setFavorites((prev) => [...prev, item]);
    };

    // Remove item from favorites
    const removeFavorite = (id) => {
        setFavorites((prev) => prev.filter((item) => item.id !== id));
    };

    // Check if item is a favorite
    const isFavorite = (id) => {
        return favorites.some((item) => item.id === id);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

// Custom Hook to use Favorites Context
export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavorites must be used within a FavoritesProvider");
    }
    return context;
};