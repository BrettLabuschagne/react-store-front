import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Spinner, Badge } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import api from "../api";
import { Product } from "../types";
import StarRating from "./StarRating";

const ProductView: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await api.get<Product>(`/products/${id}`);
            setProduct(response.data);
            setLoading(false);
        };
        fetchProduct();
    }, [id]);

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart({ product, quantity: 1 }));
        }
    };

    return (
        <div>
            {loading ? (
                <Spinner animation="border" />
            ) : (
                product && (
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" className="p-3" src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>R {product.price}</Card.Text>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>
                                <Badge bg="primary">{product.category}</Badge>
                            </Card.Text>
                            <Card.Text>Reviews {product.rating.count}</Card.Text>
                            <StarRating rating={product.rating.rate} />
                            <Button variant="primary" className="m-3" onClick={handleAddToCart}>
                                Add to Cart
                            </Button>
                            <Button variant="secondary" href="/">
                                Back
                            </Button>
                        </Card.Body>
                    </Card>
                )
            )}
        </div>
    );
};

export default ProductView;
