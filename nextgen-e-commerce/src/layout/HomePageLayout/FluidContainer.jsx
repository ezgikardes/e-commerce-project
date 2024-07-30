import fluidContainerHero from "../../assets/HomePageAssets/fluidcontainerassets/fluid-container-hero.svg";

export default function FluidContainer() {
    return (
        <div className="flex flex-col-reverse lg:flex-row px-4 lg:px-8 pt-16 lg:pt-0">
            <div className="w-full lg:w-1/2">
                <img src={fluidContainerHero} alt="Happy Couple" className="w-full" />
            </div>
            <div className="flex flex-col justify-center items-center lg:items-start lg:w-1/2 lg:px-8 text-center lg:text-left">
                <h4 className="text-[#BDBDBD] font-bold mb-4">SUMMER 2020</h4>
                <h1 className="text-[#252B42] text-4xl font-bold mb-4">Part of the Neural Universe</h1>
                <h4 className="text-[#737373] mb-4 lg:mb-8">We know how large objects will act, but things on a small scale.</h4>
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                    <button className="bg-[#2DC071] text-white px-4 py-2 rounded">BUY NOW</button>
                    <button className="text-[#2DC071] border-2 border-[#2DC071] px-4 py-2 rounded">READ MORE</button>
                </div>
            </div>
        </div>
    );
}
