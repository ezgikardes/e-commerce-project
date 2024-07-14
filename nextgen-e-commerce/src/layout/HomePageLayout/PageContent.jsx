import BestSeller from "./BestSeller";
import BottomBlog from "./BottomBlog";
import EditorsPick from "./EditorsPick";
import PageCarousel from "./PageCarousel";

export default function PageContent() {
    return (
        <div className="space-y-8">
            <EditorsPick />
            <BestSeller />
            <PageCarousel />
            <BottomBlog />
        </div>
    )
}