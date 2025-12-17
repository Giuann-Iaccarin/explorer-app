import { Search } from 'lucide-react';

const SearchFilterBar = ({ searchTerm, setSearchTerm, selectedFilter, setSelectedFilter, selectedCategory, setSelectedCategory }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="md:col-span-2">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Cerca missioni per città o nome..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Type Filter */}
                <div>
                    <select
                        value={selectedFilter}
                        onChange={(e) => setSelectedFilter(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="all">Tutti i tipi</option>
                        <option value="universale">Universale</option>
                        <option value="pilota">Pilota</option>
                    </select>
                </div>

                {/* Category Filter */}
                <div>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="all">Tutte le categorie</option>
                        <option value="cultura">Cultura</option>
                        <option value="food">Food</option>
                        <option value="avventura">Avventura</option>
                        <option value="shopping">Shopping</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default SearchFilterBar;