import { Link } from 'react-router-dom';
import { editorsPickData } from '../../data';

const EditorsPick = () => {
    return (
        <div className="p-24 mt-10 lg:px-22 py-8">
            <h2 className="text-center text-2xl font-bold mb-4">EDITORS PICK</h2>
            <p className="text-center mb-8 text-[#737373] text-[14px]">Problems trying to resolve the conflict between</p>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div>
                    <Link to="/men" className="relative block">
                        <img src={editorsPickData.men.imageUrl} className="w-full h-auto object-cover" />
                        <div className="absolute bottom-3 left-3 bg-[#FFFFFF] py-2 px-4 text-[#252B42] font-bold text-[14px]">
                            {editorsPickData.men.categoryName}
                        </div>
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div className="w-full lg:col-span-1">
                        <Link to="/women" className="relative block h-full">
                            <img src={editorsPickData.women.imageUrl} className="w-full h-full object-cover" />
                            <div className="absolute bottom-3 left-3 bg-[#FFFFFF] py-2 px-4 text-[#252B42] font-bold text-[14px]">
                                {editorsPickData.women.categoryName}
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <Link to="/accessories" className="relative block h-1/2">
                            <img src={editorsPickData.accessories.imageUrl} className="w-full h-full object-cover" />
                            <div className="absolute bottom-3 left-3 bg-[#FFFFFF] py-2 px-4 text-[#252B42] font-bold text-[14px]">
                                {editorsPickData.accessories.categoryName}
                            </div>
                        </Link>
                        <Link to="/kids" className="relative block h-1/2">
                            <img src={editorsPickData.kids.imageUrl} className="w-full h-full object-cover" />
                            <div className="absolute bottom-3 left-3 bg-[#FFFFFF] py-2 px-4 text-[#252B42] font-bold text-[14px]">
                                {editorsPickData.kids.categoryName}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditorsPick;
