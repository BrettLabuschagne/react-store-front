import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Container, Navbar, Nav, Badge } from "react-bootstrap";
import { Provider, useSelector } from "react-redux";
import store, { RootState } from "./store";
import ProductList from "./components/ProductList";
import ProductView from "./components/ProductView";
import CartView from "./components/CartView";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Container>
                    <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/products/:id" element={<ProductView />} />
                        <Route path="/cart" element={<CartView />} />
                    </Routes>
                </Container>
            </Router>
        </Provider>
    );
};

const Header: React.FC = () => {
    const cartItemCount = useSelector((state: RootState) => state.cart.items.reduce((count, item) => count + item.quantity, 0));
    const productItemCount = useSelector((state: RootState) => state.products.items.reduce((count, item) => count + 1, 0));

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">
                MyStore
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">
                        Products <Badge bg="primary">{productItemCount}</Badge>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/cart">
                        Cart <Badge bg="secondary">{cartItemCount}</Badge>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default App;
