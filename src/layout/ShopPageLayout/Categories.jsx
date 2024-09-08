import { useHistory } from 'react-router-dom';

export default function Categories({ categoriesData, handleCategorySelect }) {
    const history = useHistory();

    const handleCategoryClick = (categoryId) => {
        if (handleCategorySelect) {
            handleCategorySelect(categoryId);
        }
        history.replace(`/shop/${categoryId}`);
    };

    return (
        <div className="md:flex justify-between mb-8">
            {categoriesData.map(category => (
                <div
                    key={category.id}
                    className="relative flex-1 mx-2 cursor-pointer"
                    onClick={() => handleCategoryClick(category.id)}
                >
                    <img src={category.img} alt={category.label} className="w-full h-64 object-cover" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-25 text-white">
                        <h2 className="text-lg font-bold">{category.label}</h2>
                        <p>{category.count}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
