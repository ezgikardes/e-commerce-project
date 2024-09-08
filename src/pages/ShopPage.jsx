import React, { useState } from 'react';
import Breadcrumbs from "../components/Breadcrumbs";
import Categories from "../layout/ShopPageLayout/Categories";
import { categoriesData } from '../data';
import ProductsFilter from '../layout/ShopPageLayout/ProductsFilter';
import ProductCards from '../layout/ShopPageLayout/ProductCards';


export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategorySelect = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    return (
        <div>
            <Breadcrumbs />
            <Categories categoriesData={categoriesData} handleCategorySelect={handleCategorySelect} />
            <ProductsFilter />
            <ProductCards selectedCategory={selectedCategory} />
        </div>
    );
}
