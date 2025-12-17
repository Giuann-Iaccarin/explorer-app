import React, { useState, useEffect } from 'react';
import { TrendingUp, Zap, Star, Award, ChevronRight } from 'lucide-react';

const ProgressBar = ({ current, max, level }) => {
    const [animatedPercentage, setAnimatedPercentage] = useState(0);
    const percentage = (current / max) * 100;
    const remaining = max - current;

    // Animazione al mount
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimatedPercentage(percentage);
        }, 100);
        return () => clearTimeout(timer);
    }, [percentage]);

    // Calcola milestone raggiunte (ogni 25%)
    const milestones = [25, 50, 75, 100];
    const currentMilestone = milestones.filter(m => percentage >= m).length;

    return (
        <div className="bg-linear-to-br from-white via-purple-50/30 to-pink-50/30 rounded-2xl shadow-xl p-8 border border-gray-100 backdrop-blur-sm relative overflow-hidden">
            {/* Decorazione di sfondo animata */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-linear-to-tr from-pink-400/10 to-yellow-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <div className="flex items-center space-x-3 mb-2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-50 animate-pulse"></div>
                                <TrendingUp className="relative w-8 h-8 text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600" style={{
                                    filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))'
                                }} />
                            </div>
                            <h3 className="text-2xl font-black text-gray-800">
                                Progressione Livello
                            </h3>
                        </div>
                        <div className="flex items-center space-x-2 ml-11">
                            <div className="flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-blue-500 to-blue-600 rounded-full shadow-lg">
                                <Star className="w-4 h-4 text-white" />
                                <span className="text-sm font-bold text-white">Livello {level}</span>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-400 animate-pulse" />
                            <div className="flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
                                <Award className="w-4 h-4 text-white" />
                                <span className="text-sm font-bold text-white">Livello {level + 1}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statistiche XP */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center border border-blue-200 shadow-sm">
                        <div className="text-2xl font-black text-blue-600 mb-1">{current}</div>
                        <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">XP Attuali</div>
                    </div>
                    <div className="bg-linear-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center border border-purple-200 shadow-sm">
                        <div className="text-2xl font-black text-purple-600 mb-1">{max}</div>
                        <div className="text-xs font-semibold text-purple-700 uppercase tracking-wider">XP Totali</div>
                    </div>
                    <div className="bg-linear-to-br from-pink-50 to-pink-100 rounded-xl p-4 text-center border border-pink-200 shadow-sm">
                        <div className="text-2xl font-black text-pink-600 mb-1">{remaining}</div>
                        <div className="text-xs font-semibold text-pink-700 uppercase tracking-wider">Mancanti</div>
                    </div>
                </div>

                {/* Barra di Progresso Principale */}
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-bold text-gray-700 flex items-center space-x-2">
                            <Zap className="w-4 h-4 text-yellow-500" />
                            <span>Progresso</span>
                        </span>
                        <span className="text-2xl font-black text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600">
                            {Math.round(percentage)}%
                        </span>
                    </div>

                    {/* Barra con milestone */}
                    <div className="relative">
                        {/* Background track */}
                        <div className="w-full h-8 bg-linear-to-r from-gray-100 to-gray-200 rounded-full shadow-inner overflow-hidden border-2 border-gray-300">
                            {/* Progress fill con gradiente animato */}
                            <div
                                className="h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                                style={{
                                    width: `${animatedPercentage}%`,
                                    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b)',
                                    backgroundSize: '200% 100%',
                                    animation: 'gradient-shift 3s ease infinite'
                                }}
                            >
                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>

                                {/* Pulse effect sulla punta */}
                                {percentage > 5 && (
                                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 animate-pulse"></div>
                                )}
                            </div>
                        </div>

                        {/* Milestone markers */}
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center px-1">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={milestone}
                                    className={`relative flex items-center justify-center w-6 h-6 rounded-full border-2 transition-all duration-500 ${percentage >= milestone
                                        ? 'bg-linear-to-br from-yellow-400 to-orange-500 border-yellow-600 scale-110 shadow-lg'
                                        : 'bg-white border-gray-400'
                                        }`}
                                    style={{ left: `${(milestone / 100) * 100 - (index === milestones.length - 1 ? 6 : 3)}%` }}
                                >
                                    {percentage >= milestone && (
                                        <Star className="w-3 h-3 text-white animate-bounce" style={{ animationDelay: `${index * 100}ms` }} />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Messaggio motivazionale */}
                <div className="bg-linear-to-r from-blue-500 to-purple-500 rounded-xl p-4 text-white shadow-lg">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                                <Zap className="w-6 h-6 text-yellow-300 animate-pulse" />
                            </div>
                            <div>
                                <p className="text-sm font-medium opacity-90">Quasi al prossimo livello!</p>
                                <p className="text-lg font-black">
                                    Solo <span className="text-yellow-300">{remaining} XP</span> rimanenti
                                </p>
                            </div>
                        </div>
                        <div className="hidden sm:flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                            <span className="text-xs font-semibold">{currentMilestone}/4 Milestone</span>
                            <Award className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes gradient-shift {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
            `}</style>
        </div>
    );
};

export default ProgressBar;