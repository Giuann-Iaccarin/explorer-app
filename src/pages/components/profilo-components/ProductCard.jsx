import React, { useState } from 'react';
import { Package, Calendar, Tag, CheckCircle, Sparkles } from 'lucide-react';

const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Colori per categoria
    const categoryColors = {
        'Elettronica': { bg: 'from-blue-500 to-cyan-500', icon: 'text-blue-600', badge: 'bg-blue-100 text-blue-700' },
        'Voucher': { bg: 'from-green-500 to-emerald-500', icon: 'text-green-600', badge: 'bg-green-100 text-green-700' },
        'Intrattenimento': { bg: 'from-purple-500 to-pink-500', icon: 'text-purple-600', badge: 'bg-purple-100 text-purple-700' },
        'Accessori': { bg: 'from-orange-500 to-red-500', icon: 'text-orange-600', badge: 'bg-orange-100 text-orange-700' },
        'Default': { bg: 'from-gray-500 to-gray-600', icon: 'text-gray-600', badge: 'bg-gray-100 text-gray-700' }
    };

    const colors = categoryColors[product.category] || categoryColors['Default'];

    return (
        <div
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Glow effect al hover */}
            <div className={`absolute inset-0 bg-linear-to-br ${colors.bg} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>

            {/* Badge Riscattato */}
            <div className="absolute top-3 right-3 z-10 flex items-center space-x-1 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                <CheckCircle className="w-3 h-3" />
                <span>Riscattato</span>
            </div>

            {/* Immagine/Icona Prodotto */}
            <div className={`relative aspect-square bg-linear-to-br ${colors.bg} flex items-center justify-center overflow-hidden`}>
                {/* Pattern decorativo di sfondo */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full" style={{
                        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}></div>
                </div>

                {/* Sparkles decorative */}
                <div className="absolute top-4 right-4 opacity-60">
                    <Sparkles className="w-6 h-6 text-white animate-pulse" />
                </div>
                <div className="absolute bottom-4 left-4 opacity-40">
                    <Sparkles className="w-4 h-4 text-white animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>

                {/* Icona principale */}
                <div className={`relative transform transition-all duration-500 ${isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                    }`}>
                    <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-50"></div>
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl">
                        <Package className={`w-16 h-16 ${colors.icon}`} />
                    </div>
                </div>

                {/* Riflesso luminoso */}
                <div className={`absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000`}></div>
            </div>

            {/* Contenuto Card */}
            <div className="p-5 relative">
                {/* Nome Prodotto */}
                <h3 className="font-bold text-gray-800 mb-2 text-lg line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {product.name}
                </h3>

                {/* Categoria Badge */}
                <div className="flex items-center space-x-2 mb-4">
                    <Tag className="w-4 h-4 text-gray-400" />
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.badge}`}>
                        {product.category}
                    </span>
                </div>

                {/* Separatore */}
                <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mb-4"></div>

                {/* Data Riscatto */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span className="text-xs font-medium">Riscattato il</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-sm font-bold text-gray-800 bg-gray-100 px-3 py-1 rounded-full">
                            {product.redeemedDate}
                        </span>
                    </div>
                </div>

                {/* Barra decorativa inferiore */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${colors.bg} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>

            {/* Bordo animato al hover */}
            <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient transition-all duration-500 pointer-events-none`}
                style={{
                    borderImage: isHovered ? `linear-gradient(135deg, ${colors.bg.includes('blue') ? '#3b82f6' : colors.bg.includes('green') ? '#10b981' : colors.bg.includes('purple') ? '#a855f7' : '#f97316'}, ${colors.bg.includes('blue') ? '#06b6d4' : colors.bg.includes('green') ? '#059669' : colors.bg.includes('purple') ? '#ec4899' : '#dc2626'}) 1` : 'none'
                }}
            ></div>
        </div>
    );
};

export default ProductCard;