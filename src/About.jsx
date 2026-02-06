// About.js
import React from 'react';

function About() {
    return (
        <section className="about-section">
            <div className="about-container">
                <h1 className="about-title">About Soko Mfukoni  Kenya</h1>

                <div className="about-content">
                    <div className="about-intro">
                        <h2>Your Trusted Online Marketplace</h2>
                        <p>
                            Soko Mfukoni Kenya's premier online shopping marketplace, connecting thousands of buyers
                            and sellers across the nation. We are dedicated to providing a seamless e-commerce
                            experience that brings quality products to your doorstep at competitive prices.
                        </p>
                    </div>

                    <div className="about-features">
                        <div className="feature-card">
                            <span className="feature-icon">🛍️</span>
                            <h3>Wide Selection</h3>
                            <p>
                                Browse through thousands of products across multiple categories including electronics,
                                home appliances, foodstuffs, fashion, beauty, and more. We partner with verified
                                sellers to ensure product quality and authenticity.
                            </p>
                        </div>

                        <div className="feature-card">
                            <span className="feature-icon">💳</span>
                            <h3>Secure Payments</h3>
                            <p>
                                Shop with confidence using our secure payment gateway. We support multiple payment
                                methods including M-Pesa, credit cards, and cash on delivery, ensuring convenience
                                for all our customers.
                            </p>
                        </div>

                        <div className="feature-card">
                            <span className="feature-icon">🚚</span>
                            <h3>Fast Delivery</h3>
                            <p>
                                Enjoy reliable and fast delivery across Kenya. We work with trusted logistics
                                partners to ensure your orders arrive safely and on time, with real-time tracking
                                available for all shipments.
                            </p>
                        </div>
                    </div>

                    <div className="about-mission">
                        <h2>Our Mission</h2>
                        <p>
                            Soko Mfukoni Kenya is committed to transforming the way Kenyans shop and sell online.
                            We believe in empowering both buyers and sellers. Our platform provides
                            entrepreneurs and established businesses with the tools they need to reach customers
                            nationwide, while offering shoppers unparalleled access to quality products at the best
                            prices. We are committed to supporting Kenya's digital economy and making online shopping
                            accessible, affordable, and enjoyable for everyone.
                        </p>
                    </div>

                    <div className="about-stats">
                        <div className="stat">
                            <h3>10,000+</h3>
                            <p>Active Sellers</p>
                        </div>
                        <div className="stat">
                            <h3>500,000+</h3>
                            <p>Products Listed</p>
                        </div>
                        <div className="stat">
                            <h3>1M+</h3>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;