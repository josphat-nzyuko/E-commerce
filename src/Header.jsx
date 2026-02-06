//Header.js
import React, { useState } from 'react';

function Header({ onSearch, searchQuery: globalSearchQuery }) {
    const [localSearchQuery, setLocalSearchQuery] = useState('');

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (localSearchQuery.trim()) {
            onSearch(localSearchQuery);
        }
    };

    const handleSearchChange = (e) => {
        setLocalSearchQuery(e.target.value);
    };

    const handleBecomeSeller = () => {
        alert('Thank you for your interest! Our team will contact you shortly to set up your seller account.');
    };

    return (
        <header className="header">
            <div className="header-container">

                <form className="search-form" onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search for products, brands and categories..."
                        value={localSearchQuery}
                        onChange={handleSearchChange}
                        aria-label="Search products"
                    />
                    <button type="submit" className="search-button" aria-label="Submit search">
                        <span className="search-icon">🔍</span>
                    </button>
                </form>

                <div className="header-actions">
                    <button className="login-button" aria-label="Login or create account">
                        <span className="icon">👤</span>
                        <span className="button-text">Account</span>
                    </button>

                    <button className="seller-button" onClick={handleBecomeSeller}>
                        <span className="icon">🏪</span>
                        <span className="button-text">Become a Seller</span>
                    </button>
                </div>
                <div className="logo-container">
                    <img
                        src="/SOKO MFUKONI pic.jpg"
                        alt="Soko Mfukoni Kenya Logo"
                        className="logo"
                    />
                    <span className="logo-text">Soko Mfukoni Kenya</span>
                </div>
                
            </div>
        </header>
    );

            
        
}

export default Header;  