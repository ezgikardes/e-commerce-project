import { Link } from "react-router-dom"
import Slider from "../components/Slider"

export default function Header() {

    return (

        <div className="text-center sm:text-left">
            <div className="flex justify-between items-center">
                <p>LOGO</p>
                <span className="flex">
                    <img src="" alt="search" />
                    <img src="" alt="card" />
                    <img src="" alt="options" />
                </span>
            </div>

            <div className='flex-direction: column'>
                <Link to={"/"}>Home</Link>
                <Link to={"/product"}>Product</Link>
                <Link to={"/pricing"}>Pricing</Link>
                <Link to={"/contact"}>Contact</Link>
            </div>

            <div>
                <Slider />
            </div>
        </div>
    )
}