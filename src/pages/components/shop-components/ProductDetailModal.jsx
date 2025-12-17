import { useState } from 'react';
import { X, Lock, Star, ShoppingCart, Package, Award } from 'lucide-react';

const ProductDetailModal = ({ product, onClose, userLevel, userPoints }) => {
    const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null);
    const [quantity, setQuantity] = useState(1);

    const canAfford = product.priceType === 'points'
        ? userPoints >= product.price * quantity
        : true;

    // eslint-disable-next-line no-unused-vars
    const canUnlock = !product.isLocked || userLevel >= product.requiredLevel;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-96 object-cover"
                    />
                </div>

                <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h2>
                            <div className="flex items-center space-x-4">
                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${product.category === 'digitale'
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'bg-green-100 text-green-700'
                                    }`}>
                                    {product.category}
                                </span>
                                <div className="flex items-center">
                                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                                    <span className="font-semibold ml-1">{product.rating}</span>
                                    <span className="text-gray-500 ml-1">({product.reviews} recensioni)</span>
                                </div>
                            </div>
                        </div>

                        <div className="text-right">
                            <div className="text-4xl font-bold">
                                {product.priceType === 'points' ? (
                                    <span className="text-orange-600">{product.price} pts</span>
                                ) : (
                                    <span className="text-green-600">€{product.price}</span>
                                )}
                            </div>
                            {product.stock !== "illimitato" && (
                                <div className="text-sm text-gray-600 mt-1">
                                    <Package className="w-4 h-4 inline mr-1" />
                                    {product.stock} disponibili
                                </div>
                            )}
                        </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">{product.fullDescription}</p>

                    {product.sizes && (
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Seleziona Taglia</label>
                            <div className="flex space-x-2">
                                {product.sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 rounded-lg border-2 font-semibold transition ${selectedSize === size
                                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                                            : 'border-gray-300 hover:border-gray-400'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {product.stock !== "illimitato" && (
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Quantità</label>
                            <input
                                type="number"
                                min="1"
                                max={product.stock}
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, Math.min(product.stock, parseInt(e.target.value) || 1)))}
                                className="w-24 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    )}

                    {product.isLocked && (
                        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 mb-6">
                            <div className="flex items-start space-x-3">
                                <Lock className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                                <div>
                                    <div className="font-semibold text-red-800 mb-1">Prodotto Bloccato</div>
                                    <div className="text-sm text-red-700">
                                        Richiede livello {product.requiredLevel} (attuale: {userLevel})
                                        {product.requiredBadge && (
                                            <div className="mt-1">
                                                + Badge richiesto: <span className="font-semibold">"{product.requiredBadge}"</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {product.priceType === 'points' && !canAfford && !product.isLocked && (
                        <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4 mb-6">
                            <div className="flex items-start space-x-3">
                                <Award className="w-6 h-6 text-orange-600 shrink-0 mt-1" />
                                <div>
                                    <div className="font-semibold text-orange-800 mb-1">Punti Insufficienti</div>
                                    <div className="text-sm text-orange-700">
                                        Ti servono {(product.price * quantity).toLocaleString()} punti.
                                        Ne hai {userPoints.toLocaleString()}.
                                        Completa più missioni per guadagnare punti!
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="flex space-x-4">
                        <button
                            onClick={onClose}
                            className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition"
                        >
                            Chiudi
                        </button>
                        <button
                            disabled={product.isLocked || (product.priceType === 'points' && !canAfford)}
                            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition flex items-center justify-center ${product.isLocked || (product.priceType === 'points' && !canAfford)
                                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                                : 'bg-linear-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                                }`}
                        >
                            <ShoppingCart className="w-5 h-5 mr-2" />
                            {product.priceType === 'points' ? 'Riscatta' : 'Acquista'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailModal;