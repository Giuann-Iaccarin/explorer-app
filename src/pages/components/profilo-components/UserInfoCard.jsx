import React, { useState } from 'react';
import { Trophy, Award, Star, Zap } from 'lucide-react';

const UserInfoCard = ({ user, recentBadges }) => {
    const [hoveredBadge, setHoveredBadge] = useState(null);

    // Badge demo se non passati
    const badges = recentBadges || [
        { id: 1, name: "Pioniere", icon: Trophy, city: "Roma", color: "from-yellow-400 to-orange-500" },
        { id: 2, name: "Esploratore", icon: Award, city: "Milano", color: "from-blue-400 to-cyan-500" },
        { id: 3, name: "Collezionista", icon: Star, city: "Firenze", color: "from-purple-400 to-pink-500" },
        { id: 4, name: "Velocista", icon: Zap, city: "Napoli", color: "from-green-400 to-emerald-500" }
    ];

    return (
        <div className="bg-linear-to-br from-white via-blue-50/30 to-purple-50/30 rounded-2xl shadow-xl p-8 border border-gray-100 backdrop-blur-sm">
            {/* Statistiche Utente */}
            <div className="mb-8">
                <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                        <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                        <Trophy className="relative w-12 h-12 text-yellow-500" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    {/* Livello */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl blur-sm opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        <div className="relative bg-linear-to-br from-blue-500 to-blue-600 rounded-xl p-5 text-center transform group-hover:scale-105 transition-all shadow-lg">
                            <div className="text-4xl font-black text-white mb-1 drop-shadow-lg">
                                {user.level}
                            </div>
                            <div className="text-sm font-semibold text-blue-100 uppercase tracking-wider">
                                Livello
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                                <Star className="w-4 h-4 text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Punti */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl blur-sm opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        <div className="relative bg-linear-to-br from-purple-500 to-pink-500 rounded-xl p-5 text-center transform group-hover:scale-105 transition-all shadow-lg">
                            <div className="text-4xl font-black text-white mb-1 drop-shadow-lg">
                                {user.points}
                            </div>
                            <div className="text-sm font-semibold text-purple-100 uppercase tracking-wider">
                                Punti
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                                <Zap className="w-4 h-4 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Separatore elegante */}
            <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-linear-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        🏆 Badge Recenti
                    </span>
                </div>
            </div>

            {/* Griglia Badge */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {badges.map((badge) => {
                    const Icon = badge.icon;
                    const isHovered = hoveredBadge === badge.id;

                    return (
                        <div
                            key={badge.id}
                            className="relative flex flex-col items-center"
                            onMouseEnter={() => setHoveredBadge(badge.id)}
                            onMouseLeave={() => setHoveredBadge(null)}
                        >
                            {/* Tooltip */}
                            {isHovered && badge.city && (
                                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-30 animate-in fade-in slide-in-from-bottom-2 duration-200">
                                    <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-2xl text-xs font-semibold whitespace-nowrap">
                                        📍 {badge.city}
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                                    </div>
                                </div>
                            )}

                            {/* Badge Container */}
                            <div className={`relative cursor-pointer transition-all duration-300 ${isHovered ? 'scale-110 -translate-y-2' : 'hover:scale-105'
                                }`}>
                                {/* Glow Effect */}
                                <div className={`absolute inset-0 rounded-full bg-linear-to-r ${badge.color || 'from-yellow-400 to-orange-500'} blur-xl opacity-0 ${isHovered ? 'opacity-60' : ''
                                    } transition-opacity duration-300`}></div>

                                {/* Badge Circle */}
                                <div className={`relative w-20 h-20 flex items-center justify-center rounded-full bg-linear-to-br ${badge.color || 'from-yellow-400 to-orange-500'
                                    } shadow-xl`}>
                                    {/* Inner Circle */}
                                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-inner">
                                        <Icon className={`w-9 h-9 ${isHovered ? 'animate-bounce' : ''
                                            }`} style={{
                                                background: `linear-gradient(135deg, ${badge.color?.includes('yellow') ? '#f59e0b' : badge.color?.includes('blue') ? '#3b82f6' : badge.color?.includes('purple') ? '#a855f7' : '#10b981'}, ${badge.color?.includes('yellow') ? '#ea580c' : badge.color?.includes('blue') ? '#06b6d4' : badge.color?.includes('purple') ? '#ec4899' : '#059669'})`,
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text'
                                            }} />
                                    </div>

                                    {/* Rotating Ring */}
                                    <div className={`absolute inset-0 rounded-full border-2 border-dashed border-white/50 ${isHovered ? 'animate-spin' : ''
                                        }`} style={{ animationDuration: '3s' }}></div>

                                    {/* Pulse Ring */}
                                    {isHovered && (
                                        <div className="absolute inset-0 rounded-full ring-4 ring-white/30 animate-ping"></div>
                                    )}
                                </div>
                            </div>

                            {/* Badge Name */}
                            <span className={`mt-3 text-sm font-bold text-center transition-all duration-300 ${isHovered ? 'text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 scale-105' : 'text-gray-700'
                                }`}>
                                {badge.name}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Footer decorativo */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-center space-x-2 text-sm text-gray-500">
                <Award className="w-4 h-4" />
                <span className="font-medium">Continua a esplorare per sbloccare più badge!</span>
            </div>
        </div>
    );
};

export default UserInfoCard;