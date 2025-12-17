import { MapPin, Calendar, Heart, MessageCircle } from 'lucide-react';

const BlogFeedCard = ({ post, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden group"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={post.mainImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${post.missionType === 'universale' ? 'bg-green-500 text-white' : 'bg-purple-500 text-white'
                        }`}>
                        {post.badge.icon} {post.missionType}
                    </span>
                </div>
            </div>

            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{post.title}</h3>
                <div className="flex items-center space-x-2 mb-3">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-600">{post.city}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.dateFormatted}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{post.comments}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogFeedCard;