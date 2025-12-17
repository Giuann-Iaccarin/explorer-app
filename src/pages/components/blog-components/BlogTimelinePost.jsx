import { useState } from 'react';
import { MapPin, Calendar, Heart, MessageCircle, Share2, ChevronDown, ChevronUp, Tag } from 'lucide-react';

const BlogTimelinePost = ({ post }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-white rounded-xl shadow-md mb-6 overflow-hidden">
            <div className="relative h-96">
                <img
                    src={post.mainImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-6">
                    <div className="flex items-center space-x-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${post.missionType === 'universale' ? 'bg-green-500 text-white' : 'bg-purple-500 text-white'
                            }`}>
                            {post.badge.icon} {post.badge.name}
                        </span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">{post.title}</h2>
                    <div className="flex items-center space-x-4 text-white/90 text-sm">
                        <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{post.city}, {post.region}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.dateFormatted}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                    {isExpanded ? post.fullText : post.description}
                </p>

                {post.fullText !== post.description && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center space-x-1 mb-4"
                    >
                        <span>{isExpanded ? 'Mostra meno' : 'Leggi di più'}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                )}

                {isExpanded && post.gallery && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                        {post.gallery.map((img, idx) => (
                            <div key={idx} className="relative h-48 rounded-lg overflow-hidden">
                                <img
                                    src={img}
                                    alt={`Gallery ${idx + 1}`}
                                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                                />
                            </div>
                        ))}
                    </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm flex items-center space-x-1">
                            <Tag className="w-3 h-3" />
                            <span>{tag}</span>
                        </span>
                    ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition">
                            <Heart className="w-5 h-5" />
                            <span className="font-semibold">{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition">
                            <MessageCircle className="w-5 h-5" />
                            <span className="font-semibold">{post.comments}</span>
                        </button>
                    </div>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition">
                        <Share2 className="w-5 h-5" />
                        <span className="text-sm font-semibold">Condividi</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogTimelinePost;