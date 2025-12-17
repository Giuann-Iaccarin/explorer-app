import { Lock, Star, TrendingUp } from 'lucide-react';

const ProductCard = ({ product, userLevel, userPoints, onViewDetails }) => {
    const canAfford = product.priceType === 'points'
        ? userPoints >= product.price
        : true;

    const canUnlock = !product.isLocked || userLevel >= product.requiredLevel;

    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col h-full">

            {/* Immagine */}
            <div className="relative h-48 overflow-hidden shrink-0">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                {product.isLocked && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Lock className="w-12 h-12 text-white" />
                    </div>
                )}
                {product.badge && (
                    <div className="absolute top-3 right-3">
                        <span className="bg-linear-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            {product.badge}
                        </span>
                    </div>
                )}
                <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${product.category === 'digitale'
                        ? 'bg-blue-500 text-white'
                        : 'bg-green-500 text-white'
                        }`}>
                        {product.category}
                    </span>
                </div>
            </div>

            {/* Contenuto principale */}
            <div className="p-5 flex flex-col h-full">

                <div className="grid grid-rows-[auto_auto_auto_auto_auto_1fr] gap-2 flex-1">

                    {/* Titolo */}
                    <h3 className="text-lg font-bold text-gray-800 line-clamp-2">{product.name}</h3>

                    {/* Descrizione */}
                    <p className="text-sm text-gray-600 line-clamp-3">{product.shortDescription}</p>

                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="ml-1 text-gray-700 font-semibold">{product.rating}</span>
                        </div>
                        <span className="text-xs text-gray-500">({product.reviews} recensioni)</span>
                    </div>

                    {/* Stock */}
                    <div>
                        {product.stock !== "illimitato" && product.stock < 20 ? (
                            <div className="flex items-center text-xs text-orange-600">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                Solo {product.stock} disponibili!
                            </div>
                        ) : (
                            <div className="h-3"></div>
                        )}
                    </div>

                    {/* Blocco livello */}
                    <div>
                        {product.isLocked ? (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-2 text-xs text-red-700 flex items-center justify-center">
                                <Lock className="w-3 h-3 mr-1" />
                                Richiede livello {product.requiredLevel}
                                {product.requiredBadge && ` + badge "${product.requiredBadge}"`}
                            </div>
                        ) : (
                            <div className="h-6"></div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-auto border-t border-gray-200 pt-3">
                        <div className="text-2xl font-bold">
                            {product.priceType === 'points' ? (
                                <span className="text-orange-600">{product.price} pts</span>
                            ) : (
                                <span className="text-green-600">€{product.price}</span>
                            )}
                        </div>

                        <button
                            onClick={() => onViewDetails(product)}
                            className={`px-4 py-2 rounded-lg font-semibold transition ${!canUnlock || (product.priceType === 'points' && !canAfford)
                                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                                : 'bg-linear-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                                }`}
                            disabled={!canUnlock || (product.priceType === 'points' && !canAfford)}
                        >
                            {!canUnlock ? 'Bloccato' : 'Riscatta'}
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProductCard;
