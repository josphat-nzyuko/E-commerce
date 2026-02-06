import React, { useState, useEffect } from 'react';
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




function SearchResults({ searchQuery, addToCart, onClearSearch }) {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortBy, setSortBy] = useState('relevance');

    
    const allProducts = [
        {
            id: 1,
            name: 'Samsung Galaxy S21 Ultra',
            description: 'Latest model with 128GB storage, 6.5" display, and advanced camera system',
            price: 65000,
            priceFormatted: 'KSh 65,000',
            image: productImage1,
            category: 'Electronics',
            brand: 'Samsung',
            keywords: ['phone', 'mobile', 'smartphone', 'galaxy', 'android', 'samsung', 'electronics']
        },
        {
            id: 2,
            name: 'LG Refrigerator 350L',
            description: 'Energy-efficient double-door refrigerator with smart cooling technology',
            price: 55000,
            priceFormatted: 'KSh 55,000',
            image: productImage2,
            category: 'Home Appliances',
            brand: 'LG',
            keywords: ['fridge', 'refrigerator', 'appliance', 'cooling', 'lg', 'home']
        },
        {
            id: 3,
            name: 'Premium Rice 25kg',
            description: 'High-quality basmati rice, perfect for all your cooking needs',
            price: 3500,
            priceFormatted: 'KSh 3,500',
            image: productImage3,
            category: 'Foodstuffs',
            brand: 'Premium',
            keywords: ['rice', 'basmati', 'food', 'grain', 'cooking', 'foodstuffs']
        },
        {
            id: 4,
            name: 'Designer Handbag',
            description: 'Elegant leather handbag with multiple compartments, perfect for daily use',
            price: 4200,
            priceFormatted: 'KSh 4,200',
            image: productImage4,
            category: 'Fashion & Beauty',
            brand: 'Designer',
            keywords: ['bag', 'handbag', 'purse', 'fashion', 'leather', 'accessories', 'women']
        },
        {
            id: 5,
            name: 'HP Laptop 15.6"',
            description: 'Intel Core i5, 8GB RAM, 512GB SSD, perfect for work and entertainment',
            price: 65000,
            priceFormatted: 'KSh 65,000',
            image: productImage5,
            category: 'Electronics',
            brand: 'HP',
            keywords: ['laptop', 'computer', 'hp', 'notebook', 'pc', 'electronics', 'intel']
        },
        {
            id: 6,
            name: 'Microwave Oven 28L',
            description: 'Digital microwave with grill function and auto-cook menus',
            price: 12500,
            priceFormatted: 'KSh 12,500',
            image: productImage6,
            category: 'Home Appliances',
            brand: 'Generic',
            keywords: ['microwave', 'oven', 'appliance', 'kitchen', 'cooking', 'home']
        },
        {
            id: 7,
            name: 'Microwave Oven 28L',
            description: 'Digital microwave with grill function and auto-cook menus',
            price: 12500,
            priceFormatted: 'KSh 12,500',
            image: productImage7,
            category: 'Home Appliances',
            brand: 'Generic',
            keywords: ['microwave', 'oven', 'appliance', 'kitchen', 'cooking', 'home']  
       },
       {
           id: 8,
           name: 'Nike Running Shoes',
           description: 'Lightweight and comfortable running shoes designed for optimal performance',
           price: 5500,
           priceFormatted: 'KSh 5,500',
           image: productImage8,
           category: 'Sports & Fitness',
           brand: 'Nike',
           keywords: ['shoes', 'running', 'sports', 'nike', 'fitness']

        },
        {
            id: 9,
            name: 'Yoga Mat',
            description: 'Non-slip yoga mat with cushioning for extra comfort during workouts',
            price: 2000,
            priceFormatted: 'KSh 2,000',
            image: productImage9,
            category: 'Sports & Fitness',
            brand: 'Yoga Essentials',
            keywords: ['yoga', 'mat', 'fitness', 'exercise', 'cushioning']

        },
        {
            id: 10,
            name: 'Yoga Mat',
            description: 'Non-slip yoga mat with cushioning for extra comfort during workouts',
            price: 2000,
            priceFormatted: 'KSh 2,000',
            image: productImage10,
            category: 'Sports & Fitness',
            brand: 'Yoga Essentials',
            keywords: ['yoga', 'mat', 'fitness', 'exercise', 'cushioning']
        },
        {
            id: 11,
            name: 'Textbook Set',
            description: 'Complete set of textbooks for high school students',
            price: 2500,
            priceFormatted: 'KSh 2,500',
            image: productImage9,
            category: 'Books & Stationery',
            brand: 'EduBooks',
            keywords: ['textbook', 'books', 'education', 'school', 'stationery']
        },
        {
             id: 12,
            name: 'Baby Stroller',
            description: 'Lightweight and foldable stroller suitable for infants and toddlers',
            price: 5000,
            priceFormatted: 'KSh 5,000',
            image: productImage10,
            category: 'Baby & Kids',
            brand: 'Baby Essentials',
            keywords: ['stroller', 'baby', 'kids', 'infant', 'foldable']
        },
        {
            id: 13,
            name: 'Car Vacuum Cleaner',
            description: 'Portable vacuum cleaner designed for car interiors with strong suction power',
            price: 3000,
            priceFormatted: 'KSh 3,000',
            image: productImage11,
            category: 'Automotive',
            brand: 'AutoClean',
            keywords: ['vacuum', 'car', 'cleaner', 'interior', 'suction']
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
            keywords: ['makeup', 'cosmetics', 'beauty', 'fashion', 'lipstick', 'eyeshadow']
        }
    ];

    useEffect(() => {
        if (!searchQuery.trim()) {
            setFilteredProducts([]);
            return;
        }

        const query = searchQuery.toLowerCase().trim();
        const searchTerms = query.split(' ').filter(term => term.length > 0);

        const results = allProducts.filter(product => {
            const searchableText = [
                product.name,
                product.description,
                product.category,
                product.brand,
                ...product.keywords
            ].join(' ').toLowerCase();

            return searchTerms.some(term => searchableText.includes(term));
        });

        const scoredResults = results.map(product => {
            let score = 0;
            const searchableText = [
                product.name,
                product.description,
                product.category,
                product.brand,
                ...product.keywords
            ].join(' ').toLowerCase();

            searchTerms.forEach(term => {
                // Exact match in name gets highest score
                if (product.name.toLowerCase().includes(term)) {
                    score += 10;
                }
                // Match in category
                if (product.category.toLowerCase().includes(term)) {
                    score += 5;
                }
                // Match in brand
                if (product.brand.toLowerCase().includes(term)) {
                    score += 5;
                }
                // Match in keywords
                if (product.keywords.some(keyword => keyword.includes(term))) {
                    score += 3;
                }
                // Match in description
                if (product.description.toLowerCase().includes(term)) {
                    score += 1;
                }
            });

            return { ...product, relevanceScore: score };
        });

        setFilteredProducts(scoredResults);
    }, [searchQuery]);

    // Sorting logic
    const sortProducts = (products) => {
        const sorted = [...products];

        switch (sortBy) {
            case 'price-low':
                return sorted.sort((a, b) => a.price - b.price);
            case 'price-high':
                return sorted.sort((a, b) => b.price - a.price);
            case 'name':
                return sorted.sort((a, b) => a.name.localeCompare(b.name));
            case 'relevance':
            default:
                return sorted.sort((a, b) => b.relevanceScore - a.relevanceScore);
        }
    };

    const handleAddToCart = (productName) => {
        addToCart();
        alert(`${productName} has been added to your cart!`);
    };

    const sortedProducts = sortProducts(filteredProducts);

    return (
        <section className="search-results">
            <div className="search-results-container">

                <div className="search-header">
                    <div className="search-info">
                        <h2 className="search-title">
                            Search Results for: <span className="search-query">"{searchQuery}"</span>
                        </h2>
                        <p className="results-count">
                            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
                        </p>
                    </div>

                    <button className="clear-search-button" onClick={onClearSearch}>
                        <span className="icon">✖</span>
                        Clear Search
                    </button>
                </div>

                {filteredProducts.length > 0 && (
                    <div className="search-controls">
                        <div className="sort-section">
                            <label htmlFor="sort-select" className="sort-label">Sort by:</label>
                            <select
                                id="sort-select"
                                className="sort-select"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="relevance">Relevance</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="name">Name: A to Z</option>
                            </select>
                        </div>
                    </div>
                )}

                {filteredProducts.length === 0 ? (
                    <div className="no-results">
                        <div className="no-results-icon">🔍</div>
                        <h3>No products found</h3>
                        <p>We couldn't find any products matching "{searchQuery}"</p>
                        <div className="search-suggestions">
                            <h4>Try:</h4>
                            <ul>
                                <li>Checking your spelling</li>
                                <li>Using more general keywords</li>
                                <li>Browsing our categories instead</li>
                            </ul>
                        </div>
                        <button className="browse-button" onClick={onClearSearch}>
                            Browse All Products
                        </button>
                    </div>
                ) : (
                    <div className="products-grid">
                        {sortedProducts.map((product) => (
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
                                    <p className="product-brand">Brand: {product.brand}</p>
                                    <p className="product-description">{product.description}</p>
                                    <div className="product-footer">
                                        <span className="product-price">{product.priceFormatted}</span>
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
                )}
            </div>
        </section>
    );
}

export default SearchResults;