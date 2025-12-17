import { Package } from 'lucide-react';
import { useState } from 'react';
import FilterBar from '../components/shop-components/FilterBar.jsx';
import PointsDisplay from '../components/shop-components/PointsDisplay.jsx';
import ProductCard from '../components/shop-components/ProductCard.jsx';
import ProductDetailModal from '../components/shop-components/ProductDetailModal.jsx';

const ShopPage = ({ productsData, availablePoints, userLevel }) => {

    const userPoints = {
        available: availablePoints,
        total: 8750,
        spent: 6410
    };

    const [filters, setFilters] = useState({
        search: '',
        category: 'all',
        priceType: 'all',
        availability: 'all'
    });

    const [selectedProduct, setSelectedProduct] = useState(null);

    const filterProducts = () => {
        let filtered = [...productsData];

        if (filters.search) {
            const search = filters.search.toLowerCase();
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(search) ||
                p.shortDescription.toLowerCase().includes(search)
            );
        }

        if (filters.category !== 'all') {
            filtered = filtered.filter(p => p.category === filters.category);
        }

        if (filters.priceType !== 'all') {
            filtered = filtered.filter(p => p.priceType === filters.priceType);
        }

        if (filters.availability === 'available') {
            filtered = filtered.filter(p => !p.isLocked);
        } else if (filters.availability === 'locked') {
            filtered = filtered.filter(p => p.isLocked);
        }

        return filtered;
    };

    const filteredProducts = filterProducts();

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-4 py-6">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Explorer Shop</h1>
                    <p className="text-gray-600">Riscatta i tuoi punti per premi esclusivi</p>
                </div>

                <PointsDisplay points={userPoints} />

                <FilterBar filters={filters} setFilters={setFilters} />

                <div className="mb-4">
                    <div className="text-sm text-gray-600">
                        Trovati <span className="font-semibold">{filteredProducts.length}</span> prodotti
                    </div>
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-xl shadow-md">
                        <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">Nessun prodotto trovato</h3>
                        <p className="text-gray-500">Prova a modificare i filtri di ricerca</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                userLevel={userLevel}
                                userPoints={userPoints.available}
                                onViewDetails={setSelectedProduct}
                            />
                        ))}
                    </div>
                )}
            </div>

            {selectedProduct && (
                <ProductDetailModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                    userLevel={userLevel}
                    userPoints={userPoints.available}
                />
            )}
        </div>
    );
};

export default ShopPage;