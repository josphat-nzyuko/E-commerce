import React, { useState } from 'react';
import productImage1 from './assets/samsungS.webp'
import productImage2 from './assets/lg fridge.jpg'
import productImage3 from './assets/premium rice.jpg'
import productImage4 from './assets/handbag.jpg'
import productImage5 from './assets/laptop.webp'
import productImage6 from './assets/microwave.webp'
import productImage7 from './assets/nikeR.avif'
import productImage8 from './assets/yogaG.webp'
import productImage9 from './assets/setbooks.jpg'
import productImage10 from './assets/babyS.webp'
import productImage11 from './assets/vaccum.jpg'
import productImage12 from './assets/makeUP.jpg'




 
function ProductGallery({ addToCart }) {
    const [products] = useState([
        {
            id: 1,
            name: 'Samsung Galaxy S22 ultra',
            description: 'Latest model with 128GB storage, 6.5" display, and advanced camera system',
            price: 'KSh 65,000',
            image: productImage1,
            category: 'Electronics'
        },
        {
            id: 2,
            name: 'LG Refrigerator 350L',
            description: 'Energy-efficient double-door refrigerator with smart cooling technology',
            price: 'KSh 55,000',
            image: productImage2,
            category: 'Home Appliances'
        },
        {
            id: 3,
            name: 'Premium Rice 25kg',
            description: 'High-quality basmati rice, perfect for all your cooking needs',
            price: 'KSh 3,500',
            image: productImage3,
            category: 'Foodstuffs'
        },
        {
            id: 4,
            name: 'Designer Handbag',
            description: 'Elegant leather handbag with multiple compartments, perfect for daily use',
            price: 'KSh 4,200',
            image: productImage4,
            category: 'Fashion & Beauty'
        },
        {
            id: 5,
            name: 'HP Laptop 15.6"',
            description: 'Intel Core i5, 8GB RAM, 512GB SSD, perfect for work and entertainment',
            price: 'KSh 65,000',
            image: productImage5,
            category: 'Electronics'
        },
        {
            id: 6,
            name: 'Microwave Oven 28L',
            description: 'Digital microwave with grill function and auto-cook menus',
            price: 'KSh 12,500',
            image: productImage6,
            category: 'Home Appliances'
        },
        {
            id: 7,
            name: 'Nike Running Shoes',
            description: 'Lightweight and comfortable running shoes designed for optimal performance',
            price: 'KSh 5,500',
            image: productImage7,
            category: ' Sports & Fitness'
        },
        {
            id: 8,
            name: 'Yoga Mat',
            description: 'Non-slip yoga mat with cushioning for extra comfort during workouts',
            price: 'KSh 2,000',
            image: productImage8,
            category: 'Sports & Fitness'
        },
        {
            id: 9,
            name: 'Yoga Mat',
            description: 'Non-slip yoga mat with cushioning for extra comfort during workouts',
            price: 'KSh 2,000',
            image: productImage8,
            category: 'Sports & Fitness'
        },
        {
            id: 10,
            name: 'Textbook Set',
            description: 'Complete set of textbooks for high school students',
            price: 'KSh 2,500',
            image: productImage9,
            category: 'Books & Stationery'
        },
        {
            id: 11,
            name: 'Baby Stroller',
            description: 'Lightweight and foldable stroller suitable for infants and toddlers',
            price: 'KSh 5,000',
            image: productImage10,
            category: 'Baby & Kids'
        },
        {
            id: 12,
            name: 'Car Vacuum Cleaner',
            description: 'Portable vacuum cleaner designed for car interiors with strong suction power',
            price: 'KSh 3,000',
            image: productImage11,
            category: 'Automotive'
        },
        {

            id: 14,
            name: 'Makeup Kit Professional',
            description: 'Complete makeup set with brushes, eyeshadows, lipsticks, and foundation',
            price: 5600,
            priceFormatted: 'KSh 5,600',
            image: productImage12,
            category: 'Fashion & Beauty',
            brand: 'Beauty Pro',
        }





    ]);

    const handleAddToCart = (productName) => {
        addToCart();
        alert(`${productName} has been added to your cart!`);
    };

    return (
        <section className="product-gallery">
            <div className="gallery-container">
                <h2 className="gallery-title">Featured Products</h2>
                <p className="gallery-subtitle">Discover amazing deals on quality products</p>

                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-image-container">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="product-image"
                                />
                                <span className="product-category">{product.category}</span>
                            </div>

                            <div className="product-info">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-description">{product.description}</p>
                                <div className="product-footer">
                                    <span className="product-price">{product.price}</span>
                                    <button
                                        className="add-to-cart-button"
                                        onClick={() => handleAddToCart(product.name)}
                                        aria-label={`Add ${product.name} to cart`}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductGallery;