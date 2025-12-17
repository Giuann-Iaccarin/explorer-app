import { BookOpen, MapPin, Heart, MessageCircle } from 'lucide-react';

const BlogStats = ({ blogPostsData }) => {
    const totalPosts = blogPostsData.length;
    const totalCities = [...new Set(blogPostsData.map(post => post.city))].length;
    const totalLikes = blogPostsData.reduce((sum, post) => sum + post.likes, 0);
    const totalComments = blogPostsData.reduce((sum, post) => sum + post.comments, 0);

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-blue-500">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-2xl font-bold text-gray-800">{totalPosts}</div>
                        <div className="text-sm text-gray-600">Post Totali</div>
                    </div>
                    <BookOpen className="w-10 h-10 text-blue-500 opacity-20" />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-green-500">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-2xl font-bold text-gray-800">{totalCities}</div>
                        <div className="text-sm text-gray-600">Città Visitate</div>
                    </div>
                    <MapPin className="w-10 h-10 text-green-500 opacity-20" />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-red-500">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-2xl font-bold text-gray-800">{totalLikes}</div>
                        <div className="text-sm text-gray-600">Like Ricevuti</div>
                    </div>
                    <Heart className="w-10 h-10 text-red-500 opacity-20" />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 border-l-4 border-purple-500">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-2xl font-bold text-gray-800">{totalComments}</div>
                        <div className="text-sm text-gray-600">Commenti</div>
                    </div>
                    <MessageCircle className="w-10 h-10 text-purple-500 opacity-20" />
                </div>
            </div>
        </div>
    );
};

export default BlogStats;