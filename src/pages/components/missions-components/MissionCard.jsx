import { MapPin, Trophy, Award, CheckCircle, Clock } from 'lucide-react';

const MissionCard = ({ mission, isCompleted = false, isInProgress = false }) => {
    const difficultyColors = {
        facile: 'bg-green-100 text-green-700',
        media: 'bg-yellow-100 text-yellow-700',
        difficile: 'bg-red-100 text-red-700'
    };

    const categoryIcons = {
        cultura: '🏛️',
        food: '🍝',
        avventura: '🎒',
        shopping: '🛍️'
    };

    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
            <div className="relative h-48">
                <img src={mission.image} alt={mission.name} className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3 flex flex-col space-y-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${mission.type === 'universale' ? 'bg-green-500 text-white' : 'bg-purple-500 text-white'}`}>
                        {mission.type}
                    </span>
                    {isCompleted && (
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Completata
                        </span>
                    )}
                    {isInProgress && (
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            In corso
                        </span>
                    )}
                </div>
                <div className="absolute bottom-3 left-3">
                    <span className="text-3xl">{categoryIcons[mission.category]}</span>
                </div>
            </div>

            <div className="p-5">
                <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{mission.name}</h3>
                    <p className="text-sm text-gray-600">{mission.description}</p>
                </div>

                <div className="flex items-center space-x-3 mb-3">
                    <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-1 text-blue-500" />
                        {mission.city}, {mission.region}
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${difficultyColors[mission.difficulty]}`}>
                        {mission.difficulty}
                    </span>
                </div>

                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {mission.duration}
                    </div>
                </div>

                {isInProgress && mission.progress && (
                    <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Progresso</span>
                            <span className="font-semibold text-gray-700">{mission.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-linear-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all"
                                style={{ width: `${mission.progress}%` }}
                            ></div>
                        </div>
                    </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex space-x-4 text-sm">
                        <span className="text-blue-600 font-semibold flex items-center">
                            <Trophy className="w-4 h-4 mr-1" />
                            +{mission.xp} XP
                        </span>
                        <span className="text-orange-600 font-semibold flex items-center">
                            <Award className="w-4 h-4 mr-1" />
                            +{mission.points} pts
                        </span>
                    </div>

                    {isCompleted ? (
                        <div className="text-sm text-gray-500">{mission.completedDate}</div>
                    ) : isInProgress ? (
                        <button className="bg-linear-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-yellow-600 hover:to-orange-600 transition">
                            Continua
                        </button>
                    ) : (
                        <button className="bg-linear-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-purple-600 transition">
                            Inizia
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MissionCard;