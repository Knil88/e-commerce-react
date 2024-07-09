import React from "react";

const Cart = ({ cartItems, RemovefromCart }) => {
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

}