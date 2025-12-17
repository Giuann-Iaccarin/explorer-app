import { Search } from 'lucide-react';
const FilterBar = ({ filters, setFilters }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Cerca prodotti..."
                            value={filters.search}
                            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>

                <div>
                    <select
                        value={filters.category}
                        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="all">Tutte le categorie</option>
                        <option value="digitale">Digitale</option>
                        <option value="fisico">Fisico</option>
                    </select>
                </div>

                <div>
                    <select
                        value={filters.priceType}
                        onChange={(e) => setFilters({ ...filters, priceType: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="all">Tutti i prezzi</option>
                        <option value="points">Solo Punti</option>
                        <option value="money">Solo Denaro</option>
                    </select>
                </div>

                <div>
                    <select
                        value={filters.availability}
                        onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="all">Disponibilità</option>
                        <option value="available">Disponibili</option>
                        <option value="locked">Bloccati</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;