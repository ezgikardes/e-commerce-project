import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


function ProductCard({ image, title, department, originalPrice, discountedPrice, colors }) {
  return (
    <Link to={"/detail"} className="flex flex-col">
      <img src={image} alt={title} className="object-contain w-full h-70" />
      <div className="flex flex-col gap-2 items-center">
        <h5 className="font-semibold mt-5">{title}</h5>
        <span className="text-[#737373] text-sm font-semibold">{department}</span>
        <div className="flex gap-2">
          <span className="text-[#BDBDBD] font-semibold line-through">${originalPrice}</span>
          <span className="text-[#23856D] font-semibold">${discountedPrice}</span>
        </div>
        <div className="flex items-center gap-2 mb-5">
          {colors.map((color, index) => (
            <div key={index} className="w-4 h-4 rounded-full" style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  originalPrice: PropTypes.number.isRequired,
  discountedPrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductCard;