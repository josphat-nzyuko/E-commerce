//Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
    const [categoriesOpen, setCategoriesOpen] = useState(false);

    const categories = [
        'Electronics',
        'Home Appliances',
        'Foodstuffs',
        'Fashion & Beauty',
        'Sports & Fitness',
        'Books & Stationery',
        'Baby & Kids',
        'Automotive'
    ];

    const toggleCategories = () => {
        setCategoriesOpen(!categoriesOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">

                <div className="cart-section">
                    <button className="cart-button" aria-label={`Shopping cart with ${cartCount} items`}>
                        <span className="cart-icon">🛒</span>
                        <span className="cart-text">Cart</span>
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </button>
                </div>


                <div className="nav-links">

                    <div className="dropdown">
                        <button
                            className="dropdown-toggle"
                            onClick={toggleCategories}
                            aria-expanded={categoriesOpen}
                            aria-haspopup="true"
                        >
                            <span className="menu-icon">☰</span>
                            Categories
                            <span className="arrow">{categoriesOpen ? '▲' : '▼'}</span>
                        </button>

                        {categoriesOpen && (
                            <div className="dropdown-menu" role="menu">
                                {categories.map((category, index) => (
                                    <a
                                        key={index}
                                        href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="dropdown-item"
                                        role="menuitem"
                                    >
                                        {category}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;