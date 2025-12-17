import { BookOpen, Calendar, ChevronDown, ChevronUp, Heart, MapPin, MessageCircle, Search, Share2, Tag } from 'lucide-react';
import { useState } from 'react';
import BlogStats from '../components/blog-components/BlogStats';
import FilterBar from '../components/blog-components/FilterBar';
import BlogFeedCard from '../components/blog-components/BlogFeedCard';
import BlogTimelinePost from '../components/blog-components/BlogTimelinePost';

const BlogPage = ({ blogPostsData }) => {
    const [viewMode, setViewMode] = useState('timeline');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCity, setSelectedCity] = useState('all');
    const [selectedType, setSelectedType] = useState('all');

    const filterPosts = () => {
        return blogPostsData.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCity = selectedCity === 'all' || post.city === selectedCity;
            const matchesType = selectedType === 'all' || post.missionType === selectedType;
            return matchesSearch && matchesCity && matchesType;
        });
    };

    const filteredPosts = filterPosts();

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Il Mio Diario di Viaggio</h1>
                        <p className="text-gray-600">Ricordi e avventure dall'Italia</p>
                    </div>

                    <div className="flex space-x-2">
                        <button
                            onClick={() => setViewMode('timeline')}
                            className={`px-4 py-2 rounded-lg font-semibold transition ${viewMode === 'timeline'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            Timeline
                        </button>
                        <button
                            onClick={() => setViewMode('feed')}
                            className={`px-4 py-2 rounded-lg font-semibold transition ${viewMode === 'feed'
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            Griglia
                        </button>
                    </div>
                </div>

                <BlogStats blogPostsData={blogPostsData} />

                <FilterBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    selectedCity={selectedCity}
                    setSelectedCity={setSelectedCity}
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                    blogPostsData={blogPostsData}
                />

                {filteredPosts.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-xl shadow-md">
                        <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">Nessun post trovato</h3>
                        <p className="text-gray-500">Prova a modificare i filtri di ricerca</p>
                    </div>
                ) : viewMode === 'feed' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPosts.map((post) => (
                            <BlogFeedCard key={post.id} post={post} onClick={() => setViewMode('timeline')} />
                        ))}
                    </div>
                ) : (
                    <div>
                        {filteredPosts.map((post) => (
                            <BlogTimelinePost key={post.id} post={post} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogPage;