import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem("favorites");
        const parsedFavorites = savedFavorites ? JSON.parse(savedFavorites) : [];
        return Array.isArray(parsedFavorites)
            ? parsedFavorites.filter((item) => item && item.id)
    : [];
    });
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    const addToCart = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
        alert(`${product.name} has been added to the cart!`);
    };
    const incrementQuantity = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };
    const decrementQuantity = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };
    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const toggleFavorite = (product) => {
        if (!product || !product.id) {
            console.error("Invalid product passed to toggleFavorite:", product);
            return;
        }

        const isFavorited = favorites.some((item) => item.id === product.id);
        const updatedFavorites = isFavorited
          ? favorites.filter((item) => item.id !== product.id)
          : [...favorites, product];
        console.log("Next Favorites:", updatedFavorites);
        setFavorites(updatedFavorites);
      };

    useEffect(() => {
        console.log("Update Fav:", favorites);
    }, [favorites]);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                incrementQuantity,
                decrementQuantity,
                totalItems,
                favorites, 
                toggleFavorite,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
