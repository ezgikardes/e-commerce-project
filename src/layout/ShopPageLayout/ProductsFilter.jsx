import React, { useState } from 'react';
import Button from '../../components/Button';

const ProductsFilter = () => {
  const [sortOption, setSortOption] = useState('Popularity');
  const [viewOption, setViewOption] = useState('grid');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown için state

  const handleSortChange = (option) => {
    setSortOption(option);
    setIsDropdownOpen(false); // Seçim yapıldıktan sonra dropdown kapanır
  };

  const handleViewChange = (option) => {
    setViewOption(option);
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4 md:flex-row md:space-y-0 md:space-x-6 md:justify-between">
      {/* Results text */}
      <div className="text-gray-500">
        Showing all 12 results
      </div>

      {/* View buttons */}
      <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-4 md:space-y-0">
        <span className="text-gray-500">Views:</span>
        <div className="flex space-x-2">
          <Button
            onClick={() => handleViewChange('grid')}
            size="sm"
            variant="outline"
            isSelected={viewOption === 'grid'} // Seçili buton gri olacak
          >
            <div className="grid grid-cols-2 gap-1">
              <div className="w-2 h-2 bg-gray-700" />
              <div className="w-2 h-2 bg-gray-700" />
              <div className="w-2 h-2 bg-gray-700" />
              <div className="w-2 h-2 bg-gray-700" />
            </div>
          </Button>
          <Button
            onClick={() => handleViewChange('list')}
            size="sm"
            variant="outline"
            isSelected={viewOption === 'list'} // Seçili buton gri olacak
          >
            <div className="flex flex-col space-y-1">
              <div className="w-6 h-1 bg-gray-700" />
              <div className="w-6 h-1 bg-gray-700" />
              <div className="w-6 h-1 bg-gray-700" />
            </div>
          </Button>
        </div>
      </div>

      {/* Sort dropdown and Filter button */}
      <div className="relative flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
        {/* Dropdown Button */}
        <Button
          size="md"
          variant="outline"
          isSelected={sortOption === 'Popularity'} // Seçili buton gri olacak, yazı siyah
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          {sortOption} ▼
        </Button>

        {/* Dropdown options */}
        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            <ul>
              <li>
                <button
                  onClick={() => handleSortChange('Popularity')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Popularity
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSortChange('Decreasing Price')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Decreasing Price
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSortChange('Increasing Price')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Increasing Price
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* Filter Button */}
        <Button size="md" variant="primary">
          Filter
        </Button>
      </div>
    </div>
  );
};

export default ProductsFilter;
