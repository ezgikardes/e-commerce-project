import React, { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import { shopPageProducts } from '../../data';

export default function ProductCards({ selectedCategory }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? shopPageProducts.filter(product => product.categoryId === selectedCategory)
    : shopPageProducts;

  // Pagination calculation
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedProducts.map(product => (
          <ProductCard 
            key={product.id}
            image={product.image}           
            title={product.title}           
            department={product.department} 
            originalPrice={product.originalPrice} 
            discountedPrice={product.discountedPrice} 
            colors={product.colors}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
