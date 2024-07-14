import Footer from "../layout/Footer";
import HeaderCarousel from "../layout/HeaderLayout/HeaderCarousel";
import PageContent from "../layout/HomePageLayout/PageContent";

export default function HomePage(){
    return(

        <div>
        <HeaderCarousel/>
        <PageContent />
        <Footer />
        </div>
    )
}