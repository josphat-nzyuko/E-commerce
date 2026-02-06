//Footer.js
import React, { useState } from 'react';

function Footer() {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            alert(`Thank you for subscribing with: ${email}`);
            setEmail('');
        }
    };

    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section newsletter-section">
                    <h3>Join Our Community</h3>
                    <p>Subscribe to get exclusive deals and updates</p>
                    <form className="newsletter-form" onSubmit={handleSubscribe}>
                        <input
                            type="email"
                            className="newsletter-input"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            aria-label="Email address for newsletter"
                        />
                        <button type="submit" className="newsletter-button">
                            Subscribe
                        </button>
                    </form>
                </div>

                <div className="footer-links">

                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <ul className="footer-list">
                            <li>
                                <span className="icon">📧</span>
                                <a href="mailto:support@mysokomfukoni.co.ke">support@sokomfukoni.co.ke</a>
                            </li>
                            <li>
                                <span className="icon">📞</span>
                                <a href="tel:+254700000000">+254 700 000 000</a>
                            </li>
                            <li>
                                <span className="icon">📍</span>
                                <span>Nairobi, Kenya</span>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>My Account</h4>
                        <ul className="footer-list">
                            <li><a href="#orders">My Orders</a></li>
                            <li><a href="#track">Track Order</a></li>
                            <li><a href="#wishlist">My Wishlist</a></li>
                            <li><a href="#returns">Returns & Refunds</a></li>
                            <li><a href="#profile">Account Settings</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Seller Zone</h4>
                        <ul className="footer-list">
                            <li><a href="#seller-dashboard">Seller Dashboard</a></li>
                            <li><a href="#upload-products">Upload Products</a></li>
                            <li><a href="#manage-inventory">Manage Inventory</a></li>
                            <li><a href="#seller-payments">Payments & Reports</a></li>
                            <li><a href="#seller-support">Seller Support</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Customer Service</h4>
                        <ul className="footer-list">
                            <li><a href="#help">Help Center</a></li>
                            <li><a href="#shipping">Shipping Information</a></li>
                            <li><a href="#payment">Payment Methods</a></li>
                            <li><a href="#terms">Terms & Conditions</a></li>
                            <li><a href="#privacy">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Soko Mfukoni Kenya. All rights reserved.</p>
                    <div className="social-links">
                        <a href="#facebook" aria-label="Facebook">📘</a>
                        <a href="#twitter" aria-label="Twitter">🐦</a>
                        <a href="#instagram" aria-label="Instagram">📷</a>
                        <a href="#linkedin" aria-label="LinkedIn">💼</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;