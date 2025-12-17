import { BookOpen, ChevronRight } from 'lucide-react';

const BlogPreview = ({ posts }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800 flex items-center">
                    <BookOpen className="w-6 h-6 mr-2 text-blue-500" />
                    Blog Personale
                </h3>
                <button className="text-blue-600 hover:text-blue-700 flex items-center text-sm font-semibold">
                    Vedi tutto
                    <ChevronRight className="w-4 h-4 ml-1" />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {posts.map((post) => (
                    <div key={post.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer">
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h4 className="font-bold text-gray-800 mb-2">{post.title}</h4>
                            <span className="text-sm text-gray-500">{post.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPreview;