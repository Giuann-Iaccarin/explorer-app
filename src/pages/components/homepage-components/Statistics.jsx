import { Trophy } from 'lucide-react';
import CircularProgress from './CircularProgress';

const Statistics = ({ stats }) => {
    const badgePercentage = (stats.earnedBadges / stats.totalBadges) * 100;
    const cityPercentage = (stats.citiesVisited / 20) * 100; // Assumendo 20 città totali
    const missionPercentage = (stats.missionsCompleted / 50) * 100; // Assumendo 50 missioni totali

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Trophy className="w-6 h-6 mr-2 text-orange-500" />
                Statistiche
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Medaglie Ottenute */}
                <div className="flex flex-col items-center">
                    <CircularProgress percentage={badgePercentage} color="url(#gradient1)">
                        <div className="text-3xl font-bold text-yellow-600">{stats.earnedBadges}</div>
                        <div className="text-xs text-gray-500">/{stats.totalBadges}</div>
                    </CircularProgress>
                    <div className="text-sm font-semibold text-gray-700 mt-3 text-center">Medaglie</div>
                    <div className="text-xs text-gray-500">{badgePercentage.toFixed(0)}% completato</div>
                    <svg width="0" height="0">
                        <defs>
                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#fbbf24" />
                                <stop offset="100%" stopColor="#f59e0b" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Città Visitate */}
                <div className="flex flex-col items-center">
                    <CircularProgress percentage={cityPercentage} color="url(#gradient2)">
                        <div className="text-3xl font-bold text-green-600">{stats.citiesVisited}</div>
                        <div className="text-xs text-gray-500">/20</div>
                    </CircularProgress>
                    <div className="text-sm font-semibold text-gray-700 mt-3 text-center">Città</div>
                    <div className="text-xs text-gray-500">{cityPercentage.toFixed(0)}% esplorate</div>
                    <svg width="0" height="0">
                        <defs>
                            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#10b981" />
                                <stop offset="100%" stopColor="#059669" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Missioni Completate */}
                <div className="flex flex-col items-center">
                    <CircularProgress percentage={missionPercentage} color="url(#gradient3)">
                        <div className="text-3xl font-bold text-purple-600">{stats.missionsCompleted}</div>
                        <div className="text-xs text-gray-500">/50</div>
                    </CircularProgress>
                    <div className="text-sm font-semibold text-gray-700 mt-3 text-center">Missioni</div>
                    <div className="text-xs text-gray-500">{missionPercentage.toFixed(0)}% completate</div>
                    <svg width="0" height="0">
                        <defs>
                            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#a855f7" />
                                <stop offset="100%" stopColor="#9333ea" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Livello Utente */}
                <div className="flex flex-col items-center">
                    <CircularProgress percentage={75} color="url(#gradient4)">
                        <div className="text-3xl font-bold text-blue-600">12</div>
                        <div className="text-xs text-gray-500">LVL</div>
                    </CircularProgress>
                    <div className="text-sm font-semibold text-gray-700 mt-3 text-center">Livello</div>
                    <div className="text-xs text-gray-500">750/1000 XP</div>
                    <svg width="0" height="0">
                        <defs>
                            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#2563eb" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Statistics;