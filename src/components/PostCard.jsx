const PostCard = ({ post }) => {
    return (
        <div className="max-w-sm rounded shadow-lg">
            <div className="relative">
                <img src={post.image} alt={post.title} className="w-full" />
                <div className="absolute top-2 left-2 bg-[#E74040] text-[#FFFFFF] px-2 py-1 text-xs font-bold">NEW</div>
            </div>
            <div className="px-8 py-8">
                <div>
                    <span className="text-sm text-[#8EC2F2] mr-4 mb-4">{post.searchEngine}</span>
                    <span className="text-sm text-[#737373] mr-4 mb-4">{post.category}</span>
                    <span className="text-sm text-[#737373] mr-2 mb-4">{post.actuality}</span>
                </div>
                <div className="font-bold text-xl mt-4 mb-2">{post.title}</div>
                <p className="text-[#737373] mt-2 mb-4">
                    {post.description}
                </p>
                <div className="flex justify-between mb-8">
                    <span className="text-sm text-[#252B42]"><i className="fa-regular fa-clock text-[#8EC2F2]"></i> {post.date}</span>
                    <span className="text-sm text-[#252B42]"><i className="fa-regular fa-comment text-[#8EC2F2]"></i> {post.comments} comments</span>
                </div>
                <a href={post.link} className="text-[#252B42]">
                    Learn More <i className="fa-solid fa-chevron-right text-[#8EC2F2]"></i>
                </a>
            </div>
        </div>
    );
};

export default PostCard;
