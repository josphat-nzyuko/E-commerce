// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import SearchResults from './SearchResults';
import Navbar from './Navbar';
import ProductionGallery from './ProductionGallery';
import About from './About';
import Footer from './Footer';


function App() {

  const [cartCount, setCartCount] = useState(0);

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Function to add items to cart
  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  // Function to handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
    setIsSearchActive(query.trim().length > 0);
  };

  // Function to clear search
  const clearSearch = () => {
    setSearchQuery('');
    setIsSearchActive(false);
  };

  return (
    <Router>
      <div className="App">
        <Header onSearch={handleSearch} searchQuery={searchQuery} />
        <Navbar cartCount={cartCount} />
        <Routes>
          <Route
            path="/"
            element={
              isSearchActive ? (
                <SearchResults
                  searchQuery={searchQuery}
                  addToCart={addToCart}
                  onClearSearch={clearSearch}
                />
              ) : (
                <ProductionGallery addToCart={addToCart} />
              )
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
