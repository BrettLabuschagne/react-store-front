import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Button, Spinner, Dropdown, DropdownButton, Badge } from "react-bootstrap";
import { fetchProducts, fetchProductCategories, selectCategory } from "../features/products/productsSlice";
import { addToCart } from "../features/cart/cartSlice";
import { RootState } from "../store";
import { Product } from "../types";
import StarRating from "./StarRating";
import { ThunkDispatch } from "@reduxjs/toolkit";

const ProductList: React.FC = () => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const products = useSelector((state: RootState) => state.products.items);
    const loading = useSelector((state: RootState) => state.products.loading);
    const categories = useSelector((state: RootState) => state.products.categories);
    const selectedCategory = useSelector((state: RootState) => state.products.selectedCategory);

    useEffect(() => {
        dispatch(fetchProductCategories());
        dispatch(fetchProducts(selectedCategory));
    }, [dispatch, selectedCategory]);

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart({ product, quantity: 1 }));
    };

    const handleSelectCategory = (category: string | null) => {
        if (category) {
            dispatch(selectCategory(category));
        }
    };

    return (
        <div>
            <DropdownButton id="dropdown-basic-button" title="Select Category" onSelect={handleSelectCategory}>
                <Dropdown.Item eventKey="all">All</Dropdown.Item>
                {categories.map((category) => (
                    <Dropdown.Item key={category} eventKey={category}>
                        {category}
                    </Dropdown.Item>
                ))}
            </DropdownButton>
            <div className="d-flex flex-wrap">
                {loading ? (
                    <Spinner animation="border" />
                ) : (
                    products.map((product) => (
                        <Card key={product.id} style={{ width: "18rem", margin: "10px" }}>
                            <Card.Img variant="top" className="p-3 mh-50" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>R {product.price}</Card.Text>
                                <Card.Text>
                                    <Badge bg="primary">{product.category}</Badge>
                                </Card.Text>
                                <Card.Text>Reviews {product.rating.count}</Card.Text>
                                <StarRating rating={product.rating.rate} />
                                <Button variant="primary" className="m-3" onClick={() => handleAddToCart(product)}>
                                    Add to Cart
                                </Button>
                                <Link to={`/products/${product.id}`} className="btn btn-secondary ml-2">
                                    View Details
                                </Link>
                            </Card.Body>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
};

export default ProductList;
