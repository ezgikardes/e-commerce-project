import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import React from "react";

const Breadcrumbs = () => {
    return (
        <div>
            <div>
                
            </div>
            <nav className="py-3 w-full">
                <a href="/" className="text-[#252B42] font-bold">
                    Home
                </a>
                <span className="mx-2">
                    <FontAwesomeIcon icon={faChevronRight} />
                </span>
                <span className="text-[#737373]">
                    Shop
                </span>
            </nav>
        </div>
    );
};

export default Breadcrumbs;
