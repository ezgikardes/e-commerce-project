
import ProductCard from "../../components/ProductCard";
import { bestSellerData } from "../../data";

export default function BestSeller() {
    return (
        <div className="mx-auto p-24">

            <div>
                <h4 className="text-center text-[#737373] text-[20px] mb-2">Featured Products</h4>
                <h3 className="text-center text-[#252B42] font-bold text-[24px] mb-2">BESTSELLER PRODUCTS</h3>
                <p className="text-center text-[#737373] text-[14px] mb-12">Problems trying to resolve the conflict between</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center align-items-center">
                {bestSellerData.products.map((product, index) => (
                    <ProductCard
                        key={index}
                        image={product.image}
                        title={product.title}
                        department={product.department}
                        originalPrice={product.originalPrice}
                        discountedPrice={product.discountedPrice}
                        colors={product.colors}
                    />
                ))}
            </div>
        </div>
    )
}