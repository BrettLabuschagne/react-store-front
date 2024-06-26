import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { removeFromCart, removeOneFromCart } from "../features/cart/cartSlice";
import { RootState } from "../store";
import { addToCart } from "../features/cart/cartSlice";
import { CartItem, Product } from "../types";

const CartView: React.FC = () => {
    const cart: CartItem[] = useSelector((state: RootState) => state.cart.items);
    const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const handleAddFromCart = (product: Product) => {
        dispatch(addToCart({ product, quantity: 1 }));
    };

    const handleRemoveOneFromCart = (product: Product) => {
        dispatch(removeOneFromCart({ product }));
    };

    return (
        <div>
            <h1>Cart</h1>
            <h3>Total: R {total.toFixed(2)}</h3>
            {cart.map((item: CartItem) => (
                <div key={item.product.id} style={{ marginBottom: "10px" }}>
                    <h4>{item.product.title}</h4>
                    <h5>Quantity: {item.quantity}</h5>
                    <p>{item.product.description}</p>
                    <Button variant="success" className="m-1" onClick={() => handleAddFromCart(item.product)}>
                        +
                    </Button>
                    <Button variant="warning" className="m-1" onClick={() => handleRemoveOneFromCart(item.product)}>
                        -
                    </Button>
                    <Button variant="danger" className="m-1" onClick={() => handleRemoveFromCart(item.product.id)}>
                        Remove
                    </Button>
                </div>
            ))}
        </div>
    );
};

export default CartView;
